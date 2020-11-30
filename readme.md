# BLOB Trigger Function
BLOBコンテナーへファイルがアップロードされた事をトリガーとして動作するFunctionです。


local.settings.json
```
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "DefaultEndpointsProtocol=https;AccountName=xxxxxxxxx;AccountKey=xxxxxxxxx;EndpointSuffix=core.windows.net",
    "SlackWebhookURL": "https://hooks.slack.com/services/XXXXXXX/XXXXXXXXXXXXXXX"
  }
}
```