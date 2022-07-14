import json

from requests import request
with open("20220501.json", "r", encoding="utf-8") as jsonfile:
    data = json.load(jsonfile)
x = []
for n in data:
    [n.pop(key) for key in ['DataKey','RangeKey','type','time','request_creation_time','elb','client:port','county','town','towncode','zipcode','target:port','total_processing_time','elb_status_code','target_status_code','received_bytes','sent_bytes','request','user_agent','ssl_cipher','ssl_protocol','target_group_arn','trace_id','domain_name','chosen_cert_arn','matched_rule_priority','actions_executed','redirect_url','error_reason','target:port_list','target_status_code_list','classification','classification_reason']]
    x.append(n)
with open("20220622.json", "w") as f:
    f.write(json.dumps(x,indent=1))