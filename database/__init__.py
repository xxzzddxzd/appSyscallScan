
###
 # Copyright (c) 2016 Nishant Das Patnaik.
 #
 # Licensed under the Apache License, Version 2.0 (the "License");
 # you may not use this file except in compliance with the License.
 # You may obtain a copy of the License at
 #
 #  http://www.apache.org/licenses/LICENSE-2.0
 #
 # Unless required by applicable law or agreed to in writing, software
 # distributed under the License is distributed on an "AS IS" BASIS,
 # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 # See the License for the specific language governing permissions and
 # limitations under the License.
###

import dataset, json, time, htmlentities
import platform as platform_module
from xml.sax.saxutils import escape
dbinst=''

def save_to_database(db_path, str_json):
  try:
    global dbinst
    str_json = json.loads(str_json.replace("\n", "<br />").replace("\r", "<br />"), strict=False)
    if dbinst == '':
      dbinst=dataset.connect('sqlite:///%s' % (db_path.replace("'", "_")))
    db = dbinst
    table = db['api_captures']
    os_string = platform_module.system()
    if os_string == "Windows":
        formatted_time = time.strftime('%b %d %Y %I:%M %p', time.localtime())
    else:
        formatted_time = time.strftime('%b %d %Y %l:%M %p', time.localtime())
    table.insert(dict(time=formatted_time,
      operation=str_json['txnType'],
      artifact=json.dumps(str_json['artifact']),
      method=str_json['method'],
      module=str_json['lib'],
      belongto=str_json['belongto'],
      remark=''))
  except Exception as e:
    print(str(e))
    print(str_json)

def stringify(data):
  str_data = ""
  if type(data) == dict or type(data) == list:
    return json.dumps(data)
  else:
    try:
      str_data = str(data)
      return str_data
    except Exception as e:
      return data

import csv, codecs, io
class UnicodeWriter:
    """
    A CSV writer which will write rows to CSV file "f",
    which is encoded in the given encoding.
    """
    def __init__(self, f, dialect=csv.excel, encoding="utf-8", **kwds):
        # Redirect output to a queue
        self.queue = io.StringIO()
        self.writer = csv.writer(self.queue, dialect=dialect, **kwds)
        self.stream = f
        self.encoder = codecs.getincrementalencoder(encoding)()
    def writerow(self, row):
        self.writer.writerow([str(s) for s in row])
        # Fetch UTF-8 output from the queue ...
        data = self.queue.getvalue()
        # data = data.decode("utf-8")
        # ... and reencode it into the target encoding
        data = self.encoder.encode(data)
        # write to the target stream
        self.stream.write(data)
        # empty queue
        self.queue.truncate(0)
    def writerows(self, rows):
        for row in rows:
            self.writerow(row)

def write_to_csv(db_path):
  print("dbpath",db_path)
  # conn = sqlite3.connect(db_path)
  # c = conn.cursor()
  # c.execute('SELECT * FROM api_captures ')
  global dbinst
  if dbinst == '':
      dbinst=dataset.connect('sqlite:///%s' % (db_path.replace("'", "_")))
  db = dbinst
  api_captures = db.query('SELECT * FROM api_captures ')# GROUP BY artifact')
  writer = UnicodeWriter(open("export_data.csv", "wb"))
  writer.writerows(api_captures)    

def read_from_database(db_path, index=0):
  # write_to_csv(db_path)
  result_set = {}
  parent_holder = []
  csv_holder =[]
  global dbinst
  if dbinst == '':
      dbinst=dataset.connect('sqlite:///%s' % (db_path.replace("'", "_")))
  db = dbinst
  api_captures = db.query('SELECT * FROM api_captures ')# GROUP BY artifact')
  for capture in api_captures:
    child_holder = []
    child_holder.append(capture['operation'])
    child_holder.append(capture['module'])
    child_holder.append(capture['method'])
    child_holder.append(capture['belongto'])
    str_artifact = ''
    csv_str_artifact = ''
    artifacts = json.loads(capture['artifact'])
    
    for artifact in artifacts:
      if "name" in artifact:
        artifact_name = artifact['name']
      else:
        artifact_name = ""
      if "value" in artifact:
        artifact_value = artifact['value']
        try:
            artifact_value = artifact_value.replace("<", "&lt;").replace(">", "&gt;")
        except AttributeError as e:
            pass
      else:
        artifact_value = ""
      # str_artifact += 'Name: ' + stringify(artifact_name) + '\n' + stringify(artifact_value) + '\n\n' # artifact['value'], str(artifact['argSeq'])
      str_artifact += stringify(artifact_value) + '\n\n' # artifact['value'], str(artifact['argSeq'])
      csv_str_artifact = str_artifact
      str_artifact = str_artifact.replace('\n', '<br/>').replace('\\n', '<br/>').replace('\\"', '"').replace('Name: ', '<b>Name: </b>')

    #print str_artifact

    child_holder.append(str_artifact)
    child_holder.append(capture['time'])
    child_holder.append(capture['id'])
    child_holder.append(capture['remark'])
    parent_holder.append(child_holder)



    csv_child_holder = []
    csv_child_holder.append(capture['operation'])
    csv_child_holder.append(capture['module'])
    csv_child_holder.append(capture['method'])
    csv_child_holder.append(capture['belongto'])
    csv_child_holder.append(csv_str_artifact)
    csv_child_holder.append(capture['time'])
    csv_child_holder.append(capture['id'])
    csv_child_holder.append(capture['remark'])
    csv_holder.append(csv_child_holder)
  result_set['data'] = parent_holder
  # writer = UnicodeWriter(open("export_data.csv", "wb"))
  # writer.writerows(parent_holder)    
  headers=['分类','模块','方法','隶属于','调用栈','时间','序号','Remark']
  with open('result.csv','w')as f:
    f_csv = csv.writer(f)
    f_csv.writerow(headers)
    f_csv.writerows(csv_holder)
  return json.dumps(result_set)

