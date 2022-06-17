define({ "api": [
  {
    "type": "put",
    "url": "/api/accountManager/changePw/:devId",
    "title": "修改单个帐号密码",
    "version": "1.0.0",
    "name": "AccountChangePwdOne",
    "group": "Account",
    "description": "<p>修改单个帐号密码。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "devId",
            "description": "<p>设备ID。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>帐号名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountManager/changePw/1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/account/web/api/AccountController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/accountManager/changePw/:devId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/accountManager/dialTest/:devId",
    "title": "登录测试单个帐号",
    "version": "1.0.0",
    "name": "AccountDialTestOne",
    "group": "Account",
    "description": "<p>登录测试单个帐号。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "devId",
            "description": "<p>设备ID。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accountName",
            "description": "<p>帐号名。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountManager/dialTest/1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/account/web/api/AccountController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/accountManager/dialTest/:devId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/secretChangePlan",
    "title": "创建改密计划",
    "version": "1.0.0",
    "name": "AddSecretChangePlan",
    "group": "Account",
    "description": "<p>创建改密计划。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "devType",
            "description": "<p>资源类型 0 - 主机，1 - 数据库。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "accountType",
            "description": "<p>帐号类型。true - 特权帐号，false - 普通帐号</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "period",
            "description": "<p>执行周期信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rule",
            "description": "<p>生成密码规则。rule:{id:1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "servSys",
            "description": "<p>业务系统。例如：servSys:{id:20}。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 Created\n{\n    \"id\":65\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>改密计划ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "servSys",
            "description": "<p>业务系统。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "accountType",
            "description": "<p>帐号类型。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "devType",
            "description": "<p>设备类型。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "period",
            "description": "<p>改密的周期定义。 period:{startAt:&quot;2017-04-05 17:25:02&quot;,type:&quot;day&quot;,interval:1}</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "rule",
            "description": "<p>生成密码的规则。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "lastTime",
            "description": "<p>上一次改密的时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "nextTime",
            "description": "<p>下一次改密的时间。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/business/sc/web/api/SecretChangePlanController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/secretChangePlan"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/secretChangePlan/delete/:id",
    "title": "删除改密计划",
    "version": "1.0.0",
    "name": "DeleteSecretChangePlan",
    "group": "Account",
    "description": "<p>删除改密计划。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>改密计划的ID。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/secretChangePlan/delete/1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/sc/web/api/SecretChangePlanController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/secretChangePlan/delete/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/accountManager/accInspStatis/getAccInspHistory",
    "title": "获取帐号巡检定期巡检记录",
    "version": "1.0.0",
    "name": "GetAccountAccInspHistory",
    "group": "Account",
    "description": "<p>获取帐号巡检定期巡检记录列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accInspStatis/getAccInspHistory",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n    [1497423420130,1497423420105,\n     1497404121864,1497404035695\n    ]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/sc/web/api/AccountInspStatisController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/accountManager/accInspStatis/getAccInspHistory"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/accountManager/getLatestAccountInsp",
    "title": "获取异常帐号信息",
    "version": "1.0.0",
    "name": "GetAccountInspList",
    "group": "Account",
    "description": "<p>获取帐号巡检发现的异常帐号。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountManager/getLatestAccountInsp?size=10&sort=updateTime,desc",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>返回第几页记录，从0开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序方式。格式为属性名（,asc|desc），缺省为升序（asc）。属性名可选值为dev.ip，dev.name，updateTime。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"content\": [\n  {\n  \"account\": \"root\",\n  \"desc\": \"登录失败\",\n  \"detail\": \"timeout when matching:[#].\",\n  \"dev\": {\n      \"id\": 40051,\n      \"ip\": \"10.10.2.6\",\n      \"joinTime\": 1497255633834,\n      \"name\": \"IBM1\",\n  },\n  \"id\": 92718,\n  \"inspType\": 1,\n  \"updateTime\": 1497424348143\n  }\n  ],\n \"first\": true,\n \"last\": false,\n \"number\": 0,\n \"numberOfElements\": 1,\n \"size\": 1,\n \"sort\": [\n {\n  \"ascending\": true,\n  \"descending\": false,\n  \"direction\": \"ASC\",\n  \"ignoreCase\": false,\n  \"nullHandling\": \"NATIVE\",\n  \"property\": \"dev.ip\"\n }\n ],\n \"totalElements\": 81673,\n \"totalPages\": 81673\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>帐号名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "inspType",
            "description": "<p>异常帐号类型。zombie 僵尸帐号，weak 弱密码帐号， network 网络异常帐号，linked 登录失败帐号，pwdExpired 三个月未改密帐，mention 提权帐号。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "updateTime",
            "description": "<p>巡检时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>简单形式的错误描述。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>详细的错误描述信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/business/account/web/api/AccountController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/accountManager/getLatestAccountInsp"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/accountManager/getLatestAccountInspStatis",
    "title": "获取异常帐号统计数量",
    "version": "1.0.0",
    "name": "GetAccountInspStatistic",
    "group": "Account",
    "description": "<p>获取帐号巡检发现的异常帐号统计信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountManager/getLatestAccountInspStatis",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "allAbnormal",
            "description": "<p>全部异常帐号的数量。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "zombie",
            "description": "<p>僵尸帐号的数量。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "weak",
            "description": "<p>弱密码帐号的数量。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "network",
            "description": "<p>由于网络问题导致帐号无法登录的帐号数量。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "linked",
            "description": "<p>由于帐号名和密码不匹配导致无法登录的帐号数量。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "pwdExpired",
            "description": "<p>三个月未改密帐号的数量。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "mention",
            "description": "<p>提权帐号的数量。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n   \"allAbnormal\":81673,\n   \"zombie\":0,\n   \"weak\":1275,\n   \"network\":3747,\n   \"linked\":76651,\n   \"pwdExpired\":0,\n   \"mention\":0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/account/web/api/AccountController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/accountManager/getLatestAccountInspStatis"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/accountManager/autofind/getconfirmdata",
    "title": "帐号确认,返回帐号统计数据",
    "version": "1.0.0",
    "name": "GetConfirmData",
    "group": "Account",
    "description": "<p>帐号确认,返回帐号统计数据</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountManager/autofind/getconfirmdata?search=2.33",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n  {\"devId\":39,\n   \"devName\":\"2.33test2\",\n   \"devIp\":\"10.10.2.33\",\n   \"devType\":\"0\",\n   \"ownerName\":\"admin\",\n   \"ownerId\":1,\n   \"accountCount\":7,\n   \"sysTypeName\":\"Linux\"\n  },\n ......\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/account/web/api/AccountController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shtermapi/accountManager/autofind/getconfirmdata"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/accountManager/autofind/getconfirmdata",
    "title": "获取单个设备全部待确认帐号",
    "version": "1.0.0",
    "name": "GetOneDevAccount",
    "group": "Account",
    "description": "<p>获取单个设备全部待确认帐号</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "devId",
            "description": "<p>设备的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>加载类型,通过设备点击:0,点击更多:1</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountManager/autofind/getOneDevAccount?devId=34&type=0",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\"ftptest\",\"rabbitmq\",\"ROOT\"]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/account/web/api/AccountController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shtermapi/accountManager/autofind/getconfirmdata"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/accountManager/phantomPage",
    "title": "获取符合条件的幽灵帐号列表",
    "version": "1.0.0",
    "name": "GetPhantomAccount",
    "group": "Account",
    "description": "<p>获取符合条件的幽灵帐号列表 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountManager/phantomPage?size=10&sort=endTime,desc",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"last\":false,\n \"totalElements\":320,\n \"totalPages\":32,\n \"number\":0,\n \"size\":10,\n \"first\":true,\n \"numberOfElements\":10\n\"content\":[\n {\"id\":1,\"name\":\"webdriver\",\"priv\":true,\"type\":0},\n ......\n ],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/account/web/api/AccountController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shtermapi/accountManager/phantomPage"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/secretChangePlan/findByEnd/:planId",
    "title": "获取改密计划的改密记录",
    "version": "1.0.0",
    "name": "GetSecretChangePlanLog",
    "group": "Account",
    "description": "<p>获取改密计划的改密记录列表。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "planId",
            "description": "<p>改密计划的ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/secretChangePlan/findByEnd/12",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n    [\n     {accounts:\"root\",\n     begin:1497662400104,\n     devs:\"Linux27\",\n     end:1497662400528,\n     executor:\"$SYSTEM\",\n     id:\"AVyzo5aQEAz4jq3wZPOH\",\n     plan_id:1001,\n     plan_name:\"110-主机-特权帐号\",\n     reason:\"IP不可达\",\n     result:1,\n     rule_id:3,\n     rule_name:\"shterm3\"\n     }\n    ]",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>改密记录的唯一ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "planId",
            "description": "<p>所属改密计划的ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "planName",
            "description": "<p>改密计划的名称。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "resTypeName",
            "description": "<p>资源类型名称。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "executorId",
            "description": "<p>执行人ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "executor",
            "description": "<p>执行人名称。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "devs",
            "description": "<p>改密的设备名称列表。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "accounts",
            "description": "<p>改密的帐号列表。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "ruleId",
            "description": "<p>密码生成规则ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "ruleName",
            "description": "<p>密码生成规则名称。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "begin",
            "description": "<p>改密计划执行开始时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "end",
            "description": "<p>改密计划执行结束时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>改密结果0-成功，1-失败，2-正在进行。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>改密失败原因。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/business/sc/web/api/SecretChangePlanController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/secretChangePlan/findByEnd/:planId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/accountManager/autofind/interrupt",
    "title": "中断帐号发现",
    "version": "1.0.0",
    "name": "InterruptAccountAutofind",
    "group": "Account",
    "description": "<p>中断帐号发现。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountManager/autofind/interrupt",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/account/web/api/AccountController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/accountManager/autofind/interrupt"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/secretChangePlan/run/bacth",
    "title": "启动执行改密计划",
    "version": "1.0.0",
    "name": "RunBatchSecretChangePlan",
    "group": "Account",
    "description": "<p>批量执行启动执行改密计划。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "params",
            "description": "<p>批量执行的内容。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/secretChangePlan/run/bacth",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/sc/web/api/SecretChangePlanController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/secretChangePlan/run/bacth"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/secretChangePlan/runnow/:id",
    "title": "启动执行改密计划",
    "version": "1.0.0",
    "name": "RunnowSecretChangePlan",
    "group": "Account",
    "description": "<p>启动执行改密计划。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>改密计划的ID。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/secretChangePlan/runnow/1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/sc/web/api/SecretChangePlanController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/secretChangePlan/runnow/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/secretChangePlan/logNav/:planlogId",
    "title": "获取改密计划某次改密记录统计信息",
    "version": "1.0.0",
    "name": "SecretChangePlanLogOne",
    "group": "Account",
    "description": "<p>获取改密计划某次改密记录统计信息。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "planlogId",
            "description": "<p>改密计划的ID。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/secretChangePlan/logNav/1",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>改密结果。可能取值 全部，成功，失败。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>改密结果的数量。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[{name:\"全部\",count:\"3\"},\n {name:\"成功\",count:\"3\"},\n {name:\"失败\",count:\"0\"}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/sc/web/api/SecretChangePlanController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/secretChangePlan/logNav/:planlogId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/accountManager/autofind/range",
    "title": "启动帐号发现",
    "version": "1.0.0",
    "name": "StartAccountAutofind",
    "group": "Account",
    "description": "<p>启动帐号发现。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "devIds",
            "description": "<p>设备ID，使用逗号分割的多个设备ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startIp",
            "description": "<p>开始IP地址。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endIp",
            "description": "<p>结束IP地址。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountManager/autofind/range",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/account/web/api/AccountController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/accountManager/autofind/range"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/accountManager/insp/:mode",
    "title": "启动帐号巡检",
    "version": "1.0.0",
    "name": "StartAccountInsps",
    "group": "Account",
    "description": "<p>启动帐号巡检。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "String",
            "optional": false,
            "field": "mode",
            "description": "<p>巡检方式：accurate-精确扫描；range-按IP范围扫描；abnormal-巡检所有存在异常帐号的设备。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "devIds",
            "description": "<p>设备ID，使用逗号分割的多个设备ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startIp",
            "description": "<p>开始IP地址。巡检方式为按IP范围扫描时使用。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endIp",
            "description": "<p>结束IP地址。巡检方式为按IP范围扫描时使用。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountManager/insp/:mode",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\":\"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/account/web/api/AccountController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/accountManager/insp/:mode"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/secretChangePlan/:id",
    "title": "更新改密计划",
    "version": "1.0.0",
    "name": "UpdateSecretChangePlan",
    "group": "Account",
    "description": "<p>更新改密计划。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>改密计划的ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "devType",
            "description": "<p>资源类型 0 - 主机，1 - 数据库。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "accountType",
            "description": "<p>帐号类型。true - 特权帐号，false - 普通帐号</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "period",
            "description": "<p>执行周期信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "rule",
            "description": "<p>生成密码规则。rule:{id:1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "servSys",
            "description": "<p>业务系统。例如：servSys:{id:20}。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>改密计划ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "servSys",
            "description": "<p>业务系统。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "accountType",
            "description": "<p>帐号类型。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "devType",
            "description": "<p>设备类型。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "period",
            "description": "<p>改密的周期定义。 period:{startAt:&quot;2017-04-05 17:25:02&quot;,type:&quot;day&quot;,interval:1}</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "rule",
            "description": "<p>生成密码的规则。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "lastTime",
            "description": "<p>上一次改密的时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "nextTime",
            "description": "<p>下一次改密的时间。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/business/sc/web/api/SecretChangePlanController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/secretChangePlan/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/accountManager/autofind/getScanData",
    "title": "轮询获取扫描数据",
    "version": "1.0.0",
    "name": "getScanData",
    "group": "Account",
    "description": "<p>轮询获取扫描数据</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountManager/autofind/getScanData",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n   \"taskNum\":7,\n   \"scanresult\":{\"devInfo\" : {}}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/account/web/api/AccountController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shtermapi/accountManager/autofind/getScanData"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/accountRecentTask/recentTaskList",
    "title": "获取帐号管理最近任务",
    "version": "1.0.0",
    "name": "recentTaskList",
    "group": "Account",
    "description": "<p>获取帐号管理最近任务</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/accountRecentTask/recentTaskList",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n{\"id\":4,\"type\":4,\"lastTime\":1497499202728,\"lastInfo\":{\"result\":true},\"nextTime\":1497758400000},\n......\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/account/web/api/AccountRecentTaskController.java",
    "groupTitle": "Account",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shtermapi/accountRecentTask/recentTaskList"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/authType/:id",
    "title": "删除认证方式",
    "version": "1.0.0",
    "name": "DeleteAuthType",
    "group": "AuthType",
    "description": "<p>根据认证方式id删除对应的认证方式。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>认证方式ID。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "认证方式不存或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/system/web/api/AuthTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authType/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/authType/:id",
    "title": "查询认证方式信息(根据id)",
    "version": "1.0.0",
    "name": "GetAuthTypeById",
    "group": "AuthType",
    "description": "<p>根据认证方式id获取对应认证方式信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/authType/2",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>认证方式 ID</p>"
          }
        ],
        "configurations配置参数说明": [
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": "<p>本地认证：密码长度 length, 复杂度 complex（0-不限；1-字母数字；2-字母数字特殊；3-大小写字母数字特殊字符四类中的三类）； 有效期 validity（具体天数；0-不限）；过期处理 expire（0-禁止登录；1-仅提醒）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "ldap",
            "description": "<p>LDAP认证：type（AD/LDAP）; 地址 host；baseDN；adminDN；adminPwd；用户属性同步名称 userNameAttr；安全连接 ssl（true/false）； 同步用户角色 role（从 tbl_role 表获取 id）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": "<p>RADIUS认证：认证方式 type（PAP/CHAP）； 服务器地址 host（格式样例：1.1.1.1,2.2.2.2:1812）；共享密钥 shareKey。</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "sms",
            "description": "<p>短信认证：号码对应的用户附加信息属性名 attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "wechat",
            "description": "<p>微信认证：微信号对应的用户附加信息属性名attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totp",
            "description": "<p>动态令牌认证：无参数，独立存储于动态令牌表</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totpmobile",
            "description": "<p>手机令牌认证：偏移时间窗 delayWindow</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "mix",
            "description": "<p>双因素认证： 认证方式1 authtype1：支持radius、ldap、native、totp（存放 tbl_authtype.auth_name）； 认证方式2 authtype2：支持radius、ldap、native、totp、totpmobile ；双因素之间的关系 rela (0表示或，1表示与)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n {\n \"id\":1,\n \"name\":\"native\",\n \"type\":1,\n \"configurations\":{\"expire\":\"1\",\"length\":6,\"complex\":\"1\",\"validity\":\"180\"},\n \"enabled\":true\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>认证方式ID</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>认证类型名,系统预置的认证类型包括： native，ldap，radius，sms，wechat，totp，totpmobile。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "1-2",
            "optional": false,
            "field": "type",
            "defaultValue": "2",
            "description": "<p>认证类型，1-单因子;2-双因子。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>认证配置信息。不同认证方式拥有不同配置</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "defaultValue": "true",
            "description": "<p>认证方式的启用类型，false 未启用，true 启用。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "认证方式不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/system/web/api/AuthTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authType/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/authType/name/:name",
    "title": "查询认证方式信息(根据name)",
    "version": "1.0.0",
    "name": "GetAuthTypeByName",
    "group": "AuthType",
    "description": "<p>根据认证方式名称获取认证方式。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/authType/name/native",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>认证方式名称</p>"
          }
        ],
        "configurations配置参数说明": [
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": "<p>本地认证：密码长度 length, 复杂度 complex（0-不限；1-字母数字；2-字母数字特殊；3-大小写字母数字特殊字符四类中的三类）； 有效期 validity（具体天数；0-不限）；过期处理 expire（0-禁止登录；1-仅提醒）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "ldap",
            "description": "<p>LDAP认证：type（AD/LDAP）; 地址 host；baseDN；adminDN；adminPwd；用户属性同步名称 userNameAttr；安全连接 ssl（true/false）； 同步用户角色 role（从 tbl_role 表获取 id）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": "<p>RADIUS认证：认证方式 type（PAP/CHAP）； 服务器地址 host（格式样例：1.1.1.1,2.2.2.2:1812）；共享密钥 shareKey。</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "sms",
            "description": "<p>短信认证：号码对应的用户附加信息属性名 attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "wechat",
            "description": "<p>微信认证：微信号对应的用户附加信息属性名attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totp",
            "description": "<p>动态令牌认证：无参数，独立存储于动态令牌表</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totpmobile",
            "description": "<p>手机令牌认证：偏移时间窗 delayWindow</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "mix",
            "description": "<p>双因素认证： 认证方式1 authtype1：支持radius、ldap、native、totp（存放 tbl_authtype.auth_name）； 认证方式2 authtype2：支持radius、ldap、native、totp、totpmobile ；双因素之间的关系 rela (0表示或，1表示与)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n {\n \"id\":1,\n \"name\":\"native\",\n \"type\":1,\n \"configurations\":{\"expire\":\"1\",\"length\":6,\"complex\":\"1\",\"validity\":\"180\"},\n \"enabled\":true\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>认证方式ID</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>认证类型名,系统预置的认证类型包括： native，ldap，radius，sms，wechat，totp，totpmobile。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "1-2",
            "optional": false,
            "field": "type",
            "defaultValue": "2",
            "description": "<p>认证类型，1-单因子;2-双因子。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>认证配置信息。不同认证方式拥有不同配置</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "defaultValue": "true",
            "description": "<p>认证方式的启用类型，false 未启用，true 启用。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "认证方式不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/system/web/api/AuthTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authType/name/:name"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/authType/enabled",
    "title": "获取启用的认证方式列表",
    "version": "1.0.0",
    "name": "GetAuthTypeEnabled",
    "group": "AuthType",
    "description": "<p>获取系统的所有认证方式。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/authType/enabled",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n [\n {\"id\":2,\"name\":\"ldap\",\"type\":1,\"enabled\":true},\n {\"id\":3,\"name\":\"sms\",\"type\":1,\"enabled\":true},\n {\"id\":4,\"name\":\"wechat\",\"type\":1,\"enabled\":true},\n {\"id\":6,\"name\":\"totp\",\"type\":1,\"enabled\":true},\n {\"id\":7,\"name\":\"totpmobile\",\"type\":1,\"enabled\":true},\n {\"id\":1,\"name\":\"native\",\"type\":1,\"configurations\":{\"expire\":\"1\",\"length\":6,\"complex\":\"1\",\n     \"validity\":\"180\"},\"enabled\":true},\n {\"id\":5,\"name\":\"radius\",\"type\":1,\"configurations\":{\"host\":123456789,\"type\":{\"name\":\"PAP\"},\n     \"shareKey\":\"123456789\"},\"enabled\":true}\n ]",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>认证方式ID</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>认证类型名,系统预置的认证类型包括： native，ldap，radius，sms，wechat，totp，totpmobile。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "1-2",
            "optional": false,
            "field": "type",
            "defaultValue": "2",
            "description": "<p>认证类型，1-单因子;2-双因子。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>认证配置信息。不同认证方式拥有不同配置</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "defaultValue": "true",
            "description": "<p>认证方式的启用类型，false 未启用，true 启用。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/system/web/api/AuthTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authType/enabled"
      }
    ],
    "parameter": {
      "fields": {
        "configurations配置参数说明": [
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": "<p>本地认证：密码长度 length, 复杂度 complex（0-不限；1-字母数字；2-字母数字特殊；3-大小写字母数字特殊字符四类中的三类）； 有效期 validity（具体天数；0-不限）；过期处理 expire（0-禁止登录；1-仅提醒）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "ldap",
            "description": "<p>LDAP认证：type（AD/LDAP）; 地址 host；baseDN；adminDN；adminPwd；用户属性同步名称 userNameAttr；安全连接 ssl（true/false）； 同步用户角色 role（从 tbl_role 表获取 id）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": "<p>RADIUS认证：认证方式 type（PAP/CHAP）； 服务器地址 host（格式样例：1.1.1.1,2.2.2.2:1812）；共享密钥 shareKey。</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "sms",
            "description": "<p>短信认证：号码对应的用户附加信息属性名 attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "wechat",
            "description": "<p>微信认证：微信号对应的用户附加信息属性名attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totp",
            "description": "<p>动态令牌认证：无参数，独立存储于动态令牌表</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totpmobile",
            "description": "<p>手机令牌认证：偏移时间窗 delayWindow</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "mix",
            "description": "<p>双因素认证： 认证方式1 authtype1：支持radius、ldap、native、totp（存放 tbl_authtype.auth_name）； 认证方式2 authtype2：支持radius、ldap、native、totp、totpmobile ；双因素之间的关系 rela (0表示或，1表示与)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/authType",
    "title": "获取认证方式列表",
    "version": "1.0.0",
    "name": "GetAuthTypes",
    "group": "AuthType",
    "description": "<p>获取系统的所有认证方式。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/authType",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n [\n {\"id\":2,\"name\":\"ldap\",\"type\":1,\"enabled\":true},\n {\"id\":3,\"name\":\"sms\",\"type\":1,\"enabled\":true},\n {\"id\":4,\"name\":\"wechat\",\"type\":1,\"enabled\":true},\n {\"id\":6,\"name\":\"totp\",\"type\":1,\"enabled\":true},\n {\"id\":7,\"name\":\"totpmobile\",\"type\":1,\"enabled\":true},\n {\"id\":1,\"name\":\"native\",\"type\":1,\"configurations\":{\"expire\":\"1\",\"length\":6,\n     \"complex\":\"1\",\"validity\":\"180\"},\"enabled\":true},\n {\"id\":5,\"name\":\"radius\",\"type\":1,\"configurations\":{\"host\":123456789,\"type\":\n     {\"name\":\"PAP\"},\"shareKey\":\"123456789\"},\"enabled\":true}\n ]",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>认证方式ID</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>认证类型名,系统预置的认证类型包括： native，ldap，radius，sms，wechat，totp，totpmobile。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "1-2",
            "optional": false,
            "field": "type",
            "defaultValue": "2",
            "description": "<p>认证类型，1-单因子;2-双因子。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>认证配置信息。不同认证方式拥有不同配置</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "defaultValue": "true",
            "description": "<p>认证方式的启用类型，false 未启用，true 启用。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/system/web/api/AuthTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authType"
      }
    ],
    "parameter": {
      "fields": {
        "configurations配置参数说明": [
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": "<p>本地认证：密码长度 length, 复杂度 complex（0-不限；1-字母数字；2-字母数字特殊；3-大小写字母数字特殊字符四类中的三类）； 有效期 validity（具体天数；0-不限）；过期处理 expire（0-禁止登录；1-仅提醒）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "ldap",
            "description": "<p>LDAP认证：type（AD/LDAP）; 地址 host；baseDN；adminDN；adminPwd；用户属性同步名称 userNameAttr；安全连接 ssl（true/false）； 同步用户角色 role（从 tbl_role 表获取 id）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": "<p>RADIUS认证：认证方式 type（PAP/CHAP）； 服务器地址 host（格式样例：1.1.1.1,2.2.2.2:1812）；共享密钥 shareKey。</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "sms",
            "description": "<p>短信认证：号码对应的用户附加信息属性名 attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "wechat",
            "description": "<p>微信认证：微信号对应的用户附加信息属性名attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totp",
            "description": "<p>动态令牌认证：无参数，独立存储于动态令牌表</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totpmobile",
            "description": "<p>手机令牌认证：偏移时间窗 delayWindow</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "mix",
            "description": "<p>双因素认证： 认证方式1 authtype1：支持radius、ldap、native、totp（存放 tbl_authtype.auth_name）； 认证方式2 authtype2：支持radius、ldap、native、totp、totpmobile ；双因素之间的关系 rela (0表示或，1表示与)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/authType",
    "title": "新增认证方式",
    "version": "1.0.0",
    "name": "PostAuthType",
    "group": "AuthType",
    "description": "<p>新增认证方式。</p>",
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n{\n \"id\":180,\n \"name\":\"mix039\",\n \"type\":2,\n \"configurations\":{\n                   \"authtype1\":\"radius\",\n                   \"authtype2\":\"totp\",\n                   \"rela\":\"1\"\n                  },\n \"enabled\":true\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>认证方式ID</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>认证类型名,系统预置的认证类型包括： native，ldap，radius，sms，wechat，totp，totpmobile。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "1-2",
            "optional": false,
            "field": "type",
            "defaultValue": "2",
            "description": "<p>认证类型，1-单因子;2-双因子。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>认证配置信息。不同认证方式拥有不同配置</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "defaultValue": "true",
            "description": "<p>认证方式的启用类型，false 未启用，true 启用。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/system/web/api/AuthTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authType"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>认证类型名,系统预置的认证类型包括：native，ldap，radius，sms，wechat，totp，totpmobile。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2",
            "optional": true,
            "field": "type",
            "defaultValue": "2",
            "description": "<p>认证类型，1单因子，2双因子。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>双因子认证配置信息： 认证方式1 authtype1：支持radius、ldap、native、totp（存放 tbl_authtype.auth_name）； 认证方式2 authtype2：支持radius、ldap、native、totp、totpmobile ；双因素之间的关系 rela (0表示或，1表示与)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "enabled",
            "defaultValue": "true",
            "description": "<p>认证方式的启用类型，false 未启用，true 启用。</p>"
          }
        ],
        "configurations配置参数说明": [
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": "<p>本地认证：密码长度 length, 复杂度 complex（0-不限；1-字母数字；2-字母数字特殊；3-大小写字母数字特殊字符四类中的三类）； 有效期 validity（具体天数；0-不限）；过期处理 expire（0-禁止登录；1-仅提醒）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "ldap",
            "description": "<p>LDAP认证：type（AD/LDAP）; 地址 host；baseDN；adminDN；adminPwd；用户属性同步名称 userNameAttr；安全连接 ssl（true/false）； 同步用户角色 role（从 tbl_role 表获取 id）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": "<p>RADIUS认证：认证方式 type（PAP/CHAP）； 服务器地址 host（格式样例：1.1.1.1,2.2.2.2:1812）；共享密钥 shareKey。</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "sms",
            "description": "<p>短信认证：号码对应的用户附加信息属性名 attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "wechat",
            "description": "<p>微信认证：微信号对应的用户附加信息属性名attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totp",
            "description": "<p>动态令牌认证：无参数，独立存储于动态令牌表</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totpmobile",
            "description": "<p>手机令牌认证：偏移时间窗 delayWindow</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "mix",
            "description": "<p>双因素认证： 认证方式1 authtype1：支持radius、ldap、native、totp（存放 tbl_authtype.auth_name）； 认证方式2 authtype2：支持radius、ldap、native、totp、totpmobile ；双因素之间的关系 rela (0表示或，1表示与)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n  \"name\":\"mix039\",\n  \"type\":2,\n  \"configurations\": {\n    \"authtype1\":\"radius\",\n    \"authtype2\":\"totp\",\n    \"rela\":\"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/authType:id",
    "title": "修改指定id认证方式的配置",
    "version": "1.0.0",
    "name": "PutAuthType",
    "group": "AuthType",
    "description": "<p>更新指定id的认证方式。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/authType/2",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>认证方式 ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>认证配置信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "enabled",
            "defaultValue": "true",
            "description": "<p>认证方式的启用类型，false 未启用，true 启用。</p>"
          }
        ],
        "configurations配置参数说明": [
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": "<p>本地认证：密码长度 length, 复杂度 complex（0-不限；1-字母数字；2-字母数字特殊；3-大小写字母数字特殊字符四类中的三类）； 有效期 validity（具体天数；0-不限）；过期处理 expire（0-禁止登录；1-仅提醒）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "ldap",
            "description": "<p>LDAP认证：type（AD/LDAP）; 地址 host；baseDN；adminDN；adminPwd；用户属性同步名称 userNameAttr；安全连接 ssl（true/false）； 同步用户角色 role（从 tbl_role 表获取 id）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": "<p>RADIUS认证：认证方式 type（PAP/CHAP）； 服务器地址 host（格式样例：1.1.1.1,2.2.2.2:1812）；共享密钥 shareKey。</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "sms",
            "description": "<p>短信认证：号码对应的用户附加信息属性名 attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "wechat",
            "description": "<p>微信认证：微信号对应的用户附加信息属性名attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totp",
            "description": "<p>动态令牌认证：无参数，独立存储于动态令牌表</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totpmobile",
            "description": "<p>手机令牌认证：偏移时间窗 delayWindow</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "mix",
            "description": "<p>双因素认证： 认证方式1 authtype1：支持radius、ldap、native、totp（存放 tbl_authtype.auth_name）； 认证方式2 authtype2：支持radius、ldap、native、totp、totpmobile ；双因素之间的关系 rela (0表示或，1表示与)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n   \"type\":1,\n   \"configurations\":{\n        \"type\":\"LDAP\",\n        \"host\":\"10.10.16.14\",\n        \"baseDN\":\"dc=shterm,dc=com\",\n        \"adminDN\":\"cn=root,dc=shterm,dc=com\",\n        \"adminPwd\":\"shterm\",\n        \"userNameAttr\":\"ldapuser1\"\n    },\n    \"enabled\":true,\n    \"name\":\"ldap\"\n }",
          "type": "json"
        },
        {
          "title": "请求消息体示例",
          "content": "{\n  \"id\": 1,\n  \"name\": \"native\",\n  \"configurations\": {\"expire\": \"0\", \"length\": 6, \"complex\": \"3\", \"validity\": \"90\"},\n  \"enabled\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "认证方式不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/system/web/api/AuthTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authType:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/authType/mix",
    "title": "查询所有双因素认证方式",
    "version": "1.0.0",
    "name": "getMixAuthType",
    "group": "AuthType",
    "description": "<p>查询所有双因素认证方式</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/authType/mix",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n [\n  {\"id\":101,\"name\":\"123\",\"type\":2,\"configurations\":{\"rela\":\"1\",\"authtype1\":\"ldap\",\n       \"authtype2\":\"totp\"},\"enabled\":true}\n ]",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>认证方式ID</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>认证类型名,系统预置的认证类型包括： native，ldap，radius，sms，wechat，totp，totpmobile。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "1-2",
            "optional": false,
            "field": "type",
            "defaultValue": "2",
            "description": "<p>认证类型，1-单因子;2-双因子。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>认证配置信息。不同认证方式拥有不同配置</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "defaultValue": "true",
            "description": "<p>认证方式的启用类型，false 未启用，true 启用。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/system/web/api/AuthTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authType/mix"
      }
    ],
    "parameter": {
      "fields": {
        "configurations配置参数说明": [
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": "<p>本地认证：密码长度 length, 复杂度 complex（0-不限；1-字母数字；2-字母数字特殊；3-大小写字母数字特殊字符四类中的三类）； 有效期 validity（具体天数；0-不限）；过期处理 expire（0-禁止登录；1-仅提醒）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "ldap",
            "description": "<p>LDAP认证：type（AD/LDAP）; 地址 host；baseDN；adminDN；adminPwd；用户属性同步名称 userNameAttr；安全连接 ssl（true/false）； 同步用户角色 role（从 tbl_role 表获取 id）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": "<p>RADIUS认证：认证方式 type（PAP/CHAP）； 服务器地址 host（格式样例：1.1.1.1,2.2.2.2:1812）；共享密钥 shareKey。</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "sms",
            "description": "<p>短信认证：号码对应的用户附加信息属性名 attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "wechat",
            "description": "<p>微信认证：微信号对应的用户附加信息属性名attr</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totp",
            "description": "<p>动态令牌认证：无参数，独立存储于动态令牌表</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totpmobile",
            "description": "<p>手机令牌认证：偏移时间窗 delayWindow</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "mix",
            "description": "<p>双因素认证： 认证方式1 authtype1：支持radius、ldap、native、totp（存放 tbl_authtype.auth_name）； 认证方式2 authtype2：支持radius、ldap、native、totp、totpmobile ；双因素之间的关系 rela (0表示或，1表示与)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/authType/type1",
    "title": "获取所有可以作为双因素第一种认证方式的认证方式",
    "version": "1.0.0",
    "name": "getMixAuthType1",
    "group": "AuthType",
    "description": "<p>获取所有可以作为双因素第一种认证方式的认证方式</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/authType/type1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "configurations配置参数说明": [
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": "<p>本地认证：密码长度 length, 复杂度 complex （0-不限；1-字母数字；2-字母数字特殊；3-大小写字母数字特殊字符四类中的三类）；有效期 validity （具体天数；0-不限）；过期处理 expire（0-禁止登录；1-仅提醒）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "ldap",
            "description": "<p>LDAP认证：type（AD/LDAP）；地址 host；baseDN； adminDN；adminPwd；用户属性同步名称 userNameAttr；安全连接 ssl（true/false）； 同步用户角色 role（从 tbl_role 表获取 id）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": "<p>RADIUS认证：认证方式 type（PAP/CHAP）； 服务器地址 host（格式样例：1.1.1.1,2.2.2.2:1812）；共享密钥 shareKey。</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totp",
            "description": "<p>动态令牌认证：无参数，独立存储于动态令牌表</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n  [\n   {\"id\":2,\"name\":\"ldap\",\"type\":1,\"configurations\":{\"ssl\":false,\"host\":\"10.10.16.11:389\",\n        \"type\":\"AD\",\"baseDN\":\"OU=shterm,DC=AD11,DC=qizhitest,DC=com\",\"adminDN\":\"25:1812\",\n        \"adminPwd\":\"123456\",\"userNameAttr\":\"sAMAccountName\"},\"enabled\":true},\n   {\"id\":5,\"name\":\"radius\",\"type\":1,\"configurations\":{\"pwd\":\"shterm\",\"host\":\"10.10.16.15\",\n        \"type\":\"PAP\",\"user\":\"admin\",\"serverIp\":\"10.10.16.15\",\"shareKey\":\"shterm\",\n        \"serverPort\":\"1812\"},\"enabled\":true},\n   {\"id\":1,\"name\":\"native\",\"type\":1,\"configurations\":{\"expire\":0,\"length\":6,\"complex\":0,\n        \"validity\":0},\"enabled\":true},\n   {\"id\":6,\"name\":\"totp\",\"type\":1,\"enabled\":true}\n   ]",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>认证方式ID</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>认证类型名,系统预置的认证类型包括： native，ldap，radius，sms，wechat，totp，totpmobile。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "1-2",
            "optional": false,
            "field": "type",
            "defaultValue": "2",
            "description": "<p>认证类型，1-单因子;2-双因子。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>认证配置信息。不同认证方式拥有不同配置</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "defaultValue": "true",
            "description": "<p>认证方式的启用类型，false 未启用，true 启用。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/system/web/api/AuthTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authType/type1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/authType/type2",
    "title": "获取所有可以作为双因素第二种认证方式的认证方式",
    "version": "1.0.0",
    "name": "getMixAuthType2",
    "group": "AuthType",
    "description": "<p>获取所有可以作为双因素第二种认证方式的认证方式</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/authType/type2",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "configurations配置参数说明": [
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "native",
            "description": "<p>本地认证：密码长度 length, 复杂度 complex （0-不限；1-字母数字；2-字母数字特殊；3-大小写字母数字特殊字符四类中的三类）；有效期 validity （具体天数；0-不限）；过期处理 expire（0-禁止登录；1-仅提醒）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "ldap",
            "description": "<p>LDAP认证：type（AD/LDAP）;地址 host；baseDN； adminDN；adminPwd；用户属性同步名称 userNameAttr；安全连接 ssl（true/false）； 同步用户角色 role（从 tbl_role 表获取 id）</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": "<p>RADIUS认证：认证方式 type（PAP/CHAP）； 服务器地址 host（格式样例：1.1.1.1,2.2.2.2:1812）；共享密钥 shareKey。</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totp",
            "description": "<p>动态令牌认证：无参数，独立存储于动态令牌表</p>"
          },
          {
            "group": "configurations配置参数说明",
            "type": "String",
            "optional": false,
            "field": "totpmobile",
            "description": "<p>手机令牌认证：偏移时间窗 delayWindow</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n [\n   {\"id\":7,\"name\":\"totpmobile\",\"type\":1,\"configurations\":{\"delayWindow\":3},\"enabled\":true,\n        \"description\":\"demo-native\"},\n   {\"id\":2,\"name\":\"ldap\",\"type\":1,\"configurations\":{\"ssl\":false,\"host\":\"10.10.16.11:389\",\n        \"type\":\"AD\",\"baseDN\":\"OU=shterm,DC=AD11,DC=qizhitest,DC=com\",\"adminDN\":\"25:1812\",\n        \"adminPwd\":\"123456\",\"userNameAttr\":\"sAMAccountName\"},\"enabled\":true},\n   {\"id\":5,\"name\":\"radius\",\"type\":1,\"configurations\":{\"pwd\":\"shterm\",\"host\":\"10.10.16.15\",\n        \"type\":\"PAP\",\"user\":\"admin\",\"serverIp\":\"10.10.16.15\",\"shareKey\":\"shterm\",\n        \"serverPort\":\"1812\"},\"enabled\":true},\n   {\"id\":1,\"name\":\"native\",\"type\":1,\"configurations\":{\"expire\":0,\"length\":6,\"complex\":0,\n        \"validity\":0},\"enabled\":true},\n   {\"id\":6,\"name\":\"totp\",\"type\":1,\"enabled\":true}\n ]",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>认证方式ID</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>认证类型名,系统预置的认证类型包括： native，ldap，radius，sms，wechat，totp，totpmobile。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "1-2",
            "optional": false,
            "field": "type",
            "defaultValue": "2",
            "description": "<p>认证类型，1-单因子;2-双因子。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>认证配置信息。不同认证方式拥有不同配置</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "enabled",
            "defaultValue": "true",
            "description": "<p>认证方式的启用类型，false 未启用，true 启用。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/system/web/api/AuthTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authType/type2"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/authenticate",
    "title": "API 访问用户注销",
    "version": "1.0.0",
    "name": "deleteAuthenticate",
    "group": "Authenticate",
    "description": "<p>注销当前登录的 API 访问用户，使 Token 失效。Token 注销后，再次访问 API 接口将返回 401 错误。</p>",
    "header": {
      "fields": {
        "Header Parameter": [
          {
            "group": "Header Parameter",
            "type": "String",
            "optional": false,
            "field": "st-auth-token",
            "description": "<p>当前活动的 API 访问用户 Token。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header 参数",
          "content": "{\n\"st-auth-token\": \"FBAAA2C5FD1349A7AD2269924026A0C4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "无效的请求，缺少 Token 参数 400 示例",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        },
        {
          "title": "Token 不存在或已经被注销 409 示例",
          "content": "HTTP/1.1 409 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/PermissionController.java",
    "groupTitle": "Authenticate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authenticate"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/authenticate",
    "title": "API 访问用户登录认证",
    "version": "1.0.0",
    "name": "postAuthenticate",
    "group": "Authenticate",
    "description": "<p>访问任何 API 接口前，必须先调用本接口，执行用户身份认证操作。<br> 认证成功后，将在消息体和 Cookie 中返回代表用户身份的 Token，调用其他接口时需在 Header 或查询参数中携带此 Token，否则将返回 401 Unauthorized 错误。<br>注意：由于 HTTP Header 命名规范性问题，当使用 Header 传递 Token 时，名称应该为“st-auth-token”，而不是“ST_AUTH_TOKEN”。<br> Token 的缺省有效时间为 10 分钟，如果超过 10 分钟未调用任何接口，则超时，后续再执行其他操作需要重新登录认证。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1-64",
            "optional": false,
            "field": "username",
            "description": "<p>登录用户名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1-32",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ST_AUTH_TOKEN",
            "description": "<p>认证成功后获得的 Token。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "认证成功返回",
          "content": "HTTP/1.1 200 OK\n{\n\"ST_AUTH_TOKEN\": \"FBAAA2C5FD1349A7AD2269924026A0C4\"\n}",
          "type": "json"
        },
        {
          "title": "未认证回应 401 示例",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/PermissionController.java",
    "groupTitle": "Authenticate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/authenticate"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/idleTimeout",
    "title": "修改登录会话的闲置超时时间。",
    "version": "1.0.0",
    "name": "putIdleTimeout",
    "group": "Authenticate",
    "description": "<p>修改当前用户的会话超时时长（分钟）。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idleTimeout",
            "description": "<p>闲置超时时间（分钟），有效范围为 1 - 50000。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"idleTimeout\": 1440\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/security/web/LoginController.java",
    "groupTitle": "Authenticate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/idleTimeout"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/dev/:id",
    "title": "删除资源",
    "version": "1.0.0",
    "name": "DeleteDev",
    "group": "Dev",
    "description": "<p>删除特定资源。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资源 ID。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "资源不存或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/dev/navDelete/:{type}",
    "title": "批量删除预览信息筛选快捷方式",
    "version": "1.0.0",
    "name": "DeleteDevNav",
    "group": "Dev",
    "description": "<p>根据请求消息体提供的筛选快捷方式名称，批量删除筛选快捷方式。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "number",
            "optional": false,
            "field": "type",
            "description": "<p>资源类型常量：0 - 主机 ,1 -网络资源，2 -数据库资源，3 -应用资源。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "names",
            "description": "<p>需要删除的快捷方式名称集合。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息示例",
          "content": "{\n    \"names\": [\"General Linux\", \"General Unix\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "快捷方式不存或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone\n{\n    [\"General Linux\", \"General Unix\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev/navDelete/:{type}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/devType/:id",
    "title": "删除设备类型",
    "version": "1.0.0",
    "name": "DeleteSysType",
    "group": "Dev",
    "description": "<p>删除特定设备类型。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型的 ID。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "设备类型不存或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DeviceTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devType/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/devTypeGroup/:id",
    "title": "删除设备类型分组",
    "version": "1.0.0",
    "name": "DeleteSysTypeGroup",
    "group": "Dev",
    "description": "<p>删除特定设备类型分组。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型分组的 ID。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "设备类型分组不存或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DeviceTypeGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devTypeGroup/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/dev/download",
    "title": "获取资源导入模板",
    "version": "1.0.0",
    "name": "DownloadDev",
    "group": "Dev",
    "description": "<p>资源导入模板下载。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/dev/download",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n......",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "模板不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev/download"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/dev/export",
    "title": "导出资源(全部)",
    "version": "1.0.0",
    "name": "ExportDev",
    "group": "Dev",
    "description": "<p>导出当前过滤条件后的全部资源。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/api/dev/export?_exportFormat=PDF&sort=lastLoginTime,desc",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_exportFormat",
            "description": "<p>导出的格式，支持PDF、EXCEL、CSV。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "结果不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev/export"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/dev/exportSel",
    "title": "导出资源(选中)",
    "version": "1.0.0",
    "name": "ExportSelectDev",
    "group": "Dev",
    "description": "<p>导出选中的用户。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/api/dev/exportSel?_exportFormat=PDF",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_exportFormat",
            "description": "<p>导出的格式，支持PDF、EXCEL、CSV。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    \"allId\":\"132,133,134\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev/exportSel"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/devExt/:id",
    "title": "删除设备扩展信息",
    "version": "1.0.0",
    "name": "DeleteDevExt",
    "group": "DevExt",
    "description": "<p>根据id删除特定设备扩展信息。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备扩展信息的 ID。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "设备附加信息不存或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevExtController.java",
    "groupTitle": "DevExt",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devExt/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/devExt/:id",
    "title": "获取单个设备扩展信息(根据id)",
    "version": "1.0.0",
    "name": "GetDevExtById",
    "group": "DevExt",
    "description": "<p>根据id获取单个设备扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/devExt/6",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备附加信息 ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备附加信息 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>设备附加信息名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>设备附加信息类型。0-字符串，1-数字，2-日期，3-可选值。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "description": "<p>是否必须：true-必须；false-非必须。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>设备附加信息定义的个性化数据。对于字符串类型，即type=0， 参数名为长度length；对于数字类型，即type=1，参数名为范围从from，范围到to；对于日期类型，即type=2， start开始时间，end结束时间；对于可选值，即type=3，参数名为options。例如：{&quot;options&quot;:[&quot;a1&quot;,&quot;a2&quot;,&quot;a3&quot;]}</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>设备附加信息顺序。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "0..512",
            "optional": false,
            "field": "description",
            "description": "<p>设备附加信息描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n {\n     \"id\":6,\n     \"name\":\"ext001\",\n     \"type\":0,\n     \"required\":true,\n     \"extra\":{\"length\":11},\n     \"order\":0,\n     \"description\":\"001\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备附加信息不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevExtController.java",
    "groupTitle": "DevExt",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devExt/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/devExt/list",
    "title": "获取设备所有扩展信息",
    "version": "1.0.0",
    "name": "GetDevExtList",
    "group": "DevExt",
    "description": "<p>获取设备所有扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/devExt/list",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备附加信息 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>设备附加信息名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>设备附加信息类型。0-字符串，1-数字，2-日期，3-可选值。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "description": "<p>是否必须：true-必须；false-非必须。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>设备附加信息定义的个性化数据。对于字符串类型，即type=0， 参数名为长度length；对于数字类型，即type=1，参数名为范围从from，范围到to；对于日期类型，即type=2， start开始时间，end结束时间；对于可选值，即type=3，参数名为options。例如：{&quot;options&quot;:[&quot;a1&quot;,&quot;a2&quot;,&quot;a3&quot;]}</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>设备附加信息顺序。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..512",
            "optional": false,
            "field": "description",
            "description": "<p>设备附加信息描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n [{\n \"id\":6,\n \"name\":\"ext001\",\n \"type\":0,\n \"required\":true,\n \"extra\":{\"length\":11},\n \"order\":0,\n \"description\":\"001\"\n  },\n {\n \"id\":7,\n \"name\":\"ext002\",\n \"type\":1,\n \"required\":true,\n \"extra\":{\"max\":999,\"min\":1},\n \"order\":2,\n \"description\":\"002\"\n  },\n {\n \"id\":8,\n \"name\":\"ext003\",\n \"type\":2,\n \"required\":true,\n \"extra\":{\"end\":\" 2016/07/02\",\"start\":\"2016/06/01 \"},\n \"order\":1,\n \"description\":\"003\"\n }]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevExtController.java",
    "groupTitle": "DevExt",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devExt/list"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/devExt",
    "title": "增加设备扩展信息",
    "version": "1.0.0",
    "name": "PostDevExt",
    "group": "DevExt",
    "description": "<p>创建一个设备扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/devExt",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..128",
            "optional": false,
            "field": "name",
            "description": "<p>设备附加信息名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>设备附加信息类型。0-字符串，1-数字，2-日期，3-可选值。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>是否必须：true-必须；false-非必须。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>设备附加信息定义的个性化数据。对于字符串类型，即type=0，参数名为长度length； 对于数字类型，即type=1，参数名为范围从from，范围到to；对于日期类型，即type=2，start开始时间， end结束时间；对于可选值，即type=3，参数名为options。例如：{&quot;options&quot;:[&quot;a1&quot;,&quot;a2&quot;,&quot;a3&quot;]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"name\": \"ext004\",\n \"type\": 0,\n \"required\": \"true\",\n \"extra\": {length: 11}\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备附加信息 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "0..128",
            "optional": false,
            "field": "name",
            "description": "<p>设备附加信息名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>设备附加信息类型。0-字符串，1-数字，2-日期，3-可选值。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "description": "<p>是否必须：true-必须；false-非必须。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>设备附加信息定义的个性化数据。对于字符串类型， 即type=0，参数名为长度length；对于数字类型，即type=1，参数名为范围从from，范围到to；对于日期类型， 即type=2，start开始时间，end结束时间；对于可选值，即type=3，参数名为options。例如：{&quot;options&quot;:[&quot;a1&quot;,&quot;a2&quot;,&quot;a3&quot;]}</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>设备附加信息顺序。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "0..512",
            "optional": false,
            "field": "description",
            "description": "<p>设备附加信息描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n {\n     \"id\":9,\n     \"name\":\"ext004\",\n     \"type\":0,\n     \"required\":true,\n     \"extra\":{\"length\":11},\n     \"order\":3,\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevExtController.java",
    "groupTitle": "DevExt",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devExt"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/devExt/:id",
    "title": "修改设备扩展信息",
    "version": "1.0.0",
    "name": "PutDevExt",
    "group": "DevExt",
    "description": "<p>修改设备扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/devExt/7",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备附加信息 ID。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..128",
            "optional": true,
            "field": "name",
            "description": "<p>设备附加信息名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>是否必须：true-必须；false-非必须。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extra",
            "description": "<p>设备附加信息定义的个性化数据。对于字符串类型，即type=0，参数名为长度length； 对于数字类型，即type=1，参数名为范围从from，范围到to；对于日期类型，即type=2，start开始时间，end结束时间； 对于可选值，即type=3，参数名为options。例如：{&quot;options&quot;:[&quot;a1&quot;,&quot;a2&quot;,&quot;a3&quot;]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"id\": 7,\n \"name\": \"ext006\",\n \"type\": 1,\n \"required\": true,\n \"extra\": {\"max\": 999, \"min\": 11},\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备附加信息不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevExtController.java",
    "groupTitle": "DevExt",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devExt/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/devExt/down/:id",
    "title": "下移设备扩展信息",
    "version": "1.0.0",
    "name": "PutDownDevExt",
    "group": "DevExt",
    "description": "<p>下移设备扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/devExt/down/8",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>附加信息 ID。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"id\": 8,\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备附加信息不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevExtController.java",
    "groupTitle": "DevExt",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devExt/down/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/devExt/up/:id",
    "title": "上移设备扩展信息",
    "version": "1.0.0",
    "name": "PutUpDevExt",
    "group": "DevExt",
    "description": "<p>上移设备扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/devExt/up/6",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>附加信息 ID。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"id\": 6,\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备附加信息不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevExtController.java",
    "groupTitle": "DevExt",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devExt/up/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/devType/groupAndSysType",
    "title": "查询系统类型信息中所有设备类型的设备类型名和分组名。",
    "version": "1.0.0",
    "name": "GetAllSysTypeNameAndGroup",
    "group": "Dev",
    "description": "<p>查询所有设备类型信息中的设备类型名和分组名。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/devType/groupAndSysType",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型ID。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>设备类型名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>设备类型分组名。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n {\"name\":\"Linux\",\"id\":1,\"group\":\"Linux\"},\n {\"name\":\"Windows\",\"id\":2,\"group\":\"Windows\"},\n {\"name\":\"HP UX\",\"id\":3,\"group\":\"Unix\"},\n {\"name\":\"IBM AIX\",\"id\":4,\"group\":\"Unix\"},\n {\"name\":\"Cisco IOS\",\"id\":5,\"group\":\"Network\"},\n {\"name\":\"Huawei Quidway\",\"id\":6,\"group\":\"Network\"},\n {\"name\":\"Juniper NetScreen\",\"id\":7,\"group\":\"Network\"},\n {\"name\":\"H3C Comware\",\"id\":8,\"group\":\"Network\"},\n {\"name\":\"General Network\",\"id\":9,\"group\":\"Network\"},\n {\"name\":\"Oracle\",\"id\":10,\"group\":\"Database\"},\n {\"name\":\"MSSQL\",\"id\":11,\"group\":\"Database\"}\n {\"name\":\"MYSQL\",\"id\":12,\"group\":\"Database\"},\n {\"name\":\"B/S\",\"id\":13,\"group\":\"Application\"},\n {\"name\":\"C/S\",\"id\":14,\"group\":\"Application\"},\n {\"name\":\"Windows Domain\",\"id\":15,\"group\":\"Windows Domain\"},\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备类型不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DeviceTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devType/groupAndSysType"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/dev/:id",
    "title": "获取资源信息",
    "version": "1.0.0",
    "name": "GetDev",
    "group": "Dev",
    "description": "<p>根据资源 ID 查询并返回特定资源的信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/dev/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资源的 ID。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "region",
            "description": "<p>区域。 例子：&quot;region&quot;: { &quot;id&quot;: 1 }，表示设置资源的区域为“id=1”的区域。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\":9,\n    \"name\":\"ms02\",\n    \"ip\":\"1.2.3.5\",\n    \"type\":0,\n    \"sysType\":{\"id\":2,\"name\":\"Windows\",\"privAccount\":\"administrator\",\n        \"pwHandler\":\"microsoft windows\",\"srcType\":0,\"icon\":\"windows.png\",\"sysTypeGroup\":{\"id\":2,\n        \"name\":\"Windows\",\"srcType\":0,\"resType\":0},\"serviceConfs\":[{\"id\":6,\n        \"serviceType\":{\"id\":2,\"name\":\"telnet\",\"type\":0,\"srcType\":0},\"confs\":{\"icon\":\"telnet.png\",\n        \"port\":23}},{\"id\":8,\"serviceType\":{\"id\":4,\"name\":\"vnc\",\"type\":1,\"srcType\":0},\n        \"confs\":{\"icon\":\"vnc.png\",\"port\":5900,\"enterprise\":1}},{\"id\":7,\"serviceType\":{\"id\":3,\n        \"name\":\"rdp\",\"type\":1,\"srcType\":0},\"confs\":{\"icon\":\"rdp.png\",\"port\":3389,\"rdp_console\":1}}]},\n    \"joinTime\":1468050766484,\n    \"updateTime\":1468548696602,\n    \"joinUserId\":1,\n    \"services\":{\"services\":{\"rdp\":{\"icon\":\"rdp.png\",\"port\":3389,\"proto\":\"rdp\",\"rdp_console\":1},\n        \"vnc\":{\"icon\":\"vnc.png\",\"port\":5900,\"proto\":\"vnc\",\"enterprise\":1},\n        \"telnet\":{\"icon\":\"telnet.png\",\"port\":23,\"proto\":\"telnet\"}}},\n    \"accounts\":{\"accounts\":[{\"name\":\"administrator\",\"priv\":true,\"type\":0,\"creator\":1,\n        \"haspassword\":1,\"createtime\":1468051437237}]},获取资源信息时帐号密码和vnc密码不会返回，\n        有密码则会返回\"haspassword\":1，有vnc密码则会返回\"hasvncpassword\":1,无密码则无此字段。\n \"deleted\":false,\n \"state\":0,\n \"charset\":\"GB18030\",\n \"servSys\":{\"id\":3,\"name\":\"test-1\",\"type\":1,\"parent\":{\"id\":1,\"name\":\"vvv\",\"type\":0}}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "Name",
            "description": "<p>资源名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "ip",
            "description": "<p>资源IP。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>资源类型：0 - 主机；1 - 网络资源；2 - 数据库；3 - 应用系统</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "sysType",
            "description": "<p>资源类型。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "sysType.id",
            "description": "<p>资源类型的id。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "accounts",
            "description": "<p>帐号， accounts字段定义： name帐号名，priv特权帐号(true/false)，type类型（0 密码，1 公钥，2 domain，3 su）， creator创建人，createtime创建时间；password密码，pk公钥，domain域名，su_account切换自等。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Array",
            "optional": false,
            "field": "accounts.accounts",
            "description": "<p>帐号列表。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "accounts.accounts.name",
            "description": "<p>帐号列表中帐号的帐号名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extInfo",
            "description": "<p>扩展信息属性值,例如&quot;extInfo&quot;:{&quot;1&quot;:&quot;bb&quot;}。 此处的&quot;1&quot;在DevExt实体中的&quot;id&quot;必须有，并且&quot;bb&quot;数据类型必须符合DevExt中的&quot;type&quot;, 是否必须要填写要很据DevExt中&quot;required&quot;决定，DevExt中&quot;extra&quot;字段定义了&quot;aa&quot;取值范围等。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "state",
            "description": "<p>资源状态：0-活动；1-禁用。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "servSys",
            "description": "<p>业务系统，对象为业务系统实体，内容可查看业务系统实体。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>责任人，对象为用户实体，内容可查看用户实体。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "services",
            "description": "<p>资源访问协议，proto字段为服务类型， 例如：{&quot;services&quot;:{&quot;ssh2&quot;:{&quot;proto&quot;:&quot;ssh&quot;,&quot;port&quot;:22}}}。不同的资源类型services字段内容不同，ssh2为协议名， 详情可查看对应资源类型的创建，字段说明可查看增加资源协议配置说明。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "servSys.id",
            "description": "<p>业务系统的id。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "deleted",
            "description": "<p>是否删除的标识。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "charset",
            "description": "<p>编码类型</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "joinTime",
            "description": "<p>加入系统的时间</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "updateTime",
            "description": "<p>资源更新时间</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "joinUserId",
            "description": "<p>加入系统的用户</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "资源不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/dev/nav/:{type}",
    "title": "获取资源筛选条件列表",
    "version": "1.0.0",
    "name": "GetDevNav",
    "group": "Dev",
    "description": "<p>获取资源设置的筛选条件列表。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "number",
            "optional": false,
            "field": "type",
            "description": "<p>资源类型常量：0 - 主机 ,1 -网络资源，2 -数据库资源，3 -应用资源。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/dev/nav/0",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>筛选快捷方式名称。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>筛选结果。</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "filters",
            "description": "<p>过滤条件集合，元素是过滤条件对象filter，参数说明如下。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>过滤条件，filters集合中的元素。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filter.attr",
            "description": "<p>过滤属性。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filter.oper",
            "description": "<p>过滤关键词，用来拼接在过滤属性后面组装成过滤条件的key</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filter.value",
            "description": "<p>过滤条件的value，与过滤条件key组成完成过滤条件，例子：role.idIn={3}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n    {\"name\":\"全部资源\",\"filters\":[],\"count\":7},\n    {\"name\":\"核心资源\",\"filters\":[{\"attr\":\"Core\",\"oper\":\"In\",\"value\":\"false\"}],\"count\":7},\n    {\"name\":\"General Linux\",\"filters\":[{\"attr\":\"sysType.name\",\"oper\":\"In\",\"value\":\"General Linux\"}],\n        \"count\":4},\n    {\"name\":\"Cisco IOS Device\",\"filters\":[{\"attr\":\"sysType.name\",\"oper\":\"In\",\n        \"value\":\"Cisco IOS Device\"}],\"count\":0},\n    {\"name\":\"Huawei Quidway Device\",\"filters\":[{\"attr\":\"sysType.name\",\"oper\":\"In\",\n        \"value\":\"Huawei Quidway Device\"}],\"count\":0},\n    {\"name\":\"IBM AS/400\",\"filters\":[{\"attr\":\"sysType.name\",\"oper\":\"In\",\"value\":\"IBM AS/400\"}],\"count\":0}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev/nav/:{type}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/devType/:id",
    "title": "获取设备类型信息",
    "version": "1.0.0",
    "name": "GetSysType",
    "group": "Dev",
    "description": "<p>根据设备类型 ID 查询并返回特定设备类型的信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/devType/3",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型的 ID。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>设备类型名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "privAccount",
            "description": "<p>特权账号。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pwHandler",
            "description": "<p>改密方式。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "charset",
            "description": "<p>编码类型。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "srcType",
            "description": "<p>来源。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sysTypeGroup",
            "description": "<p>设备分组信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "serviceConfs",
            "description": "<p>设备类型服务信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.id",
            "description": "<p>该设备类型上的服务配置信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "serviceConfs.serviceType",
            "description": "<p>该设备类型上的服务类型信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.serviceType.id",
            "description": "<p>该设备类型上的服务类型ID。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "serviceConfs.serviceType.name",
            "description": "<p>该设备类型上的服务类型名。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.serviceType.type",
            "description": "<p>该设备类型上的服务类型分类， 0 字符终端、1 图形会话、2 文件传输、3、应用发布,默认为0 。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.serviceType.srcType",
            "description": "<p>该设备类型上的服务类型的来源类型，0 预定义，1 自定义,默认为0。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sysTypeGroup.resType",
            "description": "<p>资源类型，0 主机 ，1 网络设备，2 数据库，3 应用，4 Windows域。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "serviceConfs.serviceType.confs",
            "description": "<p>该设备类型上的服务类型的服务通用配置。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "serviceConfs.confs",
            "description": "<p>该设备类型上的服务配置。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"id\":3,\n \"name\":\"General Network\",\n \"privAccount\":\"enable\",\n \"pwHandler\":null,\n \"charset\":null,\n \"srcType\":0,\n \"sysTypeGroup\":{\"id\":4,\"name\":\"Network\",\"srcType\":0,\"resType\":0},\n \"serviceConfs\":[{\n     \"id\":15,\n     \"serviceType\":{\"id\":1,\"name\":\"telnet\",\"type\":0,\"srcType\":0,\"confs\":null},\n     \"confs\":{\"port\":23}},\n         {\"id\":67,\"serviceType\":{\"id\":2,\"name\":\"ssh\",\"type\":0,\"srcType\":0,\"confs\":null},\n     \"confs\":{\"port\":22}}],\n     \"serviceTypes\":[{\"id\":2,\"name\":\"ssh\",\"type\":0,\"srcType\":0,\"confs\":null},\n         {\"id\":1,\"name\":\"telnet\",\"type\":0,\"srcType\":0,\"confs\":null}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备类型不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DeviceTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devType/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/devTypeGroup/:id",
    "title": "获取设备类型分组信息",
    "version": "1.0.0",
    "name": "GetSysTypeGroup",
    "group": "Dev",
    "description": "<p>根据设备类型分组ID 查询并返回特定设备类型分组信息的信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/devTypeGroup/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型分组的 ID。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型分组的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>设备类型分组名。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "srcType",
            "description": "<p>来源，0 预定义，1 自定义。默认为0。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resType",
            "description": "<p>资源类型，0 主机 ，1 网络设备，2 数据库，3 应用，4 Windows域。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"id\":1,\n \"name\":\"Linux\",\n \"srcType\":0,\n \"resType\":0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备类型分组不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DeviceTypeGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devTypeGroup/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/devTypeGroup",
    "title": "获取设备类型分组列表",
    "version": "1.0.0",
    "name": "GetSysTypeGroups",
    "group": "Dev",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/devTypeGroup",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型分组ID,设备类型分组的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>设备类型分组名字。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "srcType",
            "description": "<p>来源，0 预定义，1 自定义。默认为0。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resType",
            "description": "<p>资源类型，0 主机 ，1 网络设备，2 数据库，3 应用，4 Windows域。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n {\"id\":1,\"name\":\"Linux\",\"srcType\":0,\"resType\":0},\n {\"id\":2,\"name\":\"Windows\",\"srcType\":0,\"resType\":0},\n {\"id\":3,\"name\":\"Unix\",\"srcType\":0,\"resType\":0},\n {\"id\":4,\"name\":\"Main Frame\",\"srcType\":0,\"resType\":0},\n {\"id\":5,\"name\":\"Network\",\"srcType\":0,\"resType\":1},\n {\"id\":6,\"name\":\"Database\",\"srcType\":0,\"resType\":2},\n {\"id\":7,\"name\":\"Application\",\"srcType\":0,\"resType\":3},\n {\"id\":8,\"name\":\"Windows Domain\",\"srcType\":0,\"resType\":4},\n {\"id\":1001,\"name\":\"aaaa\",\"srcType\":1,\"resType\":0}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DeviceTypeGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devTypeGroup"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/devType",
    "title": "获取主机和网络设备的设备类型列表",
    "version": "1.0.0",
    "name": "GetSysTypes",
    "group": "Dev",
    "description": "<p>查询并返回主机和网络设备的设备类型列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/devType",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>设备类型名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "privAccount",
            "description": "<p>特权账号。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pwHandler",
            "description": "<p>改密方式。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>设备类型分组名字。</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "serviceGui:",
            "description": "<p>[&quot;vnc&quot;,&quot;rdp&quot;,&quot;xdmcp&quot;,&quot;xfwd&quot;] 该设备类型下的图形会话类型种类。</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "serviceTerm:",
            "description": "<p>[&quot;telnet&quot;, &quot;ssh&quot;] 该设备类型下的字符终端类型种类。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"pwHandler\":\"boda network device\",\n     \"privAccount\":\"aaa\",\n     \"serviceGui\":[\"vnc\",\"rdp\",\"xdmcp\",\"xfwd\"],\n     \"name\":\"a\",\n     \"id\":1206,\n     \"serviceTerm\":[\"tn5250\",\"telnet\",\"ssh\"],\n     \"group\":\"Linux\"},\n {\n     \"pwHandler\":\"WangKangLiuLiang\",\n     \"privAccount\":\"vvv\",\n     \"serviceGui\":[],\n     \"name\":\"b\",\n     \"id\":1207,\n     \"serviceTerm\":[\"telnet\",\"ssh\"],\n     \"group\":\"Unix\"},\n {\n     \"pwHandler\":null,\n     \"privAccount\":\"ccc\",\n     \"serviceGui\":[],\n     \"name\":\"c\",\n     \"id\":1189,\n     \"serviceTerm\":[],\n     \"group\":\"Windows\"}\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DeviceTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devType"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/dev",
    "title": "获取符合条件的资源列表",
    "version": "1.0.0",
    "name": "Getdevs",
    "group": "Dev",
    "description": "<p>查询并返回符合条件的资源列表。 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/dev?page=0&search=dev&size=50&sort=name",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n    \"content\":[{\"id\":3,\"name\":\"fff\",\"ip\":\"123.3.3.3\",\"sysType\":{\"id\":}},\n    \"accounts\":{\"accounts\":[]},\"deleted\":false,\"state\":0}],\n    \"last\":true,\n    \"totalElements\":1,\n    \"totalPages\":1,\n    \"number\":0,\n    \"size\":50,\n    \"sort\":[{\"direction\":\"ASC\",\"property\":\"name\",\"ignoreCase\":false,\"nullHandling\":\"NATIVE\",\n    \"ascending\":true}],\n    \"numberOfElements\":1,\n    \"first\":true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ],
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资源ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "Name",
            "description": "<p>资源名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "ip",
            "description": "<p>资源IP。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>资源类型：0 - 主机；1 - 网络资源；2 - 数据库；3 - 应用系统</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "sysType",
            "description": "<p>资源类型。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "sysType.id",
            "description": "<p>资源类型的id。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "accounts",
            "description": "<p>帐号， accounts字段定义： name帐号名，priv特权帐号(true/false)，type类型（0 密码，1 公钥，2 domain，3 su）， creator创建人，createtime创建时间；password密码，pk公钥，domain域名，su_account切换自等。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Array",
            "optional": false,
            "field": "accounts.accounts",
            "description": "<p>帐号列表。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "accounts.accounts.name",
            "description": "<p>帐号列表中帐号的帐号名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extInfo",
            "description": "<p>扩展信息属性值,例如&quot;extInfo&quot;:{&quot;1&quot;:&quot;bb&quot;}。 此处的&quot;1&quot;在DevExt实体中的&quot;id&quot;必须有，并且&quot;bb&quot;数据类型必须符合DevExt中的&quot;type&quot;, 是否必须要填写要很据DevExt中&quot;required&quot;决定，DevExt中&quot;extra&quot;字段定义了&quot;aa&quot;取值范围等。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "state",
            "description": "<p>资源状态：0-活动；1-禁用。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "servSys",
            "description": "<p>业务系统，对象为业务系统实体，内容可查看业务系统实体。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>责任人，对象为用户实体，内容可查看用户实体。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "services",
            "description": "<p>资源访问协议，proto字段为服务类型， 例如：{&quot;services&quot;:{&quot;ssh2&quot;:{&quot;proto&quot;:&quot;ssh&quot;,&quot;port&quot;:22}}}。不同的资源类型services字段内容不同，ssh2为协议名， 详情可查看对应资源类型的创建，字段说明可查看增加资源协议配置说明。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "servSys.id",
            "description": "<p>业务系统的id。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "deleted",
            "description": "<p>是否删除的标识。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "charset",
            "description": "<p>编码类型</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "joinTime",
            "description": "<p>加入系统的时间</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "updateTime",
            "description": "<p>资源更新时间</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "joinUserId",
            "description": "<p>加入系统的用户</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev"
      }
    ],
    "parameter": {
      "fields": {
        "过滤项基本信息": [
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "name",
            "description": "<p>资源名，过滤例子：nameContains=ad,表示查询帐户包含“ad”的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>资源ip，过滤例子：ipIn=&quot;192.168.99.6&quot;,表示查询ip是&quot;192.168.99.63&quot;的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "sysType",
            "description": "<p>过滤支持多个资源类型“或”， 过滤例子：sysType.idIn=1,2 表示查询资源类型id为“1”或者为“2”的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "state",
            "description": "<p>状态，过滤支持多个状态“或”，过滤例子：stateIn=0,1, 表示查询状态为0或者为1</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Objetc",
            "optional": false,
            "field": "extInfo",
            "description": "<p>扩展信息：分4类，字符串，数字，日期，可选项。 (1)字符串类型，Contains 模糊过滤，例如：extInfo.1Contains=&quot;dev&quot; 查询所有extInfo.1包含&quot;dev&quot;的资源， (2)数字类型，Is 精确过滤，例如：extInfo.1Is=3 查询所有extInfo.1为3的资源， (3)日期类型，Is 精确过滤，例如：extInfo.1Is= &quot;2018-09-08 00:00:00&quot; 查询所有extInfo.1为&quot;2018-09-08 00:00:00&quot;的资源， (4)可选项，In 数组过滤，例如：extInfo.1In= 1,2 查询所有extInfo.1为“1”或者“2”的资源，</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "region",
            "description": "<p>区域。 例子：&quot;region&quot;: { &quot;id&quot;: 1 }，表示设置资源的区域为“id=1”的区域。</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/dev",
    "title": "创建应用系统",
    "version": "1.0.0",
    "name": "PostApp",
    "group": "Dev",
    "description": "<p>创建一个新的应用系统。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "name",
            "description": "<p>资源名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "ip",
            "description": "<p>资源IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>资源类型。3 - 应用系统。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "sysType",
            "description": "<p>资源类型。此处的资源类型只能是资源类型中类型为  &quot;3&quot; 的资源类型。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sysType.id",
            "description": "<p>资源类型ID,此处的资源类型分为&quot;B/S&quot;，&quot;C/S&quot; 和 &quot;Weblogic&quot;三种，ID分别为&quot;13&quot;,&quot;14&quot; 和 &quot;17&quot;。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "region",
            "description": "<p>区域。 例子：&quot;region&quot;: { &quot;id&quot;: 1 }，表示设置资源的区域为“id=1”的区域。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extInfo",
            "description": "<p>扩展信息属性值,例如&quot;extInfo&quot;:{&quot;1&quot;:&quot;bb&quot;}。此处的&quot;1&quot;在DevExt实体中的&quot;id&quot;必须有， 并且&quot;bb&quot;数据类型必须符合DevExt中的&quot;type&quot;,是否必须要填写要很据DevExt中&quot;required&quot;决定， DevExt中&quot;extra&quot;字段定义了&quot;aa&quot;取值范围等。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "state",
            "description": "<p>默认值为0。资源状态：0-活动；1-禁用。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "services",
            "description": "<p>服务。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "services.services",
            "description": "<p>服务配置。此有三种配置，一种是B/S的配置，一种是C/S的配置，另一种是Weblogic的配置 根据资源类型的配置进行决定，B/S和Weblogic配置相同。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "services.services.B/S",
            "description": "<p>B/S的服务配置，B/S和Weblogic的services配置相同 （services.services.B/S 变为 services.services.Weblogic）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "services.services.B/S.url",
            "description": "<p>B/S的URL配置。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "services.services.B/S.script",
            "description": "<p>B/S的登陆脚本配置。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "services.services.B/S.scriptType",
            "description": "<p>B/S的脚本类型， default 默认| nofill 不代填 | advanced 高级| custom 自定义。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "services.services.B/S._loginBtnXpath",
            "description": "<p>用户名输入框，B/S脚本类型为advanced时必填。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "services.services.B/S._passwordXpath",
            "description": "<p>密码输入框，B/S脚本类型为advanced时必填。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "services.services.B/S._usernameXpath",
            "description": "<p>登录按钮，B/S脚本类型为advanced时必填必填。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "services.services.B/S.restrictaccess",
            "description": "<p>限制URL，true为限制，false为不限制，默认限制。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "services.services.B/S.whitelist",
            "description": "<p>当限制URL时填写此字段， B/S的白名单配置。除url以外的允许访问的地址，每行配置一个地址，可以为正则表达式。</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "services.services.B/S.appclient",
            "description": "<p>B/S的客户端配置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "services.services.C/S",
            "description": "<p>C/S的配置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "services.services.C/S.appclient",
            "description": "<p>C/S的客户端配置,客户端的id集合。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "servSys",
            "description": "<p>业务系统。可参考ServSys实体 ，例如：servsys:{ &quot;id&quot;:1,&quot;name&quot;:&quot;ss&quot;...}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "servSys.id",
            "description": "<p>业务系统的ID，例如&quot;servSys&quot;:{&quot;id&quot;:1}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "owner",
            "description": "<p>责任人，用户实体。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>简要说明。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n{\n   \"id\":66,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/dev",
    "title": "创建数据库资源",
    "version": "1.0.0",
    "name": "PostDataBase",
    "group": "Dev",
    "description": "<p>创建一个新的数据库资源。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "name",
            "description": "<p>资源名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "ip",
            "description": "<p>资源IP，当资源类型为&quot;Oracle&quot;,并且连接方式为&quot;tns_config&quot;时没有此属性。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>资源类型。2 - 数据库资源。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "sysType",
            "description": "<p>资源类型。此处的资源类型有三种，分别为  &quot;Oracle&quot;,&quot;MSSQL&quot;,&quot;MYSQL&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sysType.id",
            "description": "<p>资源类型ID,分别为&quot;10&quot;,&quot;11&quot;,&quot;12&quot;。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "region",
            "description": "<p>区域。 例子：&quot;region&quot;: { &quot;id&quot;: 1 }，表示设置资源的区域为“id=1”的区域。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extInfo",
            "description": "<p>扩展信息属性值,例如&quot;extInfo&quot;:{&quot;1&quot;:&quot;bb&quot;}。此处的&quot;1&quot;在DevExt实体中的&quot;id&quot;必须有， 并且&quot;bb&quot;数据类型必须符合DevExt中的&quot;type&quot;,是否必须要填写要很据DevExt中&quot;required&quot;决定， DevExt中&quot;extra&quot;字段定义了&quot;aa&quot;取值范围等。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "state",
            "description": "<p>默认值为0。资源状态：0-活动；1-禁用。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "services",
            "description": "<p>服务。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "services.services",
            "description": "<p>服务配置, &quot;MSSQL&quot;,&quot;ORACLE&quot; 数据库有 sid，service_name,tns_config（三选一）， 分别配置为 Oracle 数据库的 SID，服务名或 TNS 的配置串（用于连接RAC）子字段为：连接类型connectType （sid/service_name/tns_config），连接类型为sid，需要配置sid字段，端口port， 客户端ID列表appclient(例如：&quot;appclient&quot;:[101,102])； 连接类型为service_name，需要配置service_name字段， 端口port，客户端ID列表appclient( 例如：&quot;appclient&quot;:[101,102])；连接类型为tns_config，需要配置tns_config字段，客户端ID列表 appclient(例如：&quot;appclient&quot;:[101,102])；此处只列举&quot;Oracle&quot;的一种配置 。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "services.services.Oracle",
            "description": "<p>此为&quot;Oracle&quot;的服务配置。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "services.services.Oracle.connectType",
            "description": "<p>此为&quot;Oracle&quot;的连接方式，一共有三种， 分别为 &quot;sid&quot;,&quot;service_name&quot;,&quot;tns_config&quot;。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "services.services.Oracle.port",
            "description": "<p>端口号 ,当连接方式为&quot;sid&quot;和&quot;service_name&quot;时有此属性。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "services.services.Oracle.sid",
            "description": "<p>sid字段 ,当连接方式为&quot;sid&quot;时有此属性。</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "services.services.Oracle.appclient",
            "description": "<p>客户端，此为必选属性， 值为客户端id的数组，存于services中，&quot;MSSQL&quot;和&quot;MYSQL&quot;,故在此不多做介绍,例如：{&quot;services&quot;: {&quot;Oracle&quot;: {&quot;sid&quot;: &quot;vbc&quot;, &quot;port&quot;: 1521, &quot;appclient&quot;: [102], &quot;connectType&quot;: &quot;sid&quot;}}}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "services.services.MSSQL",
            "description": "<p>此为&quot;MSSQL&quot;的服务配置,例如 {&quot;MSSQL&quot;: {&quot;port&quot;: 1433, &quot;appclient&quot;: [101, 102],&quot;instance_name&quot;: &quot;asdfghjkl;&quot;}}。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "services.services.MSSQL.instance_name",
            "description": "<p>实例名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "services.services.MYSQL",
            "description": "<p>此为&quot;MYSQL&quot;的服务配置，例如 {&quot;MYSQL&quot;: {&quot;port&quot;: 3306, &quot;appclient&quot;: [101]}}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "servSys",
            "description": "<p>业务系统。可参考ServSys实体 ，例如：servsys:{ &quot;id&quot;:1}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "servSys.id",
            "description": "<p>业务系统的ID，例如&quot;servSys&quot;:{&quot;id&quot;:1}。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>简要说明。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "owner",
            "description": "<p>责任人，用户实体。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\":63,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/dev/navAdd/:{type}",
    "title": "保存预览信息筛选快捷方式",
    "version": "1.0.0",
    "name": "PostDevNav",
    "group": "Dev",
    "description": "<p>新增一个筛选快捷方式(最多只能保存8个筛选快捷方式)。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "number",
            "optional": false,
            "field": "type",
            "description": "<p>资源类型常量：0 - 主机 ,1 -网络资源，2 -数据库资源，3 -应用资源。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>快捷方式的名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "filters",
            "description": "<p>快捷方式的过滤条件集合，filters集合中的元素为filter对象。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>filters中的元素，表示一个过滤条件。一个完整的过滤条件由三个属性拼装组成， 例子：{attr: &quot;role.id&quot;, oper: &quot;In&quot;, value: &quot;3&quot;}，组成的过滤条件为“role.idIn=3”， 表示只查询用户的角色为“id=3”的所有用户。当集合中有多个过滤条件时，用“and”连接。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.attr",
            "description": "<p>过滤条件的过滤字段。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.oper",
            "description": "<p>过滤条件的过滤关键字。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.value",
            "description": "<p>过滤条件的过滤值，不能为null。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    name: \"General Unix\",\n    filters: [{attr: \"sysType.name\", oper: \"Is\", value: \"General Unix\"}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev/navAdd/:{type}"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/dev",
    "title": "创建新主机资源/网络资源",
    "version": "1.0.0",
    "name": "PostHost",
    "group": "Dev",
    "description": "<p>创建一个新的资源。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "name",
            "description": "<p>资源名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "ip",
            "description": "<p>资源IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>资源类型。可选值：0 - 主机，1 - 网络资源</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "region",
            "description": "<p>区域。 例子：&quot;region&quot;: { &quot;id&quot;: 1 }，表示设置资源的区域为“id=1”的区域。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "sysType",
            "description": "<p>资源类型。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sysType.id",
            "description": "<p>资源类型ID,例如：&quot;sysType&quot;:{&quot;id&quot;:1}。预定义的资源类型id：主机有Linux,Windows,IBM AIX, HP UX, IBM AS/400的ID分别为&quot;1&quot;，&quot;2&quot;，&quot;4&quot;，&quot;18&quot;。网络资源有Cisco IOS, Huawei Quidway, Juniper NetScreen, H3C Comware,General Network的ID分别为&quot;5&quot;，&quot;6&quot;，&quot;7&quot;，&quot;8&quot;，&quot;9&quot;。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extInfo",
            "description": "<p>扩展信息属性值,例如&quot;extInfo&quot;:{&quot;1&quot;:&quot;bb&quot;}。此处的&quot;1&quot;在系统设置中的资源扩展信息 DevExt实体中的&quot;id&quot;必须有，并且&quot;bb&quot;数据类型必须符合DevExt中的&quot;type&quot;,是否必须要填写要很据DevExt中&quot;required&quot;决定， DevExt中&quot;extra&quot;字段定义了&quot;aa&quot;取值范围等。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "state",
            "description": "<p>默认值为0。资源状态：0-活动；1-禁用。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "charset",
            "description": "<p>系统编码 ，资源编码类型，缺省从资源类型中获取。编码类型（ISO-8859-1/GB18030/US-ASCII/UTF-8）。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "servSys",
            "description": "<p>业务系统。可参考ServSys实体 ，例如：servsys:{ &quot;id&quot;:1,&quot;name&quot;:&quot;ss&quot;...}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "servSys.id",
            "description": "<p>业务系统的ID，例如&quot;servSys&quot;:{&quot;id&quot;:1}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "owner",
            "description": "<p>责任人，用户实体。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>简要说明。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\":65\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/devType",
    "title": "创建新设备类型",
    "version": "1.0.0",
    "name": "PostSysType",
    "group": "Dev",
    "description": "<p>创建一个新的设备类型。</p>",
    "success": {
      "fields": {
        "Response 201": [
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型的唯一性标识。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>设备类型名。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": false,
            "field": "privAccount",
            "description": "<p>特权账号。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": false,
            "field": "pwHandler",
            "description": "<p>改密方式。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": false,
            "field": "charset",
            "description": "<p>编码类型。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": false,
            "field": "srcType",
            "description": "<p>来源，0 预定义，1 自定义。手动创建的设备类型，srcType都是1。</p>"
          },
          {
            "group": "Response 201",
            "type": "Object",
            "optional": false,
            "field": "sysTypeGroup",
            "description": "<p>设备分组信息。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "sysTypeGroup.id",
            "description": "<p>设备类型分组的ID。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "sysTypeGroup.name",
            "description": "<p>设备类型分组名。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "sysTypeGroup.srcType",
            "description": "<p>来源，0 预定义，1 自定义。手动创建的设备类型，srcType都是1。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "sysTypeGroup.resType",
            "description": "<p>资源类型，0 主机 ，1 网络设备。</p>"
          },
          {
            "group": "Response 201",
            "type": "Array",
            "optional": false,
            "field": "serviceConfs",
            "description": "<p>设备类型服务信息。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.id",
            "description": "<p>该设备类型上的服务配置信息。</p>"
          },
          {
            "group": "Response 201",
            "type": "Object",
            "optional": false,
            "field": "serviceConfs.serviceType",
            "description": "<p>该设备类型上的服务类型信息。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.serviceType.id",
            "description": "<p>该设备类型上的服务类型ID。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.serviceType.type",
            "description": "<p>该设备类型上的服务类型分类，0 字符终端、1 图形会话、默认为0 。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.serviceType.srcType",
            "description": "<p>该设备类型上的服务类型的来源类型， 0 预定义，1 自定义,默认为0。</p>"
          },
          {
            "group": "Response 201",
            "type": "Object",
            "optional": false,
            "field": "serviceConfs.serviceType.confs",
            "description": "<p>该设备类型上的服务类型的服务通用配置。</p>"
          },
          {
            "group": "Response 201",
            "type": "Object",
            "optional": false,
            "field": "serviceConfs.confs",
            "description": "<p>该设备类型上的服务配置。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.confs.port",
            "description": "<p>服务端口。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": false,
            "field": "serviceConfs.confs.icon",
            "description": "<p>图标文件名。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": false,
            "field": "serviceConfs.confs.rdp_console",
            "description": "<p>Console模式。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.confs.enterprise",
            "description": "<p>商业版（未配置为0，配置为1）。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.confs.xfwd_cmdline",
            "description": "<p>命令。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n\n{\n \"id\":1208,\n \"name\":\"qweqqew\",\n \"privAccount\":\"aaa\",\n \"pwHandler\":\"YiYangWangJing firewall\",\n \"charset\":\"GB18030\",\n \"srcType\":1,\n \"sysTypeGroup\":{\"id\":1,\"name\":\"Linux\",\"srcType\":0,\"resType\":0},\n \"serviceConfs\":[\n     {\n         \"id\":489,\n         \"serviceType\":{\"id\":1,\"type\":0,\"srcType\":0},\n         \"confs\":{\"port\":22}\n     },\n     {\n         \"id\":490,\n         \"serviceType\":{\"id\":2,\"type\":0,\"srcType\":0},\n         \"confs\":{\"port\":3}\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DeviceTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devType"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>设备类型名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "privAccount",
            "description": "<p>特权帐号。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "pwHandler",
            "description": "<p>改密方式。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "charset",
            "description": "<p>编码类型。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "sysTypeGroup",
            "description": "<p>分组信息。分组信息的选择有两种，第一种是选择原有的分组，请求例如：&quot;sysTypeGroup&quot;:{&quot;id&quot;:4}。 第二种是创建一个新的分组，需要填写名字和资源类型，请求例如：&quot;sysTypeGroup&quot;:{&quot;name&quot;:&quot;Network&quot;,&quot;resType&quot;:0}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sysTypeGroup.id",
            "description": "<p>设备类型分组的ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "sysTypeGroup.name",
            "description": "<p>设备类型分组的名字。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sysTypeGroup.resType",
            "description": "<p>设备类型分组的资源类型，0 主机 ，1 网络设备。</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "serviceConfs",
            "description": "<p>该设备类型上的服务配置信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.serviceType",
            "description": "<p>该设备类型上的服务类型， 例如：&quot;serviceConfs&quot;:[{&quot;serviceType&quot;:{&quot;id&quot;:1},&quot;confs&quot;:{&quot;port&quot;:22}}]。 serviceType为服务的id，id为1时，对应的是telnet服务.confs字段代表服务的配置。例子表示：设置telnet服务的port端口为22。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.serviceType.id",
            "description": "<p>该设备类型上的服务类型ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "serviceConfs.confs",
            "description": "<p>该设备类型上的服务配置。例如：telnet服务配置：{&quot;port&quot;:22}。表示：port端口为22。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.confs.port",
            "description": "<p>服务端口。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serviceConfs.confs.icon",
            "description": "<p>图标文件名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serviceConfs.confs.rdp_console",
            "description": "<p>Console模式。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.confs.enterprise",
            "description": "<p>商业版（未配置为0，配置为1）。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.confs.xfwd_cmdline",
            "description": "<p>命令。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    \"name\":\"qweqqew\",\n    \"privAccount\":\"enable\",\n    \"pwHandler\":\"DePu\",\n    \"charset\":\"UTF-8\",\n    \"sysTypeGroup\":{\"id\":1},\n    \"serviceConfs\":[\n        {\n            \"serviceType\":{\"id\":1},\n            \"confs\":{\"port\":22}\n        },\n        {\n            \"serviceType\":{\"id\":2},\n            \"confs\":{\"port\":2}\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/devTypeGroup",
    "title": "创建新设备类型分组",
    "version": "1.0.0",
    "name": "PostSysTypeGroup",
    "group": "Dev",
    "description": "<p>创建一个新的设备类型分组。</p>",
    "success": {
      "fields": {
        "Response 201": [
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型分组的id,唯一性标识。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>设备类型分组名。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "srcType",
            "description": "<p>来源，0 预定义，1 自定义。默认为0。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "resType",
            "description": "<p>资源类型，0 主机 ，1 网络设备，2 数据库，3 应用，4 Windows域。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n{\n \"id\":1000,\n \"name\":\"aa\",\n \"srcType\":1,\n \"resType\":0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DeviceTypeGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devTypeGroup"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>设备类型分组名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resType",
            "description": "<p>资源类型，0 主机 ，1 网络设备，2 数据库，3 应用，4 Windows域。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    \"name\":\"aa\",\n    \"resType\":0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/dev:id",
    "title": "修改资源",
    "version": "1.0.0",
    "name": "PutDev",
    "group": "Dev",
    "description": "<p>编辑资源</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>资源id。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..30",
            "optional": true,
            "field": "name",
            "description": "<p>资源名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "ip",
            "description": "<p>资源IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "sysType",
            "description": "<p>资源类型。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sysType.id",
            "description": "<p>资源类型ID,例如：&quot;sysType&quot;:{&quot;id&quot;:1}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "region",
            "description": "<p>区域。 例子：&quot;region&quot;: { &quot;id&quot;: 1 }，表示设置资源的区域为“id=1”的区域。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extInfo",
            "description": "<p>扩展信息属性值,例如&quot;extInfo&quot;:{&quot;1&quot;:&quot;bb&quot;}。此处的&quot;1&quot;在系统设置的资源扩展信息 DevExt实体中的&quot;id&quot;必须有， 并且&quot;bb&quot;数据类型必须符合DevExt中的&quot;type&quot;,是否必须要填写要很据DevExt中&quot;required&quot;决定， DevExt中&quot;extra&quot;字段定义了&quot;aa&quot;取值范围等。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "state",
            "description": "<p>默认值为0。资源状态：0-活动；1-禁用。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "charset",
            "description": "<p>系统编码 ，资源编码类型，缺省从资源类型中获取。编码类型（ISO-8859-1/GB18030/US-ASCII/UTF-8）。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "servSys",
            "description": "<p>业务系统。可参考ServSys实体 ，例如：servsys:{ &quot;id&quot;:1,&quot;name&quot;:&quot;ss&quot;...}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "servSys.id",
            "description": "<p>业务系统的ID，例如&quot;servSys&quot;:{&quot;id&quot;:1}。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>简要说明。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "services",
            "description": "<p>服务配置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "services.services",
            "description": "<p>服务配置，里面的配置必须和资源类型一致，不同的资源类型对应不同的服务， 服务配置中协议或客户端只能是资源类型里面配置的协议或客户端，且每个协议或客户端只能有一种， 详情可查看资源类型sysType.serviceConfs中confs字段中获取此所有协议的默认配置，可以删除，修改和添加， 另外资源类型为&quot;Oracle&quot;,&quot;MSSQL&quot;,&quot;MYSQL&quot;,&quot;B/S&quot;,&quot;C/S&quot;的服务配置只有一个的客户端配置，详情可查看创建数据库， 应用系统的文档。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "owner",
            "description": "<p>责任人，用户实体，例如：&quot;owner&quot;:{&quot;id&quot;:&quot;xxx&quot;}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "accounts",
            "description": "<p>系统帐号，例如{&quot;accounts&quot;: [{&quot;name&quot;: &quot;shterm&quot;, &quot;priv&quot;: true, &quot;type&quot;: 0, &quot;creator&quot;: 1, &quot;password&quot;: &quot;1mBbuVyhI0Q+O4FgaUpTXg==&quot;, &quot;createtime&quot;: 1468051437237}]}， &quot;priv&quot;为true表示特权帐号，每个资源只能有一个特权帐号，&quot;creator&quot;为创建此帐号的用户&quot;id&quot;,&quot;createtime&quot;为创建此帐号的时间。</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "accounts.accounts",
            "description": "<p>帐号列表。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "accounts.accounts.name",
            "description": "<p>帐号列表中的单个帐号的帐号名，最大长度30，不允许包含中文字符和&quot;/&quot;。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "haspassword",
            "description": "<p>如果haspassword=1， 不传帐号密码password，则不改变帐号的密码，传了密码password则改变帐号密码，不传haspassword如果有密码则清空密码。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "accounts.accounts.priv",
            "description": "<p>是否特权，true 特权帐号，false非特权帐号，帐号中的特权帐号必填。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "accounts.accounts.type",
            "description": "<p>帐号密码类型，0 - 密码，1 - 私钥， 2 - 域， 3 - 切换自。 当type为0只有下面的密码password字段，当type为1，只有下列的keyPairId字段 ，当type为2时，只有下列的domain字段，当 type为3时，只有下列的切换自字段。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "accounts.accounts.password",
            "description": "<p>帐号列表中单个帐号的密码，在保存数据库时会对密码进行加密保护。</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": true,
            "field": "accounts.accounts.domain",
            "description": "<p>仅windows资源类型支持此字段，帐号列表中单个帐号添加域帐号， 此时帐号名将会在域名中选择域帐号id，域和密码不能同时存在，例如 &quot;accounts&quot;:{&quot;accounts&quot;:[{&quot;name&quot;:&quot;xxx&quot;,&quot;priv&quot;:false,&quot;domain&quot;:{&quot;id&quot;:&quot;xx&quot;}]}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": true,
            "field": "accounts.accounts.keyPairId",
            "description": "<p>私钥，仅有ssh协议且没有切换自的的资源帐号可以配私钥， 例如&quot;accounts&quot;:{&quot;accounts&quot;:[{&quot;name&quot;:&quot;xxx&quot;,&quot;priv&quot;:false,&quot;keyPairId&quot;:{&quot;id&quot;:&quot;xx&quot;}]}。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "accounts.accounts.su_account",
            "description": "<p>切换自，有ssh或者telnet协议的资源帐号支持切换自，切换自可选为当前 资源除自身以外的其他无切换自并且有密码或者私钥的帐号， 且作为切换自的帐号必须含有密码或者密钥且不能有切换自也不能作为别的资源的跳转帐号，当前帐号如果是特权帐号可以无密码， 非特权帐号必须含有密码,切换自和密码同时只能存在一个，系统不支持二次跳转，所有的二次跳转均不支持， 例如&quot;accounts&quot;:{&quot;accounts&quot;:[{&quot;name&quot;:&quot;xxx&quot;,&quot;priv&quot;:false,&quot;password&quot;:&quot;xxxx&quot;,&quot;su_account&quot;:&quot;xx&quot;]}。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    \"ip\": \"1.2.3.4\",\n    \"sysType\": {\"id\":3},\n    \"extInfo\": {\"1\": \"shterm\"},\n    \"state\": 0,\n    \"charset\": \"ISO-8859-1\",\n    \"servSys\": { \"id\": 1 },\n    \"description\": \"shterm is very good\",\n    \"services\":{\"services\":{\"ssh\":{\"port\":5520,\"proto\":\"ssh\"}}},\n    \"accounts\":{\"accounts\":[{\"name\":\"shterm\",\"password\":\"shterm\"}]},\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/devType/:id",
    "title": "修改设备类型",
    "version": "1.0.0",
    "name": "PutSysType",
    "group": "Dev",
    "description": "<p>修改设备类型的信息。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备类型的 ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "name",
            "description": "<p>设备类型名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "privAccount",
            "description": "<p>特权帐号。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "pwHandler",
            "description": "<p>改密方式。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "charset",
            "description": "<p>编码类型。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "sysTypeGroup",
            "description": "<p>sysTypeGroup 分组信息。 分组信息的选择有两种，第一种是选择原有的分组，请求例如：&quot;sysTypeGroup&quot;:{&quot;id&quot;:4}。 第二种是创建一个新的分组，需要填写名字和资源类型，请求例如：&quot;sysTypeGroup&quot;:{&quot;name&quot;:&quot;Network&quot;,&quot;resType&quot;:0}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sysTypeGroup.id",
            "description": "<p>设备类型分组的ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "sysTypeGroup.name",
            "description": "<p>设备类型分组的名字。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sysTypeGroup.resType",
            "description": "<p>设备类型分组的资源类型，0 主机 ，1 网络设备。</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "serviceConfs",
            "description": "<p>该设备类型上的服务配置信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.serviceType",
            "description": "<p>该设备类型上的服务类型， 例如：&quot;serviceConfs&quot;:[{&quot;serviceType&quot;:{&quot;id&quot;:1},&quot;confs&quot;:{&quot;port&quot;:22}}]。 serviceType为服务的id，id为1时，对应的是telnet服务.confs字段代表服务的配置。例子表示：设置telnet服务的port端口为22。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.serviceType.id",
            "description": "<p>该设备类型上的服务类型ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "serviceConfs.confs",
            "description": "<p>该设备类型上的服务配置。例如：telnet服务配置：{&quot;port&quot;:22}。表示：port端口为22。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "serviceConfs.confs.port",
            "description": "<p>服务端口。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serviceConfs.confs.icon",
            "description": "<p>图标文件名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serviceConfs.confs.rdp_console",
            "description": "<p>Console模式。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "serviceConfs.confs.enterprise",
            "description": "<p>商业版（未配置为0，配置为1）。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "serviceConfs.confs.xfwd_cmdline",
            "description": "<p>命令。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n  \"name\":\"General Network\",\n  \"privAccount\":\"enable\",\n  \"pwHandler\":\"DePu\",\n  \"charset\":\"UTF-8\",\n  \"sysTypeGroup\":{\"id\":4},\n  \"serviceConfs\":[\n    {\n       \"serviceType\":{\"id\":1},\n       \"confs\":{\"port\":22}\n    },\n    {\n       \"serviceType\":{\"id\":2},\n       \"confs\":{\"port\":2}\n   }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/DeviceTypeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devType/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/devTypeGroup/:id",
    "title": "修改设备类型分组信息",
    "version": "1.0.0",
    "name": "PutSysTypeGroup",
    "group": "Dev",
    "description": "<p>修改设备类型的分组信息。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>设备类型分组名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "resType",
            "description": "<p>资源类型，0 主机 ，1 网络设备，2 数据库，3 应用，4 Windows域。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"name\":\"Network\",\n \"resType\":0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备类型分组不存在404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/DeviceTypeGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devTypeGroup/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/deviceAccess/batchShtermUrl",
    "title": "获取批量启动的shterm url",
    "version": "1.0.0",
    "name": "batchUrl",
    "group": "DeviceAccess",
    "description": "<p>获取批量启动的shterm url</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/deviceAccess/batchShtermUrl",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\nsessParams: [\n{\n    \"dev\": 1,\n    \"account\": \"root\",\n    \"proto\": \"ssh\",\n    \"sessRemark\": \"test\",\n    \"worksheet\": 0,\n    \"misc\": {\n        \"resolution\": \"80x24\"\n    }\n}, {\n    \"dev\": 1,\n    \"account\": \"admin\",\n    \"proto\": \"rdp\",\n    \"sessRemark\": \"test\",\n    \"misc\": {\n        \"resolution\": \"1366x768:fullscreen\"\n    }\n}]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dev",
            "description": "<p>设备ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>帐号名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "proto",
            "description": "<p>服务名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessRemark",
            "description": "<p>会话备注，/api/sysParam/key/sessionConfig 返回值中的{...&quot;value&quot;: {...&quot;Noteway&quot;:&quot;2&quot;}}, 如果，Noteway值为&quot;2&quot;, 则表示必须填写。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "misc",
            "description": "<p>其它项。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.dualAuthLogin",
            "description": "<p>双人复核登录名, 当isDualAuth为true时，需要设置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.resolution",
            "description": "<p>分辨率 （协议为ftp或sftp的会话可不提供）格式为：(\\d+)x(\\d+)(:\\w+)?， 三个group分别为width, height, mode；mode有： maximize（最大化），fullscreen（全屏）</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "misc.isRdpConsole",
            "description": "<p>rdp会话是否为console模式 （rdp协议的会话可提供）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.disk",
            "description": "<p>磁盘映射，参数格式为c,d,e,f 以逗号分隔的分区名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.anyAccount",
            "description": "<p>any帐号名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.anyPassword",
            "description": "<p>any帐号密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.vncPassword",
            "description": "<p>vnc密码 （vnc会话可提供）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "misc.appclient",
            "description": "<p>要启动的客户端id（应用发布）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n content: [\n     {\n         \"url\":\"shterm://eJwdzUsOwiAUheG93LG8CiIlMS7CBRhKr6ERSwPXTox7F52e5D/fG3as4GHgkisFB5gCxXR71dzHRLR5IXK\n         JIafSyDvppGiJsD5F2BbRsO5LRPGPrhQqXag8cD1rE3TU7s7GUzTMzKjZOBvLrB2OqFyUqKaO/U67o7ot+cCVhs8XHbgr9w==#l\n         ocalhost:8080\",\n         \"launcher\": \"shtermclient\"\n     },\n     {\n         \"url\": \"shterm://eJxlUMsKwjAQ/JecFLS0a6itJ2sfIAgKtR9QbKAFbUOSWkT8d2cPIijkMDM7mZ3kKWqtxUbo0bmHWAjrQO\n         rm1vVLMwxuG/geDnnBavaFcxjvysBJHsQA1E1gkQ/U9kBfLxTNs+P5tNlL86hS21XXKYWu+jsGABduUJXLpEwPBy5Rg/N64NFcf\n         /NuQ6OgNZ1RF7a4lptIvtj+esf+8x4e/1WbLJSC4jzPkmK9i8M8j4ikn4RFJmVGWRgFMfv4W0plbTdwkOYg8onE6w2yCVD0\",\n         \"launcher\": \"gui_browser\"\n     },\n     {\n         \"url\": \"shterm://eJxlUMsKwjAQ/JecFLS0a6itJ2sfIAgKtR9QbKAFbUOSWkT8d2cPIijkMDM7mZ3kKWqtxUbo0bmHWAjrQO\n         rm1vVLMwxuG/geDnnBavaFcxjvysBJHsQA1E1gkQ/U9kBfLxTNs+P5tNlL86hS21XXKYWu+jsGABduUJXLpEwPBy5Rg/N64NFcf\n         /NuQ6OgNZ1RF7a4lptIvtj+esf+8x4e/1WbLJSC4jzPkmK9i8M8j4ikn4RFJmVGWRgFMfv4W0plbTdwkOYg8onE6w2yCVD0\",\n         \"launcher\": \"tui_browser\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/deviceaccess/web/api/DeviceAccessController.java",
    "groupTitle": "DeviceAccess",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/deviceAccess/batchShtermUrl"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/api/deviceAccess/shtermUrl",
    "title": "获取shterm url",
    "version": "1.0.0",
    "name": "generateShtermUrl",
    "group": "DeviceAccess",
    "description": "<p>获取shterm url</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/deviceAccess/shtermUrl",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"dev\": 1,\n\"account\": \"root\",\n\"proto\": \"ssh\",\n\"sessRemark\": \"test\",\n\"worksheet\": 0,\n\"recentaccess\": 1,\n\"misc\": {\n    \"resolution\": \"80x24\"\n}\n}\n\n{\n\"dev\": 1,\n\"account\": \"admin\",\n\"proto\": \"rdp\",\n\"sessRemark\": \"test\",\n\"misc\": {\n    \"resolution\": \"1366x768:fullscreen\"\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dev",
            "description": "<p>设备ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>帐号名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "proto",
            "description": "<p>服务名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessRemark",
            "description": "<p>会话备注，/api/sysParam/key/sessionConfig 返回值中的{...&quot;value&quot;: {...&quot;Noteway&quot;:&quot;2&quot;}}, 如果，Noteway值为&quot;2&quot;, 则表示必须填写。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "misc",
            "description": "<p>其它项。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.dualAuthLogin",
            "description": "<p>双人复核登录名, 当isDualAuth为true时，需要设置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.resolution",
            "description": "<p>分辨率 （协议为ftp或sftp的会话可不提供）格式为：(\\d+)x(\\d+)(:\\w+)?， 三个group分别为width, height, mode；mode有： maximize（最大化），fullscreen（全屏）</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "misc.isRdpConsole",
            "description": "<p>rdp会话是否为console模式 （rdp协议的会话可提供）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.disk",
            "description": "<p>磁盘映射，参数格式为c,d,e,f 以逗号分隔的分区名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.anyAccount",
            "description": "<p>any帐号名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.anyPassword",
            "description": "<p>any帐号密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.vncPassword",
            "description": "<p>vnc密码 （vnc会话可提供）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "misc.appclient",
            "description": "<p>要启动的客户端id（应用发布）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"url\":\"shterm://eJxlUMsKwjAQ/JecFLS0a6itJ2sfIAgKtR9QbKAFbUOSWkT8d2cPIijkMDM7mZ3kKWqtxUbo0bmHWAjrQOrm1vVL\n  MwxuG/geDnnBavaFcxjvysBJHsQA1E1gkQ/U9kBfLxTNs+P5tNlL86hS21XXKYWu+jsGABduUJXLpEwPBy5Rg/N64NFcf/NuQ6OgNZ1R\n  F7a4lptIvtj+esf+8x4e/1WbLJSC4jzPkmK9i8M8j4ikn4RFJmVGWRgFMfv4W0plbTdwkOYg8onE6w2yCVD0\"\n  \"launcher\": \"shtermclient\" / \"gui_browser\" / \"tui_browser\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/deviceaccess/web/api/DeviceAccessController.java",
    "groupTitle": "DeviceAccess",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/deviceAccess/shtermUrl"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/api/deviceAccess/loginAppServer",
    "title": "获取登录应用发布服务器shterm url",
    "version": "1.0.0",
    "name": "loginAppServer",
    "group": "DeviceAccess",
    "description": "<p>获取登录应用发布服务器shterm url</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/deviceAccess/loginAppServer",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dev",
            "description": "<p>应用发布服务器ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "account",
            "description": "<p>同步到应用发布服务器上的堡垒机帐号名。如果不填写，则表示使用应用发布服务器管理员账号登录。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "misc",
            "description": "<p>其它项。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.resolution",
            "description": "<p>分辨率 （协议为ftp或sftp的会话可不提供）格式为：(\\d+)x(\\d+)(:\\w+)?， 三个group分别为width, height, mode；mode有： maximize（最大化），fullscreen（全屏）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.disk",
            "description": "<p>win磁盘映射，参数格式为c,d,e,f 以逗号分隔的分区名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "misc.mac_drm",
            "description": "<p>mac磁盘映射模式, 0: 无, 1: 所有磁盘驱动器, 2: 主文件夹, 3: 文档文件夹, 4: 其它文件夹</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.mac_rf",
            "description": "<p>mac 磁盘映射其它文件夹路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"dev\": 101,\n\"account\": \"root\",\n\"misc\": {\n    \"resolution\": \"80x24\"，\n    \"disk\": \"c,d\"\n    }\n}\n\n{\n\"dev\": 101\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"url\":\"shterm://eJxVUNFqwzAM/JXi51GSlpbit72OQVvaH1ASjYQ6lmopLVvZv092R8bADz7d6e7shwNm590oKq17caIGXplPmG6YbA\n  CT9hh1aEEHiouANwwmGfzKyKbsDr7eGsAITcA2YSfCMjFT0sJWRnb9c6nKQMCAKUqAxRYLuyYcSdEKhd+4kTqcLTjRyJr9cx8IFNs/EiRb\n  +mqxPx/82xfpcXN4v9b1Lmffi2xdsmGa20vuVFdLO6tlecIFPxuC1PVEl7nVR2nrZ+E6r8Z/3/T9AxlyYXc=\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/deviceaccess/web/api/DeviceAccessController.java",
    "groupTitle": "DeviceAccess",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/deviceAccess/loginAppServer"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/api/deviceAccess/loginTest",
    "title": "登录测试",
    "version": "1.0.0",
    "name": "loginTest",
    "group": "DeviceAccess",
    "description": "<p>登录测试</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/deviceAccess/loginTest",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"dev\": 1,\n\"account\": \"root\",\n\"proto\": \"ssh\",\n\"misc\": {\n    \"resolution\": \"80x24\"\n}\n}\n\n{\n\"dev\": 1,\n\"account\": \"admin\",\n\"proto\": \"rdp\",\n\"misc\": {\n    \"resolution\": \"1366x768:fullscreen\"\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dev",
            "description": "<p>设备ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>帐号名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "proto",
            "description": "<p>服务名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessRemark",
            "description": "<p>会话备注，/api/sysParam/key/sessionConfig 返回值中的{...&quot;value&quot;: {...&quot;Noteway&quot;:&quot;2&quot;}}, 如果，Noteway值为&quot;2&quot;, 则表示必须填写。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "misc",
            "description": "<p>其它项。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.dualAuthLogin",
            "description": "<p>双人复核登录名, 当isDualAuth为true时，需要设置</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.resolution",
            "description": "<p>分辨率 （协议为ftp或sftp的会话可不提供）格式为：(\\d+)x(\\d+)(:\\w+)?， 三个group分别为width, height, mode；mode有： maximize（最大化），fullscreen（全屏）</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "misc.isRdpConsole",
            "description": "<p>rdp会话是否为console模式 （rdp协议的会话可提供）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.disk",
            "description": "<p>磁盘映射，参数格式为c,d,e,f 以逗号分隔的分区名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.anyAccount",
            "description": "<p>any帐号名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.anyPassword",
            "description": "<p>any帐号密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "misc.vncPassword",
            "description": "<p>vnc密码 （vnc会话可提供）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "misc.appclient",
            "description": "<p>要启动的客户端id（应用发布）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n  \"url\":\"shterm://eJxlUMsKwjAQ/JecFLS0a6itJ2sfIAgKtR9QbKAFbUOSWkT8d2cPIijkMDM7mZ3kKWqtxUbo0bmHWAjrQOrm1vVLMw\n  xuG/geDnnBavaFcxjvysBJHsQA1E1gkQ/U9kBfLxTNs+P5tNlL86hS21XXKYWu+jsGABduUJXLpEwPBy5Rg/N64NFcf/NuQ6OgNZ1RF7a4\n  lptIvtj+esf+8x4e/1WbLJSC4jzPkmK9i8M8j4ikn4RFJmVGWRgFMfv4W0plbTdwkOYg8onE6w2yCVD0\"\n  \"launcher\": \"browser\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/deviceaccess/web/api/DeviceAccessController.java",
    "groupTitle": "DeviceAccess",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/deviceAccess/loginTest"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/dev/import",
    "title": "导入资源",
    "version": "1.0.0",
    "name": "importDev",
    "group": "Dev",
    "description": "<p>导入资源的信息。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>文件名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>文件相对路径。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "ip",
            "description": "<p>资源IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>资源类型。可选值：0 - 主机；1 - 网络资源；2 - 数据库；3 - 应用。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "sysType",
            "description": "<p>资源类型。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sysType.id",
            "description": "<p>资源类型ID，例如：&quot;sysType&quot;:{&quot;id&quot;:1}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extInfo",
            "description": "<p>扩展信息属性值，例如&quot;extInfo&quot;:{&quot;aa&quot;:&quot;bb&quot;}。 此处的&quot;aa&quot;在DevExt实体中的&quot;name&quot;必须有，并且&quot;bb&quot;数据类型必须符合DevExt中的&quot;type&quot;， 是否必须要填写要很据DevExt中&quot;required&quot;决定，DevExt中&quot;extra&quot;字段定义了&quot;aa&quot;取值范围等。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "state",
            "defaultValue": "0",
            "description": "<p>默认值为0。资源状态：0-活动；1-禁用。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "charset",
            "description": "<p>系统编码 ，资源编码类型，缺省从资源类型中获取。编码类型（ISO-8859-1/GB18030/US-ASCII/UTF-8）。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "servSys",
            "description": "<p>业务系统。可参考ServSys实体 ，例如：servsys:{ &quot;id&quot;:1,&quot;name&quot;:&quot;ss&quot;...}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "servSys.id",
            "description": "<p>业务系统的ID，例如&quot;servSys&quot;:{&quot;id&quot;:1}。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>简要描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n  \"name\":\"test\",\n  \"ip\":\"192.168.99.6\",\n  \"type\":0,\n  \"sysType\":{\"id\":11},\n  \"extInfo\":{\"as\":\"cc\",\"bb\":\"cc\",\"dd\":\"bb\"},\n  \"description\":\"fff\",\n  \"charset\":\"UTF-8\",\n  \"servSys\":{\"id\":1},\n  \"state\":0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "successSize",
            "description": "<p>导入资源成功的个数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "failSize",
            "description": "<p>导入资源失败的个数。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "{\n    \"successSize\":0,\n    \"failSize\":1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "文件不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev/import"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/oplog/id/:id",
    "title": "获取配置日志信息",
    "version": "1.0.0",
    "name": "GetOplog",
    "group": "EventAudit",
    "description": "<p>根据配置日志 ID 查询并返回特定配置日志的信息。</p>",
    "examples": [
      {
        "title": "请求示例 curl -i",
        "content": "http://localhost/shterm/api/oplog/id/AVT1E36bgXIUK9IjhsYA",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会话日志 ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例 HTTP/1.1 200 OK",
          "content": "{\n    \"id\":\"AVT1LCRZgXIUK9IjhsYH\", \"user\":\"admin\",\"ipaddr\":\"0:0:0:0:0:0:0:1\",\n    \"module\":\"login\",\"op\":\"用户登录。\", \"object\":\"admin\",\"result\":0,\n    \"info\":{\n        \"result\":\"success\", \"service\":\"WEB\", \"phase\":1,\n        \"sessionId\":\"02FC710BAB02F5DA70FD32C2347C31BC\" },\n    \"displayInfos\":{\n        \"result\":\"success\", \"phase\":1,\n        \"sessionId\":\"02FC710BAB02F5DA70FD32C2347C31BC\", \"service\":\"WEB\" }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会话的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>操作用户登录名(用户名)。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "ts",
            "description": "<p>操作时间，格式为yyyy-MM-dd HH:mm:ss。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "ipaddr",
            "description": "<p>登录IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "module",
            "description": "<p>模块,login, config, event。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "op",
            "description": "<p>操作描述。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "object",
            "description": "<p>操作对象。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "result",
            "description": "<p>操作结果,0：成功,1：失败。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "desc",
            "description": "<p>操作结果描述,一般失败才有。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "info",
            "description": "<p>操作明细信息。例如： 用户认证方式method； 认证结果result 0：未知；1：成功；2：失败；3：disabled；4：norole；5：expire；6：locked； 认证服务service，web/ssh等</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "displayInfos",
            "description": "<p>操作明细信息易读版本。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "配置日志不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/OplogController.java",
    "groupTitle": "EventAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/oplog/id/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/oplog",
    "title": "获取符合条件的操作日志列表",
    "version": "1.0.0",
    "name": "GetOplogs",
    "group": "EventAudit",
    "description": "<p>查询并返回符合条件的操作日志列表。 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals ”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“ LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例 curl -i",
        "content": "http://localhost/shterm/api/oplog?module=login&page=0&size=50&sort=stamp,\ndesc",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.id",
            "description": "<p>会话的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.user",
            "description": "<p>操作用户登录名(用户名)。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.ts",
            "description": "<p>操作时间，格式为yyyy-MM-dd HH:mm:ss。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.ipaddr",
            "description": "<p>登录IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.module",
            "description": "<p>模块,login, config, event。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.op",
            "description": "<p>操作描述。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.object",
            "description": "<p>操作对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.result",
            "description": "<p>操作结果,0：成功,1：失败。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.desc",
            "description": "<p>操作结果描述,一般失败才有。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content.info",
            "description": "<p>操作明细信息。例如： 用户认证方式method； 认证结果result 0：未知；1：成功；2：失败；3：disabled；4：norole；5：expire；6：locked； 认证服务service，web/ssh等</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "content.displayInfos",
            "description": "<p>操作明细信息展示。翻译</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例 HTTP/1.1 200 OK { \"totalElements\":",
          "content": "100, \"totalPages\": 10, \"number\": 0, \"size\": 10, \"first\": true, \"last\":\nfalse, \"numberOfElements\": 10, \"content\": [ { displayInfos: { result:\n\"success\", phase: 1, sessionId: \"3D03A272FAFE3E6A0DFD2474653D9665\",\nservice: \"WEB\" }, phase: 1, result: \"success\", service: \"WEB\" sessionId:\n\"3D03A272FAFE3E6A0DFD2474653D9665\", id: \"AVUajyTugXIUK9Ijhsb3\", info: {\nresult: \"success\", service: \"WEB\", phase: 1, sessionId:\n\"3D03A272FAFE3E6A0DFD2474653D9665\" }, phase: 1, result: \"success\"\nservice: \"WEB\", sessionId: \"3D03A272FAFE3E6A0DFD2474653D9665\", ipaddr:\n\"0:0:0:0:0:0:0:1\", module: \"login\", object: \"admin\", op: \"用户登录。\", result:\n0, user: \"admin\" } ...... ] }",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/OplogController.java",
    "groupTitle": "EventAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/oplog"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>操作用户登录名(用户名)。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ts",
            "description": "<p>操作时间，格式为yyyy-MM-dd HH:mm:ss。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ipaddr",
            "description": "<p>登录IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "module",
            "description": "<p>模块,login, config, event。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "op",
            "description": "<p>操作描述。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "object",
            "description": "<p>操作对象。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "result",
            "description": "<p>操作结果,0：成功,1：失败。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desc",
            "description": "<p>操作结果描述,一般失败才有。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "info",
            "description": "<p>操作明细信息。例如： 用户认证方式method； 认证结果result 0：未知；1：成功；2：失败；3：disabled；4：norole；5：expire；6：locked； 认证服务service，web/ssh等</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/oplog/userOnlineTime/:username",
    "title": "查询用户最近30天在线时长情况。",
    "version": "1.0.0",
    "name": "GetUserOnlineTime",
    "group": "EventAudit",
    "description": "<p>查询用户最近30天在线时长情况.</p>",
    "examples": [
      {
        "title": "请求示例 curl -i",
        "content": "http://localhost/shterm/api/oplog/userOnlineTime/admin",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>日期。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>当天在线毫秒数。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例 HTTP/1.1 200 OK {",
          "content": "\"2016-6-6\":602271, \"2016-6-5\":0, \"2016-6-4\":21600000, \"2016-6-3\":0,\n\"2016-6-2\":0, \"2016-6-1\":0, \"2016-5-31\":0, \"2016-5-30\":0, \"2016-5-29\":0,\n\"2016-5-28\":0, \"2016-5-27\":0, \"2016-5-26\":0, \"2016-5-25\":0,\n\"2016-5-24\":0, \"2016-5-23\":0, \"2016-5-22\":0, \"2016-5-21\":0,\n\"2016-5-20\":0, \"2016-5-19\":0, \"2016-5-18\":0, \"2016-5-17\":0,\n\"2016-5-16\":0, \"2016-5-15\":0, \"2016-5-14\":0, \"2016-5-13\":0,\n\"2016-5-12\":0, \"2016-5-11\":0, \"2016-5-10\":0, \"2016-5-9\":0, \"2016-5-8\":0 }",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/OplogController.java",
    "groupTitle": "EventAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/oplog/userOnlineTime/:username"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/oplog/weekOnlineUser",
    "title": "最近一周每天在线人数",
    "version": "1.0.0",
    "name": "GetWeekOnlineUser",
    "group": "EventAudit",
    "description": "<p>查询最近一周每天在线人数</p>",
    "examples": [
      {
        "title": "请求示例 curl -i",
        "content": "http://localhost/shterm/api/oplog/weekOnlineUser",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>日期。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>当天在线人数。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例 HTTP/1.1 200 OK { \"2016-6-6\":3,",
          "content": "\"2016-6-5\":5, \"2016-6-4\":7, \"2016-6-3\":2, \"2016-6-2\":2, \"2016-6-1\":1,\n\"2016-5-31\":1, }",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/OplogController.java",
    "groupTitle": "EventAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/oplog/weekOnlineUser"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/perm/accounts",
    "title": "获取某资源上有权访问的帐号列表",
    "version": "1.0.0",
    "name": "getAccounts",
    "group": "Permission",
    "description": "<p>获取某个用户有权访问的某个资源上的帐号列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/perm/accounts?loginName=user1&deviceIp=10.10.0.1&protocol=ssh",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "userId",
            "description": "<p>用户 ID（优先使用）。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..30",
            "optional": true,
            "field": "loginName",
            "description": "<p>用户登录名。如果未指定 <code>userId</code>，则必须指定<code>loginName</code>。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "deviceId",
            "description": "<p>资源ID（优先使用）。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "deviceIp",
            "description": "<p>资源IP地址。如果未指定 <code>deviceId</code>，则必须指定<code>deviceIp</code>。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..16",
            "optional": true,
            "field": "protocol",
            "description": "<p>访问的服务。服务信息可选以下值(单选):ssh,telnet,rdp,vnc,xdmcp,xfwd。 不指定则忽略服务信息。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "accounts",
            "description": "<p>有权访问的某资源帐号列表。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[ \"root\", \"apache\" ]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/PermissionController.java",
    "groupTitle": "Permission",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/perm/accounts"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/perm/devAccList",
    "title": "查询某用户有权访问的所有资源及对应的可访问帐号",
    "version": "1.0.0",
    "name": "getDevAccList",
    "group": "Permission",
    "description": "<p>根据用户 ID 或登录名，查询某用户有权访问的所有资源及对应的可访问帐号。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/perm/devAccList?loginName=user1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户 ID（优先使用）。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "loginName",
            "description": "<p>用户登录名。如果未指定 <code>userId</code>，则必须指定登录名。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "devices",
            "description": "<p>有权访问的资源及账号列表。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "devices.id",
            "description": "<p>资源 ID。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "devices.name",
            "description": "<p>资源名称。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "devices.ip",
            "description": "<p>资源 IP 地址。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "devices.desc",
            "description": "<p>资源简要描述。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "devices.sysType",
            "description": "<p>资源系统类型名称。</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "devices.usableAccounts",
            "description": "<p>访问资源可用帐号列表。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n{\"id\": 1, \"name\": \"dev1\", \"ip\": \"10.10.0.1\", \"desc\": \"host 01\", \"sysType\": \"Linux\",\n    \"usableAccounts\": [\"root\", \"any\"]},\n{\"id\": 2, \"name\": \"dev2\", \"ip\": \"10.10.0.2\", \"desc\": \"host 02\", \"sysType\": \"Windows\",\n    \"usableAccounts\": [\"administrator\"]}\n......\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/PermissionController.java",
    "groupTitle": "Permission",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/perm/devAccList"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/perm/getDevAccPwd",
    "title": "根据资源名称、ip和帐号名，获取帐号密码",
    "version": "1.0.0",
    "name": "getDevAccPwd",
    "group": "Permission",
    "description": "<p>根据资源名称、ip和帐号名，获取帐号密码。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/perm/getDevAccPwd\n{\n    \"name\": \"res001\",\n    \"ip\": \"1.2.3.4\",\n    \"account\": \"root\"\n}",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>资源名称。</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>资源IP。</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>要获取的帐号密码。</p>"
          }
        ],
        "响应错误码": [
          {
            "group": "响应错误码",
            "type": "String",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>请求失败时，会在响应体中携带defaultMessage字段，用于标识错误原因：</p> <ul>     <li>error_ipRangeInvalid：访问IP不合法；</li>     <li>error_resNotExist：资源不存在或已删除；</li>     <li>error_nameIpNotMatch：资源名和IP不匹配;</li>     <li>error_userNoPerm：用户无此资源访问权限；</li>     <li>error_accountNotExist：指定帐号在资源上不存在；</li>     <li>error_aclExpFormatWrong：访问源IP配置格式错误；参考格式：1.1.1.1-1.1.1.100,192.168.4.20,10.10.10.0/24</li>     <li>error_accountPwdNotExist: 帐号未托管密码；</li>     <li>error_accountNoPerm：用户不允许使用该帐号访问资源。</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n\"passwordOfaccount\"",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/PermissionController.java",
    "groupTitle": "Permission",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/perm/getDevAccPwd"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/perm/devList",
    "title": "查询某用户有权访问的资源列表",
    "version": "1.0.0",
    "name": "getDevList",
    "group": "Permission",
    "description": "<p>根据用户 ID 或登录名，查询某用户可访问的资源列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/perm/devList?loginName=user1&protocols=telnet,ssh",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户 ID（优先使用）。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "loginName",
            "description": "<p>用户登录名。如果未指定 <code>userId</code>，则必须指定登录名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..64",
            "optional": true,
            "field": "protocols",
            "description": "<p>以逗号“,”分隔的服务列表。不指定则忽略服务信息。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "devices",
            "description": "<p>有权访问的资源列表。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "devices.id",
            "description": "<p>资源 ID。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "devices.name",
            "description": "<p>资源名称。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "devices.ip",
            "description": "<p>资源 IP 地址。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "devices.desc",
            "description": "<p>资源简要描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n{\"id\": 1, \"name\": \"dev1\", \"ip\": \"10.10.0.1\", \"desc\": \"host 01\" },\n{\"id\": 2, \"name\": \"dev2\", \"ip\": \"10.10.0.2\", \"desc\": \"host 02\" }\n......\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/PermissionController.java",
    "groupTitle": "Permission",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/perm/devList"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/perm/loginRequest",
    "title": "资源登录测试。",
    "version": "1.0.0",
    "name": "getloginRequest",
    "group": "Permission",
    "description": "<p>获取某个用户有权访问的某个资源上的帐号列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/perm/loginRequest?loginName=user1&deviceIp=10.10.0.1&protocol=ssh&account=root",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "userId",
            "description": "<p>用户 ID（优先使用）。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..30",
            "optional": true,
            "field": "loginName",
            "description": "<p>用户登录名。如果未指定 <code>userId</code>，则必须指定<code>loginName</code>。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "deviceId",
            "description": "<p>资源ID（优先使用）。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "deviceIp",
            "description": "<p>资源IP地址。如果未指定 <code>deviceId</code>，则必须指定<code>deviceIp</code>。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..16",
            "optional": true,
            "field": "protocol",
            "description": "<p>访问的服务。服务信息可选以下值(单选):ssh,telnet,rdp,vnc,xdmcp,xfwd。 不指定则忽略服务信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..16",
            "optional": false,
            "field": "account",
            "description": "<p>访问客户端IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..16",
            "optional": false,
            "field": "clientIp",
            "description": "<p>访问客户端IP。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/PermissionController.java",
    "groupTitle": "Permission",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/perm/loginRequest"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/changeplan/navAdd",
    "title": "保存预览信息筛选快捷方式",
    "version": "1.0.0",
    "name": "PostChangePlanNav",
    "group": "SecretChangePlan",
    "description": "<p>新增一个筛选快捷方式(最多只能保存8个筛选快捷方式)。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>快捷方式的名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "filters",
            "description": "<p>快捷方式的过滤条件集合，filters集合中的元素为filter对象。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>filters中的元素，表示一个过滤条件。一个完整的过滤条件由三个属性拼装组成， 例子：{attr: &quot;role.id&quot;, oper: &quot;In&quot;, value: &quot;3&quot;}，组成的过滤条件为“role.idIn=3”， 表示只查询用户的角色为“id=3”的所有用户。当集合中有多个过滤条件时，用“and”连接。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.attr",
            "description": "<p>过滤条件的过滤字段。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.oper",
            "description": "<p>过滤条件的过滤关键字。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.value",
            "description": "<p>过滤条件的过滤值，不能为null。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    name: \"General Unix\",\n    filters: [{attr: \"sysType.name\", oper: \"Is\", value: \"General Unix\"}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/sc/web/api/SecretChangePlanV2Controller.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/changeplan/navAdd"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/desktopDetail/sessid/:id",
    "title": "获取符合条件的桌面会话日志明细列表",
    "version": "1.0.0",
    "name": "GetDesktopDetail",
    "group": "SessionAudit",
    "description": "<p>查询并返回符合条件的桌面会话日志列表。 下面的查询参数中，字符串类型（String）可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”， “NotLike”，“Equals”，数字类型（Number）可以使用 “Before”，“After”，“GreaterThan”， “GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， 通用：“In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/desktopDetail/sessid/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "action",
            "description": "<p>执行动作</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "exec_ts",
            "description": "<p>命令执行时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>文本字段，根据type不同显示不同的内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>浏览器请求的URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "req_body",
            "description": "<p>浏览器请求的消息体</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resp_body",
            "description": "<p>浏览器响应的消息体</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "req_headers",
            "description": "<p>浏览器请求的消息头</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resp_headers",
            "description": "<p>浏览器响应的消息头</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.id",
            "description": "<p>记录的 ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.action",
            "description": "<p>执行的动作： 4标题 5CMD 6打开文件 7复制文本 8复制文件 9编辑的文本 10菜单项 11 下拉项 12 树项 1010鼠标左键单击菜单项 1011鼠标左键单击下拉项 1110鼠标右键单击菜单项 1111鼠标右键单击下拉项 1112右键单击树项 1113右键单击按钮 1114右键单击窗口</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.sess_id",
            "description": "<p>对应的会话ID。可以使用</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.exec_ts",
            "description": "<p>记录生成的时间，为1970年1月1日00:00:00+0至今的毫秒数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.pid",
            "description": "<p>发生事件的PID。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.win_sess_id",
            "description": "<p>登录用户的SESSION ID，由Windows分配</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.text",
            "description": "<p>文本字段，根据type不同显示不同的内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.result_text",
            "description": "<p>text字段对应的回显或引发的信息内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.rect",
            "description": "<p>事件发生位置</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.url",
            "description": "<p>浏览器请求的 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.req_body",
            "description": "<p>浏览器请求的消息体</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.resp_body",
            "description": "<p>浏览器回应的消息体</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.req_headers",
            "description": "<p>请求的消息头</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.resp_headers",
            "description": "<p>回应的消息头</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.pic_path",
            "description": "<p>对应记录的截图</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"totalElements\": 100,\n \"totalPages\": 10,\n \"number\": 0,\n \"size\": 10,\n \"first\": true,\n \"last\": false,\n \"numberOfElements\": 10,\n \"content\": [\n     {\n         \"id\" : \"23osd8\",\n         \"sess_id\" : \"fa23143512323dd8\",\n         \"exec_ts\" : 154736565931,\n         \"action\" : 4,\n         \"pid\" : 5208,\n         \"text\" : \"Microsoft Edge\"\n         \"win_sess_id\":6\n     },\n     ......\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/DesktopLogDetailController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/desktopDetail/sessid/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesslog/loginUserRecentSess",
    "title": "查询当前登录用户的最近访问会话信息。",
    "version": "1.0.0",
    "name": "GetLoginUserRecentSesss",
    "group": "SessionAudit",
    "description": "<p>查询当前登录用户的最近访问会话信息。默认返回前20.</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sesslog/loginUserRecentSess?size=7",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "t_ip",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "t_name",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prot",
            "description": "<p>协议名，ssh/telnet/sftp/rdp等。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>帐号名。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n {\"account\":\"744rzveu3di\",\"t_ip\":\"vcjf7uv7vi\",\"t_name\":\"r8nfg0vygb9\",\"prot\":\"3fn3xiggb9\"},\n {\"account\":\"prte7rmgqfr\",\"t_ip\":\"hbfxpc766r\",\"t_name\":\"wgq35oskyb9\",\"prot\":\"zjwra3sdcxr\"},\n {\"account\":\"pgiwwswnrk9\",\"t_ip\":\"axmk6b6gvi\",\"t_name\":\"aa7fjhh0k9\",\"prot\":\"st5cfgh9f6r\"},\n {\"account\":\"e26rwqxgvi\",\"t_ip\":\"9qizz5dygb9\",\"t_name\":\"78t58doyldi\",\"prot\":\"b4114soflxr\"},\n {\"account\":\"uwe20ggb9\",\"t_ip\":\"ohigxkr19k9\",\"t_name\":\"fq5bjyeewmi\",\"prot\":\"3l3l3wpzaor\"},\n {\"account\":\"zxbqhorms4i\",\"t_ip\":\"ddtfhia4i\",\"t_name\":\"u8bwue1xlxr\",\"prot\":\"nzbj517zaor\"},\n {\"account\":\"o1grvji3sor\",\"t_ip\":\"mck01i3sor\",\"t_name\":\"tln4h9nqaor\",\"prot\":\"4kmo8sbrzfr\"}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog/loginUserRecentSess"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesslog/recent/:user",
    "title": "查询指定用户的最近访问会话信息。",
    "version": "1.0.0",
    "name": "GetRecent",
    "group": "SessionAudit",
    "description": "<p>查询当前登录用户的最近访问会话信息。默认返回前20.</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sesslog/loginUserRecentSess?user=admin&size=7",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>用户登录名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "t_ip",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "t_name",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prot",
            "description": "<p>协议名，ssh/telnet/sftp/rdp等。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>帐号名。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n {\"account\":\"744rzveu3di\",\"t_ip\":\"vcjf7uv7vi\",\"t_name\":\"r8nfg0vygb9\",\"prot\":\"3fn3xiggb9\"},\n {\"account\":\"prte7rmgqfr\",\"t_ip\":\"hbfxpc766r\",\"t_name\":\"wgq35oskyb9\",\"prot\":\"zjwra3sdcxr\"},\n {\"account\":\"pgiwwswnrk9\",\"t_ip\":\"axmk6b6gvi\",\"t_name\":\"aa7fjhh0k9\",\"prot\":\"st5cfgh9f6r\"},\n {\"account\":\"e26rwqxgvi\",\"t_ip\":\"9qizz5dygb9\",\"t_name\":\"78t58doyldi\",\"prot\":\"b4114soflxr\"},\n {\"account\":\"uwe20ggb9\",\"t_ip\":\"ohigxkr19k9\",\"t_name\":\"fq5bjyeewmi\",\"prot\":\"3l3l3wpzaor\"},\n {\"account\":\"zxbqhorms4i\",\"t_ip\":\"ddtfhia4i\",\"t_name\":\"u8bwue1xlxr\",\"prot\":\"nzbj517zaor\"},\n {\"account\":\"o1grvji3sor\",\"t_ip\":\"mck01i3sor\",\"t_name\":\"tln4h9nqaor\",\"prot\":\"4kmo8sbrzfr\"}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog/recent/:user"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesslog/:id",
    "title": "获取会话日志信息",
    "version": "1.0.0",
    "name": "GetSesslog",
    "group": "SessionAudit",
    "description": "<p>根据会话日志 ID 查询并返回特定会话日志的信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sesslog/AVT1E36bgXIUK9IjhsYA",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会话日志 ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n account: \"010r3blnmi\"\n auth_id: \"2\"\n begin: 1464392824000\n c_ip: \"8ub6hepzaor\"\n end: 1464403624000\n id: \"AVT1E36bgXIUK9IjhsYA\"\n prot: \"sdy90jxlxr\"\n remark: \"1maw0t138fr\"\n status: 0\n t_ip: \"6bwhxjq0k9\"\n t_name: \"ayjxxi7wrk9\"\n type: \"tui\"\n user: \"admin\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>会话的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>会话类型，tui/gui。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>执行状态，integer型。 对于tui，1：active；2：disconnected；3：killed； 对于gui，0：init；1：prepared；2：open/active；3：closing；4：closed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "begin",
            "description": "<p>开始时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end",
            "description": "<p>结束时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth_id",
            "description": "<p>认证日志ID，关联认证日志信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>认证用户登录名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "c_ip",
            "description": "<p>客户端 IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "t_ip",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "t_name",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "protocol",
            "description": "<p>协议名，ssh/telnet/sftp/rdp等。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>帐号名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sysType",
            "description": "<p>设备类型。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "tuiDetails",
            "description": "<p>字符会话明细。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.encoding",
            "description": "<p>&quot;encoding&quot; : &quot;GB18030&quot;,编码方式,GB18030/ISO-8859-1/US-ASCII/UTF-8/IBM1388</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.runas",
            "description": "<p>&quot;runas&quot; : &quot;test&quot;, 切换帐号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.cmds_exec",
            "description": "<p>&quot;cmds_exec&quot; : 0, 命令执行总次数（包括成功和Deny）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.cmds_deny",
            "description": "<p>&quot;cmds_deny&quot; : 0, 命令被deny的次数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "guiDetails",
            "description": "<p>图形会话明细。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "guiDetails.gid",
            "description": "<p>&quot;gid&quot; : null, 同一个vnc server的多个session共享一个gid，缺省为null</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "guiDetails.secret",
            "description": "<p>&quot;secret&quot; : &quot;***&quot;, 10位char密码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "guiDetails.vnc_ipaddr",
            "description": "<p>&quot;vnc_ipaddr&quot; : &quot;127.0.0.1&quot;, VNC服务器IP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "guiDetails.vnc_port",
            "description": "<p>&quot;vnc_port&quot; : 5001, VNC端口</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_width",
            "description": "<p>&quot;res_width&quot; : 800, 远程桌面连接“显示”Tab中屏幕宽</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_height",
            "description": "<p>&quot;res_height&quot; : 600, 远程桌面连接“显示”Tab中屏幕高</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_bpp",
            "description": "<p>&quot;res_bpp&quot; : , 远程桌面连接“显示”Tab中颜色深度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "guiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "guiDetails.options",
            "description": "<p>&quot;options&quot; : &quot;&quot;, 配置信息，shrdp1 xvncrec seamless等</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "guiDetails.filename",
            "description": "<p>&quot;filename&quot; : &quot;&quot;, 日志文件名</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "用户不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesslog/desktop",
    "title": "获取符合条件的桌面会话日志列表",
    "version": "1.0.0",
    "name": "GetSesslogDesktops",
    "group": "SessionAudit",
    "description": "<p>查询并返回符合条件的图形会话日志列表。 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sesslog/desktop?type=desktop",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>会话类型。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "begin",
            "description": "<p>开始时间(时间戳)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "end",
            "description": "<p>结束时间(时间戳)。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>认证用户登录名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "clientIp",
            "description": "<p>客户端IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "targetIp",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "targetName",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "protocol",
            "description": "<p>协议名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "account",
            "description": "<p>账号名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "desktopDetails",
            "description": "<p>桌面会话明细。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desktopDetails.parent_sessid",
            "description": "<p>&quot;parent_sessid&quot; : &quot;ASDFA542ASDFASDF&quot;, 父级会话的会话id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desktopDetails.type",
            "description": "<p>&quot;type&quot; : &quot;browser&quot;, 会话类型包括browser/mstsc/sql</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.id",
            "description": "<p>会话的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.type",
            "description": "<p>会话类型，tui/gui。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.status",
            "description": "<p>执行状态，integer型。 对于tui/desktop，1：active；2：disconnected；3：killed； 对于gui，0：init；1：prepared；2：open/active；3：closing；4：closed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.begin",
            "description": "<p>开始时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.end",
            "description": "<p>结束时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.user",
            "description": "<p>认证用户登录名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.c_ip",
            "description": "<p>客户端 IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.t_ip",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.t_name",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.protocol",
            "description": "<p>协议名，ssh/telnet/sftp/rdp等。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.account",
            "description": "<p>帐号名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.desktopDetails.parent_sessid",
            "description": "<p>&quot;parent_sessid&quot; : &quot;ASDFA542ASDFASDF&quot;, 父级会话的会话id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.desktopDetails.type",
            "description": "<p>&quot;type&quot; : &quot;browser&quot;, 会话类型包括browser/mstsc/sql</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.desktopDetails.app_type",
            "description": "<p>&quot;app_type&quot; : &quot;plsqldeveloper&quot;, 打开的应用类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "content.desktopDetails.width",
            "description": "<p>&quot;width&quot; : 800, 桌面的宽度</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "content.desktopDetails.height",
            "description": "<p>&quot;height&quot; : 600, 桌面的高度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.desktopDetails.login_type",
            "description": "<p>&quot;login_type&quot; : &quot;local&quot;, 登录方式</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"totalElements\": 100,\n \"totalPages\": 10,\n \"number\": 0,\n \"size\": 10,\n \"first\": true,\n \"last\": false,\n \"numberOfElements\": 10,\n \"content\": [\n     {\n         account: \"010r3blnmi\"\n         begin: 1464392824000\n         c_ip: \"10.10.66.38\"\n         end: 1464403624000\n         id: \"AVT1E36bgXIUK9IjhsYA\"\n         name:\" thisisaname\"\n         prot: \"ssh\"\n         status: 1\n         t_ip: \"10.10.66.38\"\n         t_name: \"ayjxxi7wrk9\"\n         time : 512761\n         type: \"desktop\"\n         user: \"admin\"\n         desktop_sess:\n            {\n                width:640\n                height:480\n                login_type:\"local\"\n                type:\"windows\"\n                parent_sessid:\"AVT1E36bgXIUK9IsYASDF\"\n                ....\n            }\n     }\n     ......\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog/desktop"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesslog/gui",
    "title": "获取符合条件的图形会话日志列表",
    "version": "1.0.0",
    "name": "GetSesslogGuis",
    "group": "SessionAudit",
    "description": "<p>查询并返回符合条件的图形会话日志列表。 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sesslog?type=tui",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>会话类型。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>执行状态。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "begin",
            "description": "<p>开始时间(时间戳)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "end",
            "description": "<p>结束时间(时间戳)。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authLogId",
            "description": "<p>认证日志ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>认证用户登录名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "clientIp",
            "description": "<p>客户端IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "targetIp",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "targetName",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "protocol",
            "description": "<p>协议名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "account",
            "description": "<p>账号名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "guiDetails",
            "description": "<p>图形会话明细。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.gid",
            "description": "<p>&quot;gid&quot; : null, 同一个vnc server的多个session共享一个gid，缺省为null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.secret",
            "description": "<p>&quot;secret&quot; : &quot;***&quot;, 10位char密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.vnc_ipaddr",
            "description": "<p>&quot;vnc_ipaddr&quot; : &quot;127.0.0.1&quot;, VNC服务器IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.vnc_port",
            "description": "<p>&quot;vnc_port&quot; : 5001, VNC端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_width",
            "description": "<p>&quot;res_width&quot; : 800, 远程桌面连接“显示”Tab中屏幕宽</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_height",
            "description": "<p>&quot;res_height&quot; : 600, 远程桌面连接“显示”Tab中屏幕高</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_bpp",
            "description": "<p>&quot;res_bpp&quot; : , 远程桌面连接“显示”Tab中颜色深度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.options",
            "description": "<p>&quot;options&quot; : &quot;&quot;, 配置信息，shrdp1 xvncrec seamless等</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.filename",
            "description": "<p>&quot;filename&quot; : &quot;&quot;, 日志文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.id",
            "description": "<p>会话的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.type",
            "description": "<p>会话类型，tui/gui。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.status",
            "description": "<p>执行状态，integer型。 对于tui，1：active；2：disconnected；3：killed； 对于gui，0：init；1：prepared；2：open/active；3：closing；4：closed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.begin",
            "description": "<p>开始时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.end",
            "description": "<p>结束时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.auth_id",
            "description": "<p>认证日志ID，关联认证日志信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.user",
            "description": "<p>认证用户登录名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.c_ip",
            "description": "<p>客户端 IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.t_ip",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.t_name",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.protocol",
            "description": "<p>协议名，ssh/telnet/sftp/rdp等。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.account",
            "description": "<p>帐号名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.remark",
            "description": "<p>备注信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "content.guiDetails",
            "description": "<p>图形会话明细。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.gid",
            "description": "<p>&quot;gid&quot; : null, 同一个vnc server的多个session共享一个gid，缺省为null</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.secret",
            "description": "<p>&quot;secret&quot; : &quot;***&quot;, 10位char密码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.vnc_ipaddr",
            "description": "<p>&quot;vnc_ipaddr&quot; : &quot;127.0.0.1&quot;, VNC服务器IP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.vnc_port",
            "description": "<p>&quot;vnc_port&quot; : 5001, VNC端口</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.res_width",
            "description": "<p>&quot;res_width&quot; : 800, 远程桌面连接“显示”Tab中屏幕宽</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.res_height",
            "description": "<p>&quot;res_height&quot; : 600, 远程桌面连接“显示”Tab中屏幕高</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.res_bpp",
            "description": "<p>&quot;res_bpp&quot; : , 远程桌面连接“显示”Tab中颜色深度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.options",
            "description": "<p>&quot;options&quot; : &quot;&quot;, 配置信息，shrdp1 xvncrec seamless等</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.filename",
            "description": "<p>&quot;filename&quot; : &quot;&quot;, 日志文件名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"totalElements\": 100,\n \"totalPages\": 10,\n \"number\": 0,\n \"size\": 10,\n \"first\": true,\n \"last\": false,\n \"numberOfElements\": 10,\n \"content\": [\n     {\n         account: \"010r3blnmi\"\n         auth_id: \"2\"\n         begin: 1464392824000\n         c_ip: \"8ub6hepzaor\"\n         end: 1464403624000\n         id: \"AVT1E36bgXIUK9IjhsYA\"\n         prot: \"sdy90jxlxr\"\n         remark: \"1maw0t138fr\"\n         status: 0\n         t_ip: \"6bwhxjq0k9\"\n         t_name: \"ayjxxi7wrk9\"\n         type: \"tui\"\n         user: \"admin\"\n     }\n     ......\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog/gui"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesslog/online",
    "title": "获取符合条件的在线会话日志列表",
    "version": "1.0.0",
    "name": "GetSesslogOnlines",
    "group": "SessionAudit",
    "description": "<p>查询并返回符合条件的会话日志列表。 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sesslog/online?type=tui",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>会话类型。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>执行状态。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "begin",
            "description": "<p>开始时间(时间戳)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "end",
            "description": "<p>结束时间(时间戳)。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authLogId",
            "description": "<p>认证日志ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>认证用户登录名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "clientIp",
            "description": "<p>客户端IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "targetIp",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "targetName",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "protocol",
            "description": "<p>协议名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "account",
            "description": "<p>账号名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "tuiDetails",
            "description": "<p>字符会话明细。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.encoding",
            "description": "<p>&quot;encoding&quot; : &quot;GB18030&quot;, 编码方式， GB18030/ISO-8859-1/US-ASCII/UTF-8/IBM1388</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.runas",
            "description": "<p>&quot;runas&quot; : &quot;test&quot;, 切换帐号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.cmds_exec",
            "description": "<p>&quot;cmds_exec&quot; : 0, 命令执行总次数（包括成功和Deny）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.cmds_deny",
            "description": "<p>&quot;cmds_deny&quot; : 0, 命令被deny的次数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "guiDetails",
            "description": "<p>图形会话明细。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.gid",
            "description": "<p>&quot;gid&quot; : null, 同一个vnc server的多个session共享一个gid，缺省为null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.secret",
            "description": "<p>&quot;secret&quot; : &quot;***&quot;, 10位char密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.vnc_ipaddr",
            "description": "<p>&quot;vnc_ipaddr&quot; : &quot;127.0.0.1&quot;, VNC服务器IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.vnc_port",
            "description": "<p>&quot;vnc_port&quot; : 5001, VNC端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_width",
            "description": "<p>&quot;res_width&quot; : 800, 远程桌面连接“显示”Tab中屏幕宽</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_height",
            "description": "<p>&quot;res_height&quot; : 600, 远程桌面连接“显示”Tab中屏幕高</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_bpp",
            "description": "<p>&quot;res_bpp&quot; : , 远程桌面连接“显示”Tab中颜色深度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.options",
            "description": "<p>&quot;options&quot; : &quot;&quot;, 配置信息，shrdp1 xvncrec seamless等</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.filename",
            "description": "<p>&quot;filename&quot; : &quot;&quot;, 日志文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.id",
            "description": "<p>会话的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.type",
            "description": "<p>会话类型，tui/gui。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.status",
            "description": "<p>执行状态，integer型。 对于tui，1：active；2：disconnected；3：killed； 对于gui，0：init；1：prepared；2：open/active；3：closing；4：closed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.begin",
            "description": "<p>开始时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.end",
            "description": "<p>结束时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.auth_id",
            "description": "<p>认证日志ID，关联认证日志信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.user",
            "description": "<p>认证用户登录名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.c_ip",
            "description": "<p>客户端 IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.t_ip",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.t_name",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.protocol",
            "description": "<p>协议名，ssh/telnet/sftp/rdp等。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.account",
            "description": "<p>帐号名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.remark",
            "description": "<p>备注信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "content.tuiDetails",
            "description": "<p>字符会话明细。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tuiDetails.encoding",
            "description": "<p>&quot;encoding&quot; : &quot;GB18030&quot;,编码方式, GB18030/ISO-8859-1/US-ASCII/UTF-8/IBM1388</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tuiDetails.runas",
            "description": "<p>&quot;runas&quot; : &quot;test&quot;, 切换帐号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tuiDetails.cmds_exec",
            "description": "<p>&quot;cmds_exec&quot; : 0, 命令执行总次数（包括成功和Deny）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tuiDetails.cmds_deny",
            "description": "<p>&quot;cmds_deny&quot; : 0, 命令被deny的次数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tuiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "content.guiDetails",
            "description": "<p>图形会话明细。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.gid",
            "description": "<p>&quot;gid&quot; : null, 同一个vnc server的多个session共享一个gid，缺省为null</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.secret",
            "description": "<p>&quot;secret&quot; : &quot;***&quot;, 10位char密码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.vnc_ipaddr",
            "description": "<p>&quot;vnc_ipaddr&quot; : &quot;127.0.0.1&quot;, VNC服务器IP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.vnc_port",
            "description": "<p>&quot;vnc_port&quot; : 5001, VNC端口</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.res_width",
            "description": "<p>&quot;res_width&quot; : 800, 远程桌面连接“显示”Tab中屏幕宽</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.res_height",
            "description": "<p>&quot;res_height&quot; : 600, 远程桌面连接“显示”Tab中屏幕高</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.res_bpp",
            "description": "<p>&quot;res_bpp&quot; : , 远程桌面连接“显示”Tab中颜色深度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.options",
            "description": "<p>&quot;options&quot; : &quot;&quot;, 配置信息，shrdp1 xvncrec seamless等</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.filename",
            "description": "<p>&quot;filename&quot; : &quot;&quot;, 日志文件名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.desktopDetails.parent_sessid",
            "description": "<p>&quot;parent_sessid&quot; : &quot;ASDFA542ASDFASDF&quot;, 父级会话的会话id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.desktopDetails.type",
            "description": "<p>&quot;type&quot; : &quot;browser&quot;, 会话类型包括browser/mstsc/sql</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.desktopDetails.app_type",
            "description": "<p>&quot;app_type&quot; : &quot;plsqldeveloper&quot;, 打开的应用类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "content.desktopDetails.width",
            "description": "<p>&quot;width&quot; : 800, 桌面的宽度</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "content.desktopDetails.height",
            "description": "<p>&quot;height&quot; : 600, 桌面的高度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.desktopDetails.login_type",
            "description": "<p>&quot;login_type&quot; : &quot;local&quot;, 登录方式</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"totalElements\": 100,\n \"totalPages\": 10,\n \"number\": 0,\n \"size\": 10,\n \"first\": true,\n \"last\": false,\n \"numberOfElements\": 10,\n \"content\": [\n     {\n         \"id\": \"24fe5c13ec744525baf735ddec9d3a76\",\n         \"type\": \"tui\",\n         \"status\": 2,\n         \"begin\": 1466749317679,\n         \"end\": 1466753718484,\n         \"user\": \"admin\",\n         \"account\": \"root\",\n         \"state\": \"end\",\n         \"time\": 4400805,\n         \"auth_id\": \"AVWBEnDAKTgWbcIUxwaz\",\n         \"c_ip\": \"10.10.1.17\",\n         \"t_ip\": \"10.10.2.17\",\n         \"t_name\": \"10.10.2.17\",\n         \"prot\": \"ssh\",\n         \"tui_sess\": {\n             \"runas\": null,\n             \"filename\": \"/var/shtermdata/sesslog/2016/06/24/24fe5c13ec744525baf735ddec9d3a76.pb\",\n             \"cmds_exec\": 0,\n             \"encoding\": \"UTF-8\",\n             \"cmds_deny\": 0\n         }\n     }\n     ......\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog/online"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesslog/tui",
    "title": "获取符合条件的字符会话日志列表",
    "version": "1.0.0",
    "name": "GetSesslogTuis",
    "group": "SessionAudit",
    "description": "<p>查询并返回符合条件的字符会话日志列表。 下面的查询参数中，可增加后缀 后缀一：“Is”，“Contains”，“Like”，“NotLike”，“Equals”，“Null”，“NotNull”，“In”、“NotIn”。。 后缀二：“Before”，“After”，“Between”。 说明：“In”、“NotIn”，“Between” 使用逗号“,”分隔多个条件。In例子：xxxIn=1，2，3，Between例子： xxxBetween=111,2222</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sesslog/tui",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>查询详细信息key,只能为：all,list,cmd,output。不能增加后缀</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyWords",
            "description": "<p>查询详细信息的value值。 支持正则表达式。不能增加后缀</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>会话类型。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>执行状态。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "begin",
            "description": "<p>开始时间(时间戳)。可增加后缀二</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "end",
            "description": "<p>结束时间(时间戳)。可增加后缀二</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authLogId",
            "description": "<p>认证日志ID。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>认证用户登录名。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "clientIp",
            "description": "<p>客户端IP。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "targetIp",
            "description": "<p>目标设备IP。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "targetName",
            "description": "<p>目标设备名。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "protocol",
            "description": "<p>协议名。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "account",
            "description": "<p>账号名。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注信息。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "tuiDetails",
            "description": "<p>字符会话明细。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.encoding",
            "description": "<p>&quot;encoding&quot; : &quot;GB18030&quot;, 编码方式， GB18030/ISO-8859-1/US-ASCII/UTF-8/IBM1388。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.runas",
            "description": "<p>&quot;runas&quot; : &quot;test&quot;, 切换帐号。可增加后缀一</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.cmds_exec",
            "description": "<p>&quot;cmds_exec&quot; : 0, 命令执行总次数（包括成功和Deny），可增加后缀一，二</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.cmds_deny",
            "description": "<p>&quot;cmds_deny&quot; : 0, 命令被deny的次数，可增加后缀一，二</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id，可增加后缀一，二</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "url示例",
          "content": "http://localhost/shterm/api/sesslog/tui?userIs=admin&accountLike=ad",
          "type": "url"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.id",
            "description": "<p>会话的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.type",
            "description": "<p>会话类型，tui/gui。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.status",
            "description": "<p>执行状态，integer型。 对于tui，1：active；2：disconnected；3：killed； 对于gui，0：init；1：prepared；2：open/active；3：closing；4：closed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.begin",
            "description": "<p>开始时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.end",
            "description": "<p>结束时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.time",
            "description": "<p>持续时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.auth_id",
            "description": "<p>认证日志ID，关联认证日志信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.user",
            "description": "<p>认证用户登录名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.c_ip",
            "description": "<p>客户端 IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.t_ip",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.t_name",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.prot",
            "description": "<p>协议名，ssh/telnet/sftp/rdp等。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.account",
            "description": "<p>帐号名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.remark",
            "description": "<p>备注信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "content.tui_sess",
            "description": "<p>字符会话明细。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tui_sess.encoding",
            "description": "<p>&quot;encoding&quot; : &quot;GB18030&quot;,编码方式, GB18030/ISO-8859-1/US-ASCII/UTF-8/IBM1388</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tui_sess.runas",
            "description": "<p>&quot;runas&quot; : &quot;test&quot;, 切换帐号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tui_sess.cmds_exec",
            "description": "<p>&quot;cmds_exec&quot; : 0, 命令执行总次数（包括成功和Deny）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tui_sess.cmds_deny",
            "description": "<p>&quot;cmds_deny&quot; : 0, 命令被deny的次数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tui_sess.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"totalElements\": 100,\n \"totalPages\": 10,\n \"number\": 0,\n \"size\": 10,\n \"first\": true,\n \"last\": false,\n \"numberOfElements\": 10,\n \"content\": [\n     {\n         \"id\": \"24fe5c13ec744525baf735ddec9d3a76\",\n         \"type\": \"tui\",\n         \"status\": 2,\n         \"begin\": 1466749317679,\n         \"end\": 1466753718484,\n         \"user\": \"admin\",\n         \"account\": \"root\",\n         \"state\": \"end\",\n         \"time\": 4400805,\n         \"auth_id\": \"AVWBEnDAKTgWbcIUxwaz\",\n         \"c_ip\": \"10.10.1.17\",\n         \"t_ip\": \"10.10.2.17\",\n         \"t_name\": \"10.10.2.17\",\n         \"prot\": \"ssh\",\n         \"tui_sess\": {\n             \"runas\": null,\n             \"filename\": \"/var/shtermdata/sesslog/2016/06/24/24fe5c13ec744525baf735ddec9d3a76.pb\",\n             \"cmds_exec\": 0,\n             \"encoding\": \"UTF-8\",\n             \"cmds_deny\": 0\n         }\n     }\n     ......\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog/tui"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesslog",
    "title": "获取符合条件的会话日志列表",
    "version": "1.0.0",
    "name": "GetSesslogs",
    "group": "SessionAudit",
    "description": "<p>查询并返回符合条件的会话日志列表。 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sesslog?type=tui",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>会话类型。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>执行状态。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "begin",
            "description": "<p>开始时间(时间戳)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "end",
            "description": "<p>结束时间(时间戳)。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authLogId",
            "description": "<p>认证日志ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>认证用户登录名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "clientIp",
            "description": "<p>客户端IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "targetIp",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "targetName",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "protocol",
            "description": "<p>协议名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "account",
            "description": "<p>账号名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "tuiDetails",
            "description": "<p>字符会话明细。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.encoding",
            "description": "<p>&quot;encoding&quot; : &quot;GB18030&quot;, 编码方式， GB18030/ISO-8859-1/US-ASCII/UTF-8/IBM1388</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.runas",
            "description": "<p>&quot;runas&quot; : &quot;test&quot;, 切换帐号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.cmds_exec",
            "description": "<p>&quot;cmds_exec&quot; : 0, 命令执行总次数（包括成功和Deny）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.cmds_deny",
            "description": "<p>&quot;cmds_deny&quot; : 0, 命令被deny的次数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tuiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "guiDetails",
            "description": "<p>图形会话明细。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.gid",
            "description": "<p>&quot;gid&quot; : null, 同一个vnc server的多个session共享一个gid，缺省为null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.secret",
            "description": "<p>&quot;secret&quot; : &quot;***&quot;, 10位char密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.vnc_ipaddr",
            "description": "<p>&quot;vnc_ipaddr&quot; : &quot;127.0.0.1&quot;, VNC服务器IP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.vnc_port",
            "description": "<p>&quot;vnc_port&quot; : 5001, VNC端口</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_width",
            "description": "<p>&quot;res_width&quot; : 800, 远程桌面连接“显示”Tab中屏幕宽</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_height",
            "description": "<p>&quot;res_height&quot; : 600, 远程桌面连接“显示”Tab中屏幕高</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.res_bpp",
            "description": "<p>&quot;res_bpp&quot; : , 远程桌面连接“显示”Tab中颜色深度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.options",
            "description": "<p>&quot;options&quot; : &quot;&quot;, 配置信息，shrdp1 xvncrec seamless等</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "guiDetails.filename",
            "description": "<p>&quot;filename&quot; : &quot;&quot;, 日志文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.id",
            "description": "<p>会话的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.type",
            "description": "<p>会话类型，tui/gui。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.status",
            "description": "<p>执行状态，integer型。 对于tui，1：active；2：disconnected；3：killed； 对于gui，0：init；1：prepared；2：open/active；3：closing；4：closed</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.begin",
            "description": "<p>开始时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.end",
            "description": "<p>结束时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.auth_id",
            "description": "<p>认证日志ID，关联认证日志信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.user",
            "description": "<p>认证用户登录名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.c_ip",
            "description": "<p>客户端 IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.t_ip",
            "description": "<p>目标设备IP。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.t_name",
            "description": "<p>目标设备名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.protocol",
            "description": "<p>协议名，ssh/telnet/sftp/rdp等。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.account",
            "description": "<p>帐号名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.remark",
            "description": "<p>备注信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "content.tuiDetails",
            "description": "<p>字符会话明细。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tuiDetails.encoding",
            "description": "<p>&quot;encoding&quot; : &quot;GB18030&quot;,编码方式, GB18030/ISO-8859-1/US-ASCII/UTF-8/IBM1388</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tuiDetails.runas",
            "description": "<p>&quot;runas&quot; : &quot;test&quot;, 切换帐号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tuiDetails.cmds_exec",
            "description": "<p>&quot;cmds_exec&quot; : 0, 命令执行总次数（包括成功和Deny）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tuiDetails.cmds_deny",
            "description": "<p>&quot;cmds_deny&quot; : 0, 命令被deny的次数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.tuiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "content.guiDetails",
            "description": "<p>图形会话明细。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.gid",
            "description": "<p>&quot;gid&quot; : null, 同一个vnc server的多个session共享一个gid，缺省为null</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.secret",
            "description": "<p>&quot;secret&quot; : &quot;***&quot;, 10位char密码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.vnc_ipaddr",
            "description": "<p>&quot;vnc_ipaddr&quot; : &quot;127.0.0.1&quot;, VNC服务器IP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.vnc_port",
            "description": "<p>&quot;vnc_port&quot; : 5001, VNC端口</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.res_width",
            "description": "<p>&quot;res_width&quot; : 800, 远程桌面连接“显示”Tab中屏幕宽</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.res_height",
            "description": "<p>&quot;res_height&quot; : 600, 远程桌面连接“显示”Tab中屏幕高</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.res_bpp",
            "description": "<p>&quot;res_bpp&quot; : , 远程桌面连接“显示”Tab中颜色深度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.websid",
            "description": "<p>&quot;websid&quot; : &quot;***&quot;, web session id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.options",
            "description": "<p>&quot;options&quot; : &quot;&quot;, 配置信息，shrdp1 xvncrec seamless等</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "content.guiDetails.filename",
            "description": "<p>&quot;filename&quot; : &quot;&quot;, 日志文件名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"totalElements\": 100,\n \"totalPages\": 10,\n \"number\": 0,\n \"size\": 10,\n \"first\": true,\n \"last\": false,\n \"numberOfElements\": 10,\n \"content\": [\n     {\n         account: \"010r3blnmi\"\n         auth_id: \"2\"\n         begin: 1464392824000\n         c_ip: \"8ub6hepzaor\"\n         end: 1464403624000\n         id: \"AVT1E36bgXIUK9IjhsYA\"\n         prot: \"sdy90jxlxr\"\n         remark: \"1maw0t138fr\"\n         status: 0\n         t_ip: \"6bwhxjq0k9\"\n         t_name: \"ayjxxi7wrk9\"\n         type: \"tui\"\n         user: \"admin\"\n     }\n     ......\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesslog/today",
    "title": "查询今天的实时会话数",
    "version": "1.0.0",
    "name": "GetToday",
    "group": "SessionAudit",
    "description": "<p>查询今天的实时会话数</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sesslog/today",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "null",
            "description": "<p>不需要属性。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>会话发生/结束的时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tuiCount",
            "description": "<p>当前字符会话总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "guiCount",
            "description": "<p>当前图形会话总数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n {\"guiCount\":1,\"tuiCount\":0,\"date\":\"2016-06-04 01:08:05\"},\n {\"guiCount\":1,\"tuiCount\":1,\"date\":\"2016-06-04 06:08:05\"},\n {\"guiCount\":1,\"tuiCount\":2,\"date\":\"2016-06-04 06:46:05\"},\n {\"guiCount\":2,\"tuiCount\":2,\"date\":\"2016-06-04 07:58:05\"},\n {\"guiCount\":3,\"tuiCount\":2,\"date\":\"2016-06-04 08:23:05\"},\n {\"guiCount\":4,\"tuiCount\":2,\"date\":\"2016-06-04 08:58:05\"},\n {\"guiCount\":3,\"tuiCount\":1,\"date\":\"2016-06-04 09:08:05\"},\n {\"guiCount\":4,\"tuiCount\":1,\"date\":\"2016-06-04 11:23:05\"},\n {\"guiCount\":3,\"tuiCount\":1,\"date\":\"2016-06-04 12:23:05\"},\n {\"guiCount\":2,\"tuiCount\":1,\"date\":\"2016-06-04 12:58:05\"},\n {\"guiCount\":1,\"tuiCount\":1,\"date\":\"2016-06-04 13:23:05\"},\n {\"guiCount\":1,\"tuiCount\":0,\"date\":\"2016-06-04 15:46:05\"},\n {\"guiCount\":0,\"tuiCount\":0,\"date\":\"2016-06-04 15:58:05\"}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog/today"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesslog/topDev",
    "title": "查询一周活跃设备Top",
    "version": "1.0.0",
    "name": "GetTopDev",
    "group": "SessionAudit",
    "description": "<p>查询一周活跃设备Top</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sesslog/topDev",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "key",
            "description": "<p>设备名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tui",
            "description": "<p>字符会话数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gui",
            "description": "<p>图形会话数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sum",
            "description": "<p>总会话数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n {\"tln4h9nqaor\":{\"tui\":0,\"gui\":1,\"sum\":1}},\n {\"78t58doyldi\":{\"tui\":0,\"gui\":1,\"sum\":1}},\n {\"u8bwue1xlxr\":{\"tui\":0,\"gui\":1,\"sum\":1}},\n {\"aa7fjhh0k9\":{\"tui\":1,\"gui\":0,\"sum\":1}},\n {\"fq5bjyeewmi\":{\"tui\":0,\"gui\":1,\"sum\":1}},\n {\"wgq35oskyb9\":{\"tui\":1,\"gui\":0,\"sum\":1}},\n {\"r8nfg0vygb9\":{\"tui\":0,\"gui\":1,\"sum\":1}}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog/topDev"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesslog/topUser",
    "title": "查询一周活跃用户Top",
    "version": "1.0.0",
    "name": "GetTopUser",
    "group": "SessionAudit",
    "description": "<p>查询一周活跃用户Top</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sesslog/topUser",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "key",
            "description": "<p>用户登录名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tui",
            "description": "<p>字符会话数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gui",
            "description": "<p>图形会话数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sum",
            "description": "<p>总会话数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n {\"admin\" : {\"tui\":2,\"gui\":5,\"sum\":7}}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog/topUser"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/tuidetail/sessid/:id",
    "title": "获取符合条件的会话日志列表",
    "version": "1.0.0",
    "name": "GetTuiDetail",
    "group": "SessionAudit",
    "description": "<p>查询并返回符合条件的会话日志列表。 下面的查询参数中： 字符串类型（String）可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”； 数字类型（Number）支持 “Before”，“After”，“GreaterThan”， “GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”； 通用：“In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。 对多值条件（Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/tuidetail/sessid/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sess_id",
            "description": "<p>对应的会话ID。可以使用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "exec_ts",
            "description": "<p>命令执行时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>执行的命令</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "action",
            "description": "<p>处理结果：1 允许执行，0 禁止执行</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "output",
            "description": "<p>指令执行的输出</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>该指令在回放文件中的偏移量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.sess_id",
            "description": "<p>对应的会话ID。可以使用</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.exec_ts",
            "description": "<p>命令执行时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.cmd",
            "description": "<p>执行的命令。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.action",
            "description": "<p>处理结果：1 允许执行，0 禁止执行</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.output",
            "description": "<p>指令执行的输出</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.location",
            "description": "<p>该指令在回放文件中的偏移量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"totalElements\": 100,\n \"totalPages\": 10,\n \"number\": 0,\n \"size\": 10,\n \"first\": true,\n \"last\": false,\n \"numberOfElements\": 10,\n \"content\": [\n     {\n         \"id\" : \"23osd8\",\n         \"sess_id\" : \"fa23143512323dd8\",\n         \"exec_ts\" : 154736565931,\n         \"cmd\" : \"ls -l\",\n         \"action\" : 1,\n         \"output\" : \"\",\n         \"location\" : 1234\n     },\n     ......\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/GuiDetailController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/tuidetail/sessid/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/tuidetail/sessid/:id",
    "title": "获取符合条件的会话日志列表",
    "version": "1.0.0",
    "name": "GetTuiDetail",
    "group": "SessionAudit",
    "description": "<p>查询并返回符合条件的会话日志列表。 下面的查询参数中，字符串类型（String）可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”， “NotLike”，“Equals”，数字类型（Number）可以使用 “Before”，“After”，“GreaterThan”， “GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， 通用：“In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/tuidetail/sessid/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sess_id",
            "description": "<p>对应的会话ID。可以使用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "exec_ts",
            "description": "<p>命令执行时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cmd",
            "description": "<p>执行的命令</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "action",
            "description": "<p>处理结果：1 允许执行，0 禁止执行</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "output",
            "description": "<p>指令执行的输出</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "location",
            "description": "<p>该指令在回放文件中的偏移量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.sess_id",
            "description": "<p>对应的会话ID。可以使用</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.exec_ts",
            "description": "<p>命令执行时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.cmd",
            "description": "<p>执行的命令。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.action",
            "description": "<p>处理结果：1 允许执行，0 禁止执行</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content.output",
            "description": "<p>指令执行的输出</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "content.location",
            "description": "<p>该指令在回放文件中的偏移量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"totalElements\": 100,\n \"totalPages\": 10,\n \"number\": 0,\n \"size\": 10,\n \"first\": true,\n \"last\": false,\n \"numberOfElements\": 10,\n \"content\": [\n     {\n         \"id\" : \"23osd8\",\n         \"sess_id\" : \"fa23143512323dd8\",\n         \"exec_ts\" : 154736565931,\n         \"cmd\" : \"ls -l\",\n         \"action\" : 1,\n         \"output\" : \"\",\n         \"location\" : 1234\n     },\n     ......\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/TuiDetailController.java",
    "groupTitle": "SessionAudit",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/tuidetail/sessid/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/sysParam/:id",
    "title": "删除系统参数",
    "version": "1.0.0",
    "name": "DeleteSysParam",
    "group": "SysParam",
    "description": "<p>根据ID删除指定系统参数。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>系统参数的 ID。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "系统参数不存或已经被删除 409 错误示例",
          "content": "HTTP/1.1 409 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/system/web/api/SysParamController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sysParam/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/sysParam/key/:key",
    "title": "获取系统参数信息",
    "version": "1.0.0",
    "name": "GetSysParam",
    "group": "SysParam",
    "description": "<p>根据系统参数的key查询并返回特定系统参数的信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sysParam/key/printer",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>系统参数的 key。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>系统参数的的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>系统参数名。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>系统参数详细信息，每一个系统参数结构都不一样。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>参数描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\" : 2,\n    \"key\" : \"printer\",\n    \"value\" : {\n        \"one\" : \"10.10.10.10\",\n        \"two\" : \"10.10.10.10.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "系统参数不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/system/web/api/SysParamController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sysParam/key/:key"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sysParam",
    "title": "获取符合条件的系统参数列表",
    "version": "1.0.0",
    "name": "GetSysParam",
    "group": "SysParam",
    "description": "<p>查询并返回符合条件的系统参数列表。 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sysParam?keyIs=printer",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>参数唯一标识。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..32",
            "optional": false,
            "field": "key",
            "description": "<p>参数名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "value",
            "description": "<p>参数值,不同参数参数值结构不同。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..512",
            "optional": true,
            "field": "description",
            "description": "<p>系统参数描述。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。 例如：sort=key&amp;sort=value,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>参数唯一标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>参数名。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "value",
            "description": "<p>参数值,不同参数参数值结构不同。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>参数描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      id: 2\n      key: \"printer\"\n      value: {\n         one: \"10.10.10.10\",\n         two: \"10.10.10.10.\"\n      }\n  },\n  {\n      id: 7\n      key: \"fileServer\"\n      value: {\n          one: {\n              address: \"198.15.1.2\"\n              coding: \"d\"\n              password: \"admin\"\n              port: 8080\n              protocol: \"ftp\"\n              subdirectory: \"d\"\n              username: \"admin\"\n              workingDirectory: \"d\"\n              onePassword: \"admin\"\n          },\n          two: {\n              address: \"2.2.2.2\"\n              coding: \"dd\"\n              password: \"63666\"\n              port: 4855\n              protocol: \"http\"\n              subdirectory: \"dd\"\n              username: \"ddd\"\n              workingDirectory: \"dd\"\n              twoPassword: \"dd\"\n          }\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/system/web/api/SysParamController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sysParam"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sysParam/:id",
    "title": "获取系统参数信息",
    "version": "1.0.0",
    "name": "GetSysParam",
    "group": "SysParam",
    "description": "<p>根据系统参数的 ID 查询并返回特定系统参数的信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/sysParam/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>系统参数的 ID。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>系统参数的的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>系统参数名。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>系统参数详细信息，每一个系统参数结构都不一样。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>参数描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n    {\n        \"id\" : 2,\n        \"key\" : \"printer\",\n        \"value\" : {\n            \"one\" : \"10.10.10.10\",\n            \"two\" : \"10.10.10.10.\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "系统参数不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/system/web/api/SysParamController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sysParam/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/sysParam",
    "title": "增加新的帐号管理的定时任务",
    "version": "1.0.0",
    "name": "PostSysParam",
    "group": "SysParam",
    "description": "<p>创建一个新的系统参数。</p>",
    "success": {
      "fields": {
        "Response 201": [
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>系统参数ID。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>系统参数名。</p>"
          },
          {
            "group": "Response 201",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>系统参数值。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>系统参数描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": 1,\n    \"key\": \"printer\",\n    \"value\" : {\n        \"one\" : \"10.10.10.10\",\n        \"two\" : \"10.10.10.10.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/system/web/api/SysParamController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sysParam"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..32",
            "optional": false,
            "field": "key",
            "description": "<p>系统参数名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>系统参数值。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.mailServer",
            "description": "<p>key为邮件服务器mailServer，则包括： 服务器 host；发件人地址 senderMail；发件人名称 sender；安全连接 security（true/false）； 身份验证 auth（true/false）；验证用户名 authName，验证密码 authPwd，启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.fileServerOne",
            "description": "<p>同fileServerTwo</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.fileServerTwo",
            "description": "<p>key为 文件服务器，则包括： fileServerOne/fileServerTwo。 其子参数包含： 服务器地址address，端口port，用户名username，密码password，工作目录workingDirectory，子目录subdirectory，编码coding。 样例： {&quot;fileServerOne&quot;: {&quot;port&quot;: 22, &quot;coding&quot;: &quot;UTF-8&quot;, &quot;address&quot;: &quot;10.10.1.22&quot;, &quot;password&quot;: &quot;11&quot;, &quot;protocol&quot;: &quot;sftp&quot;, &quot;username&quot;: &quot;11&quot;, &quot;workingDirectory&quot;: &quot;/tmp&quot;}, &quot;fileServerTwo&quot;: {&quot;coding&quot;: &quot;UTF-8&quot;, &quot;protocol&quot;: &quot;none&quot;}}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.smsServer",
            "description": "<p>key为 短信服务器smsServer，则包括： 类型 type（SMSGW）；发送方式 sendType（GET/POST/SOAP），url，api，字符编码 code（GBK/UTF-8）， 启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.wechatServer",
            "description": "<p>key为 微信服务器wechatServer，则参数包含： 作为服务器 serverFlag（true/false），令牌 token，应用ID 为appId，密钥 appSecret，启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.defaultAuthType",
            "description": "<p>key为 缺省认证方式defaultAuthType，则参数包括： authTypeName：认证方式名，关联到 tbl_authtype.auth_name 字段。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.defaultLocale",
            "description": "<p>key为 系统缺省语言defaultLocale，则参数包括： country：ISO 3166 中规定的 2 个字符国家名，如 CN；language：ISO 639 中规定的 2 个字符语言名，如 zh。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.shtermIp",
            "description": "<p>key为 系统IP配置shtermIp，则参数包含： ifInfo网口，type类型(static/dhcp)，ip，掩码mask，网关gateway，dns1，dns2。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.shtermTime",
            "description": "<p>key为 系统时间配置shtermTime，则参数包含： type类型(static/ntp)，ntp服务器ntpServer。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.pwdGenerateRule",
            "description": "<p>key为 密码生成规则pwdGenerateRule，则参数包含： length密码长度，minUpperCase最少大写字母个数，minLowerCase最少小写字母个数，minDigit最少数字个数， minSymbol最少特殊字符个数，symbolList特殊字符集合。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.backupCfg",
            "description": "<p>key为 备份配置backupCfg，则参数为“auditData”，其子参数包含： enable(true/false)，time时间，protocol协议(none/ftp/rsync)，ftpAddress/ftpPort/ftpUserName/ftpPwd/ftpWork， rsyncAddress/rsyncUser/rsyncWork。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.cleanCfg",
            "description": "<p>key为 清理配置cleanCfg，则参数包含： 日志清理时间logTime, 日志清理类型logType(0 不清理，1-20，单位为年), 事件清理时间eventsTime, 事件清理类型eventsType(0 不清理，30、60、90，单位为天)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.credential",
            "description": "<p>key为 证书配置credential，则参数包含： 国家C、省份ST、城市L、组织O、单位OU、服务器CN、序列号SN。 例如：{&quot;C&quot;: &quot;1&quot;, &quot;L&quot;: &quot;3&quot;, &quot;O&quot;: &quot;4&quot;, &quot;CN&quot;: &quot;6&quot;, &quot;OU&quot;: &quot;5&quot;, &quot;SN&quot;: &quot;4993878937&quot;, &quot;ST&quot;: &quot;2&quot;}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.tui_sess",
            "description": "<p>key为 字符终端配置tui_sess，则参数包含： 字符终端编码charset(GB18030/ISO-8859-1/US-ASCII/UTF-8/IBM1388)、标题title、全局并发限制globalConcurrentLimit、 单个并发限制singleConcurrentLimit、字符终端登录提示prompt、会话超时退出sessTimeout、 会话访问方式accessType(putty/scrt/xshell)、自动登录超时autoLoginTimeout、输入超时（秒）inputTimeout、 最大持续时间(秒)duration、切断过夜会话，(格式为：时：分，为空为不限)cutSession、 命令输出限制cmdOutputLimit（子属性：行line/M/K/byte）、会话输出限制sessionOutputLimit(子属性：M/K/byte)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.all_sess",
            "description": "<p>key为 全部会话配置all_sess，则参数包含： 备注方式remarkType(0 不填，1 必填，2 可填)，WEB超时时间（分）webTimeout，会话切断策略cut(yes/no)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.gui_sess",
            "description": "<p>key 为 图形会话配置gui_sess，则参数包含： 标题title，键盘记录开关keyboardRecord(yes/no)，访问方式accessType(mstsc/java)，GUI超时guiTimeout， 分辨率resolution（800*600/fullscreen/maximize）,最大持续时间(秒)duration。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..512",
            "optional": true,
            "field": "description",
            "description": "<p>系统参数描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n   \"key\": \"printer\",\n   \"value\": \"User Name\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/sysParam",
    "title": "增加新的系统参数",
    "version": "1.0.0",
    "name": "PostSysParam",
    "group": "SysParam",
    "description": "<p>创建一个新的系统参数。</p>",
    "success": {
      "fields": {
        "Response 201": [
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>系统参数ID。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>系统参数名。</p>"
          },
          {
            "group": "Response 201",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>系统参数值。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>系统参数描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n{\n    \"id\": 1,\n    \"key\": \"printer\",\n    \"value\" : {\n        \"one\" : \"10.10.10.10\",\n        \"two\" : \"10.10.10.10.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/system/web/api/SysParamController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sysParam"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..32",
            "optional": false,
            "field": "key",
            "description": "<p>系统参数名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>系统参数值。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.mailServer",
            "description": "<p>key为邮件服务器mailServer，则包括： 服务器 host；发件人地址 senderMail；发件人名称 sender；安全连接 security（true/false）； 身份验证 auth（true/false）；验证用户名 authName，验证密码 authPwd，启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.fileServerOne",
            "description": "<p>同fileServerTwo</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.fileServerTwo",
            "description": "<p>key为 文件服务器，则包括： fileServerOne/fileServerTwo。 其子参数包含： 服务器地址address，端口port，用户名username，密码password，工作目录workingDirectory，子目录subdirectory，编码coding。 样例： {&quot;fileServerOne&quot;: {&quot;port&quot;: 22, &quot;coding&quot;: &quot;UTF-8&quot;, &quot;address&quot;: &quot;10.10.1.22&quot;, &quot;password&quot;: &quot;11&quot;, &quot;protocol&quot;: &quot;sftp&quot;, &quot;username&quot;: &quot;11&quot;, &quot;workingDirectory&quot;: &quot;/tmp&quot;}, &quot;fileServerTwo&quot;: {&quot;coding&quot;: &quot;UTF-8&quot;, &quot;protocol&quot;: &quot;none&quot;}}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.smsServer",
            "description": "<p>key为 短信服务器smsServer，则包括： 类型 type（SMSGW）；发送方式 sendType（GET/POST/SOAP），url，api，字符编码 code（GBK/UTF-8）， 启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.wechatServer",
            "description": "<p>key为 微信服务器wechatServer，则参数包含： 作为服务器 serverFlag（true/false），令牌 token，应用ID 为appId，密钥 appSecret，启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.defaultAuthType",
            "description": "<p>key为 缺省认证方式defaultAuthType，则参数包括： authTypeName：认证方式名，关联到 tbl_authtype.auth_name 字段。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.defaultLocale",
            "description": "<p>key为 系统缺省语言defaultLocale，则参数包括： country：ISO 3166 中规定的 2 个字符国家名，如 CN；language：ISO 639 中规定的 2 个字符语言名，如 zh。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.shtermIp",
            "description": "<p>key为 系统IP配置shtermIp，则参数包含： ifInfo网口，type类型(static/dhcp)，ip，掩码mask，网关gateway，dns1，dns2。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.shtermTime",
            "description": "<p>key为 系统时间配置shtermTime，则参数包含： type类型(static/ntp)，ntp服务器ntpServer。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.pwdGenerateRule",
            "description": "<p>key为 密码生成规则pwdGenerateRule，则参数包含： length密码长度，minUpperCase最少大写字母个数，minLowerCase最少小写字母个数，minDigit最少数字个数， minSymbol最少特殊字符个数，symbolList特殊字符集合。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.backupCfg",
            "description": "<p>key为 备份配置backupCfg，则参数为“auditData”，其子参数包含： enable(true/false)，time时间，protocol协议(none/ftp/rsync)，ftpAddress/ftpPort/ftpUserName/ftpPwd/ftpWork， rsyncAddress/rsyncUser/rsyncWork。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.cleanCfg",
            "description": "<p>key为 清理配置cleanCfg，则参数包含： 日志清理时间logTime, 日志清理类型logType(0 不清理，1-20，单位为年), 事件清理时间eventsTime, 事件清理类型eventsType(0 不清理，30、60、90，单位为天)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.credential",
            "description": "<p>key为 证书配置credential，则参数包含： 国家C、省份ST、城市L、组织O、单位OU、服务器CN、序列号SN。 例如：{&quot;C&quot;: &quot;1&quot;, &quot;L&quot;: &quot;3&quot;, &quot;O&quot;: &quot;4&quot;, &quot;CN&quot;: &quot;6&quot;, &quot;OU&quot;: &quot;5&quot;, &quot;SN&quot;: &quot;4993878937&quot;, &quot;ST&quot;: &quot;2&quot;}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.tui_sess",
            "description": "<p>key为 字符终端配置tui_sess，则参数包含： 字符终端编码charset(GB18030/ISO-8859-1/US-ASCII/UTF-8/IBM1388)、标题title、全局并发限制globalConcurrentLimit、 单个并发限制singleConcurrentLimit、字符终端登录提示prompt、会话超时退出sessTimeout、 会话访问方式accessType(putty/scrt/xshell)、自动登录超时autoLoginTimeout、输入超时（秒）inputTimeout、 最大持续时间(秒)duration、切断过夜会话，(格式为：时：分，为空为不限)cutSession、 命令输出限制cmdOutputLimit（子属性：行line/M/K/byte）、会话输出限制sessionOutputLimit(子属性：M/K/byte)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.all_sess",
            "description": "<p>key为 全部会话配置all_sess，则参数包含： 备注方式remarkType(0 不填，1 必填，2 可填)，WEB超时时间（分）webTimeout，会话切断策略cut(yes/no)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.gui_sess",
            "description": "<p>key 为 图形会话配置gui_sess，则参数包含： 标题title，键盘记录开关keyboardRecord(yes/no)，访问方式accessType(mstsc/java)，GUI超时guiTimeout， 分辨率resolution（800*600/fullscreen/maximize）,最大持续时间(秒)duration。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..512",
            "optional": true,
            "field": "description",
            "description": "<p>系统参数描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n   \"key\": \"printer\",\n   \"value\": \"User Name\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/sysParam/:id",
    "title": "修改系统参数",
    "version": "1.0.0",
    "name": "PutSysParam",
    "group": "SysParam",
    "description": "<p>修改系统参数的信息，支持修改value。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>系统参数的 ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..32",
            "optional": false,
            "field": "key",
            "description": "<p>系统参数名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>系统参数值。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.mailServer",
            "description": "<p>key为邮件服务器mailServer，则包括： 服务器 host；发件人地址 senderMail；发件人名称 sender；安全连接 security（true/false）； 身份验证 auth（true/false）；验证用户名 authName，验证密码 authPwd，启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.fileServerOne",
            "description": "<p>同fileServerTwo</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.fileServerTwo",
            "description": "<p>key为 文件服务器，则包括： fileServerOne/fileServerTwo。 其子参数包含： 服务器地址address，端口port，用户名username，密码password，工作目录workingDirectory，子目录subdirectory，编码coding。 样例： {&quot;fileServerOne&quot;: {&quot;port&quot;: 22, &quot;coding&quot;: &quot;UTF-8&quot;, &quot;address&quot;: &quot;10.10.1.22&quot;, &quot;password&quot;: &quot;11&quot;, &quot;protocol&quot;: &quot;sftp&quot;, &quot;username&quot;: &quot;11&quot;, &quot;workingDirectory&quot;: &quot;/tmp&quot;}, &quot;fileServerTwo&quot;: {&quot;coding&quot;: &quot;UTF-8&quot;, &quot;protocol&quot;: &quot;none&quot;}}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.smsServer",
            "description": "<p>key为 短信服务器smsServer，则包括： 类型 type（SMSGW）；发送方式 sendType（GET/POST/SOAP），url，api，字符编码 code（GBK/UTF-8）， 启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.wechatServer",
            "description": "<p>key为 微信服务器wechatServer，则参数包含： 作为服务器 serverFlag（true/false），令牌 token，应用ID 为appId，密钥 appSecret，启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.defaultAuthType",
            "description": "<p>key为 缺省认证方式defaultAuthType，则参数包括： authTypeName：认证方式名，关联到 tbl_authtype.auth_name 字段。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.defaultLocale",
            "description": "<p>key为 系统缺省语言defaultLocale，则参数包括： country：ISO 3166 中规定的 2 个字符国家名，如 CN；language：ISO 639 中规定的 2 个字符语言名，如 zh。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.shtermIp",
            "description": "<p>key为 系统IP配置shtermIp，则参数包含： ifInfo网口，type类型(static/dhcp)，ip，掩码mask，网关gateway，dns1，dns2。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.shtermTime",
            "description": "<p>key为 系统时间配置shtermTime，则参数包含： type类型(static/ntp)，ntp服务器ntpServer。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.pwdGenerateRule",
            "description": "<p>key为 密码生成规则pwdGenerateRule，则参数包含： length密码长度，minUpperCase最少大写字母个数，minLowerCase最少小写字母个数，minDigit最少数字个数， minSymbol最少特殊字符个数，symbolList特殊字符集合。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.backupCfg",
            "description": "<p>key为 备份配置backupCfg，则参数为“auditData”，其子参数包含： enable(true/false)，time时间，protocol协议(none/ftp/rsync)，ftpAddress/ftpPort/ftpUserName/ftpPwd/ftpWork， rsyncAddress/rsyncUser/rsyncWork。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.cleanCfg",
            "description": "<p>key为 清理配置cleanCfg，则参数包含： 日志清理时间logTime, 日志清理类型logType(0 不清理，1-20，单位为年), 事件清理时间eventsTime, 事件清理类型eventsType(0 不清理，30、60、90，单位为天)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.credential",
            "description": "<p>key为 证书配置credential，则参数包含： 国家C、省份ST、城市L、组织O、单位OU、服务器CN、序列号SN。 例如：{&quot;C&quot;: &quot;1&quot;, &quot;L&quot;: &quot;3&quot;, &quot;O&quot;: &quot;4&quot;, &quot;CN&quot;: &quot;6&quot;, &quot;OU&quot;: &quot;5&quot;, &quot;SN&quot;: &quot;4993878937&quot;, &quot;ST&quot;: &quot;2&quot;}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.tui_sess",
            "description": "<p>key为 字符终端配置tui_sess，则参数包含： 字符终端编码charset(GB18030/ISO-8859-1/US-ASCII/UTF-8/IBM1388)、标题title、全局并发限制globalConcurrentLimit、 单个并发限制singleConcurrentLimit、字符终端登录提示prompt、会话超时退出sessTimeout、 会话访问方式accessType(putty/scrt/xshell)、自动登录超时autoLoginTimeout、输入超时（秒）inputTimeout、 最大持续时间(秒)duration、切断过夜会话，(格式为：时：分，为空为不限)cutSession、 命令输出限制cmdOutputLimit（子属性：行line/M/K/byte）、会话输出限制sessionOutputLimit(子属性：M/K/byte)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.all_sess",
            "description": "<p>key为 全部会话配置all_sess，则参数包含： 备注方式remarkType(0 不填，1 必填，2 可填)，WEB超时时间（分）webTimeout，会话切断策略cut(yes/no)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.gui_sess",
            "description": "<p>key 为 图形会话配置gui_sess，则参数包含： 标题title，键盘记录开关keyboardRecord(yes/no)，访问方式accessType(mstsc/java)，GUI超时guiTimeout， 分辨率resolution（800*600/fullscreen/maximize）,最大持续时间(秒)duration。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..512",
            "optional": true,
            "field": "description",
            "description": "<p>系统参数描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n   \"key\": \"printer\",\n   \"value\": \"User Name\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "系统参数不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/system/web/api/SysParamController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sysParam/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/sysParam/:id",
    "title": "修改系统参数",
    "version": "1.0.0",
    "name": "PutSysParam",
    "group": "SysParam",
    "description": "<p>修改系统参数的信息，支持修改value。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>系统参数的 ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..32",
            "optional": false,
            "field": "key",
            "description": "<p>系统参数名。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>系统参数值。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.mailServer",
            "description": "<p>key为邮件服务器mailServer，则包括： 服务器 host；发件人地址 senderMail；发件人名称 sender；安全连接 security（true/false）； 身份验证 auth（true/false）；验证用户名 authName，验证密码 authPwd，启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.fileServerOne",
            "description": "<p>同fileServerTwo</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.fileServerTwo",
            "description": "<p>key为 文件服务器，则包括： fileServerOne/fileServerTwo。 其子参数包含： 服务器地址address，端口port，用户名username，密码password，工作目录workingDirectory，子目录subdirectory，编码coding。 样例： {&quot;fileServerOne&quot;: {&quot;port&quot;: 22, &quot;coding&quot;: &quot;UTF-8&quot;, &quot;address&quot;: &quot;10.10.1.22&quot;, &quot;password&quot;: &quot;11&quot;, &quot;protocol&quot;: &quot;sftp&quot;, &quot;username&quot;: &quot;11&quot;, &quot;workingDirectory&quot;: &quot;/tmp&quot;}, &quot;fileServerTwo&quot;: {&quot;coding&quot;: &quot;UTF-8&quot;, &quot;protocol&quot;: &quot;none&quot;}}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.smsServer",
            "description": "<p>key为 短信服务器smsServer，则包括： 类型 type（SMSGW）；发送方式 sendType（GET/POST/SOAP），url，api，字符编码 code（GBK/UTF-8）， 启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.wechatServer",
            "description": "<p>key为 微信服务器wechatServer，则参数包含： 作为服务器 serverFlag（true/false），令牌 token，应用ID 为appId，密钥 appSecret，启用enable(true/false)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.defaultAuthType",
            "description": "<p>key为 缺省认证方式defaultAuthType，则参数包括： authTypeName：认证方式名，关联到 tbl_authtype.auth_name 字段。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.defaultLocale",
            "description": "<p>key为 系统缺省语言defaultLocale，则参数包括： country：ISO 3166 中规定的 2 个字符国家名，如 CN；language：ISO 639 中规定的 2 个字符语言名，如 zh。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.shtermIp",
            "description": "<p>key为 系统IP配置shtermIp，则参数包含： ifInfo网口，type类型(static/dhcp)，ip，掩码mask，网关gateway，dns1，dns2。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.shtermTime",
            "description": "<p>key为 系统时间配置shtermTime，则参数包含： type类型(static/ntp)，ntp服务器ntpServer。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.pwdGenerateRule",
            "description": "<p>key为 密码生成规则pwdGenerateRule，则参数包含： length密码长度，minUpperCase最少大写字母个数，minLowerCase最少小写字母个数，minDigit最少数字个数， minSymbol最少特殊字符个数，symbolList特殊字符集合。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.backupCfg",
            "description": "<p>key为 备份配置backupCfg，则参数为“auditData”，其子参数包含： enable(true/false)，time时间，protocol协议(none/ftp/rsync)，ftpAddress/ftpPort/ftpUserName/ftpPwd/ftpWork， rsyncAddress/rsyncUser/rsyncWork。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.cleanCfg",
            "description": "<p>key为 清理配置cleanCfg，则参数包含： 日志清理时间logTime, 日志清理类型logType(0 不清理，1-20，单位为年), 事件清理时间eventsTime, 事件清理类型eventsType(0 不清理，30、60、90，单位为天)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.credential",
            "description": "<p>key为 证书配置credential，则参数包含： 国家C、省份ST、城市L、组织O、单位OU、服务器CN、序列号SN。 例如：{&quot;C&quot;: &quot;1&quot;, &quot;L&quot;: &quot;3&quot;, &quot;O&quot;: &quot;4&quot;, &quot;CN&quot;: &quot;6&quot;, &quot;OU&quot;: &quot;5&quot;, &quot;SN&quot;: &quot;4993878937&quot;, &quot;ST&quot;: &quot;2&quot;}。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.tui_sess",
            "description": "<p>key为 字符终端配置tui_sess，则参数包含： 字符终端编码charset(GB18030/ISO-8859-1/US-ASCII/UTF-8/IBM1388)、标题title、全局并发限制globalConcurrentLimit、 单个并发限制singleConcurrentLimit、字符终端登录提示prompt、会话超时退出sessTimeout、 会话访问方式accessType(putty/scrt/xshell)、自动登录超时autoLoginTimeout、输入超时（秒）inputTimeout、 最大持续时间(秒)duration、切断过夜会话，(格式为：时：分，为空为不限)cutSession、 命令输出限制cmdOutputLimit（子属性：行line/M/K/byte）、会话输出限制sessionOutputLimit(子属性：M/K/byte)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.all_sess",
            "description": "<p>key为 全部会话配置all_sess，则参数包含： 备注方式remarkType(0 不填，1 必填，2 可填)，WEB超时时间（分）webTimeout，会话切断策略cut(yes/no)。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value.gui_sess",
            "description": "<p>key 为 图形会话配置gui_sess，则参数包含： 标题title，键盘记录开关keyboardRecord(yes/no)，访问方式accessType(mstsc/java)，GUI超时guiTimeout， 分辨率resolution（800*600/fullscreen/maximize）,最大持续时间(秒)duration。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..512",
            "optional": true,
            "field": "description",
            "description": "<p>系统参数描述。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n   \"key\": \"printer\",\n   \"value\": \"User Name\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "系统参数不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/system/web/api/SysParamController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sysParam/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/sysParam/uploadLogo",
    "title": "上传logo图片",
    "version": "1.0.0",
    "name": "UploadLogo",
    "group": "SysParam",
    "description": "<p>上传logo图片至指定文件夹。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Disposition",
            "description": "<p>文件上传表单信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>文件上传方式。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    ------WebKitFormBoundarym01EAUlPIMdahwQ8\n    Content-Disposition: form-data; name=\"files\"; filename=\"aaa.jpg\"\n    Content-Type: image/jpeg\n    ------WebKitFormBoundarym01EAUlPIMdahwQ8--\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>显示用的文件名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "downloadUri",
            "description": "<p>文件下载链接。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "[{\n    \"name\":\"aaa.jpg\",\n    \"downloadUri\":\"/shterm/fileDownload?id=8591199358813127025\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/system/web/api/SysParamController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sysParam/uploadLogo"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/sysParam/uploadLogo",
    "title": "上传改密文件",
    "version": "1.0.0",
    "name": "UploadLogo",
    "group": "SysParam",
    "description": "<p>上传改密文件至临时文件夹。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Disposition",
            "description": "<p>文件上传表单信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>文件上传方式。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n            ------WebKitFormBoundaryfzZvkoY6I21Prvs3\n            Content-Disposition: form-data; name=\"files\"; filename=\"hahaha.txt\"\n            Content-Type: text/plain\n\n\n            ------WebKitFormBoundaryfzZvkoY6I21Prvs3--\n        }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>显示用的文件名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>文件保存在服务器端的实际位置。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "downloadUri",
            "description": "<p>文件下载链接。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "[{\n\"name\":\"hahaha.txt\",\n\"location\":\"upload_410216483157410562.txt\",\n\"downloadUri\":\"/shterm/fileDownload?id=8318408907208454701\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/business/sc/web/api/DefinedSecretChangeController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sysParam/uploadLogo"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/loginUserAccess",
    "title": "获取当前登录用户的访问记录",
    "version": "1.0.0",
    "name": "GetLoginUserAccess",
    "group": "UserAccount",
    "description": "<p>获取当前登录用户的访问记录</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "curl -i http://localhost:8080/shterm/api/user/loginUserAccess",
          "type": "curl"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stamp",
            "description": "<p>访问时间。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "op",
            "description": "<p>访问操作描述。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object",
            "description": "<p>访问对象。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>访问结果。0：成功；1：失败。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"stamp\":1463405878243,\n\"op\":\"修改用户组\",\n\"object\":\"group1\",\n\"result\":\"0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "UserAccount",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/loginUserAccess"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/user/:id",
    "title": "删除用户",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "User",
    "description": "<p>删除特定用户。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户的 ID。不可删除内置的admin用户，不可删除在线用户，不可删除自己和已被删除的用户。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "用户不存在或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/user/deleteUserAcl/:id",
    "title": "删除全局用户登录规则",
    "version": "1.0.0",
    "name": "DeleteUserAcl",
    "group": "User",
    "description": "<p>删除全局用户登录规则</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>全局用户登录规则的ID</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "用户登录规则不存在或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/deleteUserAcl/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/navDelete",
    "title": "批量删除筛选快捷方式",
    "version": "1.0.0",
    "name": "DeleteUserNav",
    "group": "User",
    "description": "<p>根据请求消息体提供的筛选快捷方式名称，批量删除筛选快捷方式。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "names",
            "description": "<p>需要删除的快捷方式名称集合。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息示例",
          "content": "{\n\"names\": [\"全部用户\", \"不活跃\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "快捷方式不存或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone\n{\n[\"全部用户\",\"不活跃\"]\n}",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/navDelete"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/download",
    "title": "获取用户导入模板",
    "version": "1.0.0",
    "name": "DownloadUser",
    "group": "User",
    "description": "<p>用户导入模板下载。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/user/download",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n......",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "模板不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/download"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/sesslog/exportSel",
    "title": "导出日志(选中)",
    "version": "1.0.0",
    "name": "ExportSelectUser",
    "group": "User",
    "description": "<p>导出选中的用户。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/api/user/exportSel?_exportFormat=PDF",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_exportFormat",
            "description": "<p>导出的格式，支持PDF、EXCEL、CSV。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    \"allId\":\"132,133,134\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/log/web/api/SesslogController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesslog/exportSel"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/user/exportSel",
    "title": "导出用户(选中)",
    "version": "1.0.0",
    "name": "ExportSelectUser",
    "group": "User",
    "description": "<p>导出选中的用户。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/api/user/exportSel",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "allId",
            "description": "<p>导出用户的id字符串，不同id之间使用半角逗号隔开。不可包含空白字符。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "PDF",
            "description": "<p>导出的格式，支持PDF、EXCEL、CSV，不区分大小写。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"allId\":\"132,133,134\",\n\"format\":\"PDF\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/exportSel"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/export",
    "title": "导出用户(全部)",
    "version": "1.0.0",
    "name": "ExportUser",
    "group": "User",
    "description": "<p>导出当前过滤条件后的全部用户。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/api/user/export?_exportFormat=PDF\n&sort=lastLoginTime,desc",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_exportFormat",
            "description": "<p>导出的格式，支持PDF、EXCEL、CSV。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。 例如：sort=firstname&amp;sort=lastname,asc，表示先按firstname升序排列,再将当前结果按lastname升序排列； 可排序字段包含&quot;id&quot;, &quot;loginName&quot;, &quot;userName&quot;, &quot;email&quot;,&quot;authType&quot;, &quot;lastLoginTime&quot;, &quot;usergroups&quot;, &quot;state&quot;, &quot;role&quot;, &quot;lastLoginTime&quot;，排序关键字只有asc(升序)与desc(降序)。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "结果不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/export"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/userext/:id",
    "title": "删除扩展信息",
    "version": "1.0.0",
    "name": "DeleteUserExt",
    "group": "UserExt",
    "description": "<p>删除特定扩展信息。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>扩展信息的 ID。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "用户附加信息不存或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserExtController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/userext/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/userext/:id",
    "title": "获取单个用户扩展信息(根据id)",
    "version": "1.0.0",
    "name": "GetUserExtById",
    "group": "UserExt",
    "description": "<p>根据用户id获取单个用户扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/userext/2",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户附加信息 ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n    {\n     \"id\":2,\n     \"name\":\"bbb\",\n     \"type\":2,\n     \"required\":true,\n     \"ldapAttr\":\"ttt\",\n     \"extra\":{\n        \"options\":[\"b1\",\"b2\",\"b3\"]\n      },\n     \"order\":2,\n     \"description\":\"ccc\"\n     }",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>附加信息的id。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>附加信息的名称。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>附加信息的类型。0-字符串，1-数字，2-日期，3-可选值。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "description": "<p>附加信息是否必须：true-必须，false-非必须。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>每种附加信息可能需要特殊配置的内容。 type=0时，length-表示字符串长度；type=1时，min-数字的最小值，max-数字的最大值； type=2时，start-开始日期，end-结束日期；type=3时，options-可选值。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>位置信息。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "用户附加信息不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserExtController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/userext/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/userext/defList",
    "title": "获取用户所有扩展信息",
    "version": "1.0.0",
    "name": "GetUserExtDefList",
    "group": "UserExt",
    "description": "<p>获取用户所有扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/userext/defList",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n    {\n     \"id\":1,\n     \"name\":\"aaa\",\n     \"type\":1,\n     \"required\":true,\n     \"ldapAttr\":\"fff\",\n     \"extra\":{ \"options\":[\"a1\",\"a2\",\"a3\"] },\n     \"order\":1, \"description\":\"ddd\"\n     },\n    {\n     \"id\":2,\n     \"name\":\"bbb\",\n     \"type\":2,\n     \"required\":true,\n     \"ldapAttr\":\"ttt\",\n     \"extra\":{\n          \"options\":[\"b1\",\"b2\",\"b3\"]\n      },\n     \"order\":2,\n     \"description\":\"ccc\"\n     }",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>附加信息的id。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>附加信息的名称。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>附加信息的类型。0-字符串，1-数字，2-日期，3-可选值。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "description": "<p>附加信息是否必须：true-必须，false-非必须。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>每种附加信息可能需要特殊配置的内容。 type=0时，length-表示字符串长度；type=1时，min-数字的最小值，max-数字的最大值； type=2时，start-开始日期，end-结束日期；type=3时，options-可选值。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>位置信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserExtController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/userext/defList"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/userext",
    "title": "增加用户扩展信息",
    "version": "1.0.0",
    "name": "PostUserExt",
    "group": "UserExt",
    "description": "<p>创建一个用户扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/userext",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n    {\n     \"id\":52,\n     \"name\":\"PhoneNum\",\n     \"type\":0,\n     \"required\":true,\n     \"extra\": {\"length\": 11},\n     \"order\":52\n     }",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>附加信息的id。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>附加信息的名称。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>附加信息的类型。0-字符串，1-数字，2-日期，3-可选值。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "required",
            "description": "<p>附加信息是否必须：true-必须，false-非必须。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>每种附加信息可能需要特殊配置的内容。 type=0时，length-表示字符串长度；type=1时，min-数字的最小值，max-数字的最大值； type=2时，start-开始日期，end-结束日期；type=3时，options-可选值。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>位置信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserExtController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/userext"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>附加信息名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>附加信息类型。0-字符串，1-数字，2-日期，3-可选值。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>是否必须：true-必须，false-非必须。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>每种附加信息可能需要特殊配置的内容。 type=0时，length-表示字符串长度；type=1时，min-数字的最小值，max-数字的最大值； type=2时，start-开始日期，end-结束日期；type=3时，options-可选值。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    \"name\":\"PhoneNum\",\n    \"type\":0,\n    \"required\":true,\n    \"extra\": {\"length\": 11}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/userext/down/:id",
    "title": "下移扩展信息",
    "version": "1.0.0",
    "name": "PutDownUserExt",
    "group": "UserExt",
    "description": "<p>下移扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/userext/down/49",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>附加信息 ID。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    \"id\": 49,\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户附加信息不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserExtController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/userext/down/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/userext/up/:id",
    "title": "上移扩展信息",
    "version": "1.0.0",
    "name": "PutUpUserExt",
    "group": "UserExt",
    "description": "<p>上移扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/userext/up/50",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>附加信息 ID。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"id\": 59,\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户附加信息不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserExtController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/userext/up/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/userext/:id",
    "title": "修改扩展信息",
    "version": "1.0.0",
    "name": "PutUserExt",
    "group": "UserExt",
    "description": "<p>修改用户扩展信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/userext/49",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>附加信息 ID。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..128",
            "optional": true,
            "field": "name",
            "description": "<p>附加信息名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..512",
            "optional": true,
            "field": "description",
            "description": "<p>扩展信息说明。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>是否必须：true-必须，false-非必须。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extra",
            "description": "<p>extra 每种附加信息可能需要特殊配置的内容。 type=0时，length-表示字符串长度；type=1时，min-数字的最小值，max-数字的最大值； type=2时，start-开始日期，end-结束日期；type=3时，options-可选值。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"ldapAttr\": \"information\",\n \"order\": 49,\n \"required\": true,\n \"type\": 1,\n \"extra\":{\"max\":30,\"min\":10}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户附加信息不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserExtController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/userext/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/native",
    "title": "获取密码校验要求",
    "version": "1.0.0",
    "name": "GetNative",
    "group": "User",
    "description": "<p>获取native认证方式的密码校验要求。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/user/native",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "length",
            "description": "<p>密码长度。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "complex",
            "description": "<p>密码复杂度：0-不限；1-必须包含字母数字；2-必须包含字母数字特殊字符； 3-必须包含大小写字母数字特殊字符四类中的三类）。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expire",
            "description": "<p>密码过期处理：0-禁止登录；1-仅提醒。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "validity",
            "description": "<p>密码有效期：0-不限；具体天数。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"expire\":0,\n\"length\":6,\n\"complex\":1,\n\"validity\":30\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "系统认证没有进行配置404错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/native"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/:id",
    "title": "获取用户信息",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "User",
    "description": "<p>根据用户 ID 查询并返回特定用户的信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/user/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户 ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"id\": 2,\n\"loginName\": \"user02\",\n\"userName\": \"Administrator\",\n\"password\":\"admin\",\n\"email\":\"123456789@qq.com\",\n\"authType\":\n  {\n   \"id\":1,\n   \"name\":\"native\",\n   \"type\":1,\n   \"configurations\":{\"expire\":\"1\",\"length\":\"5\",\"complex\":\"1\",\"complxe\":\"3\",\"validity\":\"180\"},\n   \"enabled\":true\n  },\n\"role\":{\"id\":1,\"name\":\"ROLE_ADMIN\",\n    \"permissions\":[\"OPER_USER\",\"OPER_RESOURCE\",\"ROLE_OPER_PRIVILEGE\",\n        \"ROLE_OPER_WORKSHEET\",\"ROLE_OPER_SETTINGS\"]},\n\"state\": 0,\n\"extInfo\":{\"12\":\"4\",\"13\":1462291200000,\"15\":\"2\"},\n\"usergroups\":[{\"id\":1,\"name\":\"new node 0\",\"order\":0}],\n\"lastLoginTime\":1463452221166,\n\"pwdValidType\":0,\n\"joinTime\":1464339253835,\n\"joinUser\":1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "loginName",
            "description": "<p>登录名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "userName",
            "description": "<p>用户姓名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..16",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码。如果使用本地认证，则必须提供密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮件地址。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authType",
            "description": "<p>认证类型。具体参数说明请参考“获取认证方式信息”API文档说明。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "authType.id",
            "description": "<p>认证类型的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>用户的角色。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "role.id",
            "description": "<p>用户角色的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authInfo",
            "description": "<p>认证相关属性。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "[\"custom\",\"auto\"]",
            "optional": false,
            "field": "authInfo.passwordType",
            "description": "<p>native认证方式的密码类型。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "authInfo.loginModifyPwd",
            "description": "<p>native认证方式的相关属性， true-下次登录时需要修改密码，false-下次登录无需修改密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "32-..",
            "optional": false,
            "field": "authInfo.tokenSN",
            "description": "<p>动态令牌的令牌号。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-32",
            "optional": false,
            "field": "authInfo.pin1",
            "description": "<p>动态令牌的 pin1 码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-32",
            "optional": false,
            "field": "authInfo.pin2",
            "description": "<p>动态令牌的 pin2 码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-64",
            "optional": false,
            "field": "authInfo.ldap_username",
            "description": "<p>LDAP 认证时使用的用户名 。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-64",
            "optional": false,
            "field": "authInfo.radius_username",
            "description": "<p>RADIUS 认证时使用的用户名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "0-3",
            "optional": false,
            "field": "state",
            "defaultValue": "0",
            "description": "<p>用户状态：0-活动；1-密码过期；2-帐号过期；3-禁用。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extInfo",
            "description": "<p>用户附加信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "extInfo.id",
            "description": "<p>用户附加信息的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>用户个性化信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.userNav",
            "description": "<p>用户保存的筛选条件。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.zipPsd",
            "description": "<p>用户设置的ZIP文件密码。8位以上同时包含字母和数字的密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.tui",
            "description": "<p>用户个性化信息中的字符会话配置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.tui.accessType",
            "description": "<p>字符会话的访问方式,可选:putty/scrt/xshell。缺省使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.gui",
            "description": "<p>用户个性化信息中的图形会话配置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.gui.accessType",
            "description": "<p>图形会话的访问方式，可选：web/mstsc。缺省使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.gui.customResolution",
            "description": "<p>图形会话分辨率， 可设为由空格分隔的多个分辨率组合，如800x600 1080x920。缺省则使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": true,
            "field": "extra.gui.rdpConsole",
            "defaultValue": "false",
            "description": "<p>是否启用Console连接， 可选:true-启用，false-不启用Console连接。缺省为不启用。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "usergroups",
            "description": "<p>分组信息。具体参数说明请参考“获取用户组”API文档说明。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "usergroups.id",
            "description": "<p>用户分组的ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "usergroups.name",
            "description": "<p>用户分组的名字。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "lastLoginTime",
            "description": "<p>最后一次登录时间，内存维护。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "pwdChangeTime",
            "description": "<p>最后一次密码修改时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authToken",
            "description": "<p>动态令牌信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "authToken.id",
            "description": "<p>动态令牌的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "validFrom",
            "description": "<p>帐号有效期（从）。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "validTo",
            "description": "<p>帐号有效期（到）。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "-1,0,30,90,180,365",
            "optional": false,
            "field": "pwdValidType",
            "defaultValue": "-1",
            "description": "<p>密码有效期配置类型， -1 同系统配置；0 不限；30/90/180/365；指定日期。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "joinTime",
            "description": "<p>加入系统时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "joinUser",
            "description": "<p>加入该用户的用户id,不做关联。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "servSyss",
            "description": "<p>业务系统与用户的关联关系。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "deleted",
            "defaultValue": "false",
            "description": "<p>用户是否被删除，true-已被删除，false-未被删除。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "用户不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "用户不存在或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/userAcl/:id",
    "title": "根据ID获取用户登录规则",
    "version": "1.0.0",
    "name": "GetUserAclById",
    "group": "User",
    "description": "<p>根据ID查询用户登录规则</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "\ncurl -i http://localhost:8080/shterm/api/user/userAcl/7",
          "type": "curl"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>全局用户登录规则的ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>全局用户登录规则的ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "priority",
            "description": "<p>优先级。数字越小，优先级越高</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>条件 。1 满足 ，2 不满足，3 不启用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "act",
            "description": "<p>动作。accept 允许登录，deny 拒绝登录</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timeRange",
            "description": "<p>时间范围。（如：&quot;w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]&quot;） 注意：对 w（周）的含义，在中国，1-7 分别代表周一~周日；国外则 1-7 分半代表周日-周六。目前按国内做法实现。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ipRange",
            "description": "<p>IP范围。格式为以逗号分隔的多段地址，如：1.1.1.1-1.1.1.100,192.168.4.20,10.10.10.0/24</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"id\":7,\n\"priority\":7,\n\"condition\":1,\n\"act\":\"accept\",\n\"timeRange\":\"w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]\",\n\"ipRange\":\"1.1.1.1-2.1.1.1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户登录规则不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/userAcl/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/userAclList",
    "title": "获取用户登录规则列表",
    "version": "1.0.0",
    "name": "GetUserAclList",
    "group": "User",
    "description": "<p>查询全局用户登录规则列表</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "\ncurl -i http://localhost:8080/shterm/api/user/userAclList",
          "type": "curl"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>全局用户登录规则的ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "priority",
            "description": "<p>优先级。数字越小，优先级越高</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>条件 。1 满足 ，2 不满足，3 不启用</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "act",
            "description": "<p>动作。accept 允许登录，deny 拒绝登录</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timeRange",
            "description": "<p>时间范围。（如：&quot;w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]&quot;） 注意：对 w（周）的含义，在中国，1-7 分别代表周一~周日；国外则 1-7 分半代表周日-周六。目前按国内做法实现。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ipRange",
            "description": "<p>IP范围。格式为以逗号分隔的多段地址，如：1.1.1.1-1.1.1.100,192.168.4.20,10.10.10.0/24</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"content\":[\n{\n\"id\":7,\n\"priority\":7,\n\"condition\":1,\n\"act\":\"accept\",\n\"timeRange\":\"w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]\",\n\"ipRange\":\"1.1.1.1-2.1.1.1\"\n}\n],\n\"totalElements\": 100,\n\"totalPages\": 10,\n\"number\": 0,\n\"size\": 10,\n\"first\": true,\n\"sort\": null,\n\"last\": false,\n\"numberOfElements\": 10\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户登录规则不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/userAclList"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/nav",
    "title": "获取用户筛选条件列表",
    "version": "1.0.0",
    "name": "GetUserNav",
    "group": "User",
    "description": "<p>获取用户设置的筛选条件列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/user/nav",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>筛选快捷方式名称。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "useOr",
            "description": "<p>filters的多个过滤条件是否支持“或”连接过滤。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>筛选结果。</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "filters",
            "description": "<p>过滤条件集合，元素是过滤条件对象filter，参数说明如下。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>过滤条件，filters集合中的元素。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filter.attr",
            "description": "<p>过滤属性。详情请参考“获取符合条件的用户列表”API文档中的过滤项信息说明。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filter.oper",
            "description": "<p>过滤关键词，用来拼接在过滤属性后面组装成过滤条件的key。 详情请参考“获取符合条件的用户列表”API文档中的过滤项信息说明。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filter.value",
            "description": "<p>过滤条件的value，与过滤条件key组成完成过滤条件，例子：role.idIn={3}。 详情请参考“获取符合条件的用户列表”API文档中的过滤项信息说明。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n{\"name\":\"全部用户\",\"filters\":[],\"useOr\":false,\"count\":2},\n{\"name\":\"配置管理员\",\"filters\":[{\"attr\":\"role.id\",\"oper\":\"In\",\"value\":\"2\"}],\"useOr\":false,\"count\":0},\n{\"name\":\"超级管理员\",\"filters\":[{\"attr\":\"role.id\",\"oper\":\"In\",\"value\":\"1\"}],\"useOr\":false,\"count\":1},\n{\"name\":\"未分组\",\"filters\":[{\"attr\":\"usergroups\",\"oper\":\"Null\",\"value\":\"true\"}],\"useOr\":false,\"count\":1},\n{\"name\":\"禁用\",\"filters\":[{\"attr\":\"state\",\"oper\":\"In\",\"value\":\"3\"}],\"useOr\":false,\"count\":0},\n{\"name\":\"帐号过期\",\"filters\":[{\"attr\":\"state\",\"oper\":\"In\",\"value\":\"2\"}],\"useOr\":false,\"count\":0},\n{\"name\":\"密码过期\",\"filters\":[{\"attr\":\"state\",\"oper\":\"In\",\"value\":\"1\"}],\"useOr\":false,\"count\":0},\n{\"name\":\"不活跃\",\"filters\":[{\"attr\":\"lastLoginTime\",\"oper\":\"Before\",\"value\":\"2016-04-17\"},\n{\"attr\":\"lastLoginTime\",\"oper\":\"Null\",\"value\":\"true\"}],\"useOr\":true,\"count\":1}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/nav"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "获取符合条件的用户列表",
    "version": "1.0.0",
    "name": "GetUsers",
    "group": "User",
    "description": "<p>查询并返回符合条件的用户列表。 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/user?loginNameContains=user&userNameStartsWith=abc",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"totalElements\": 100,\n\"totalPages\": 10,\n\"number\": 0,\n\"size\": 10,\n\"first\": true,\n\"last\": false,\n\"numberOfElements\": 10,\n\"content\": [\n { \"id\": 1, \"loginName\": \"admin\", \"userName\": \"Administrator\", \"state\": 0, \"lastLoginTime\": 0 },\n......\n]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ],
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "loginName",
            "description": "<p>登录名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "userName",
            "description": "<p>用户姓名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..16",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码。如果使用本地认证，则必须提供密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮件地址。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authType",
            "description": "<p>认证类型。具体参数说明请参考“获取认证方式信息”API文档说明。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "authType.id",
            "description": "<p>认证类型的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>用户的角色。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "role.id",
            "description": "<p>用户角色的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authInfo",
            "description": "<p>认证相关属性。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "[\"custom\",\"auto\"]",
            "optional": false,
            "field": "authInfo.passwordType",
            "description": "<p>native认证方式的密码类型。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "authInfo.loginModifyPwd",
            "description": "<p>native认证方式的相关属性， true-下次登录时需要修改密码，false-下次登录无需修改密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "32-..",
            "optional": false,
            "field": "authInfo.tokenSN",
            "description": "<p>动态令牌的令牌号。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-32",
            "optional": false,
            "field": "authInfo.pin1",
            "description": "<p>动态令牌的 pin1 码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-32",
            "optional": false,
            "field": "authInfo.pin2",
            "description": "<p>动态令牌的 pin2 码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-64",
            "optional": false,
            "field": "authInfo.ldap_username",
            "description": "<p>LDAP 认证时使用的用户名 。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-64",
            "optional": false,
            "field": "authInfo.radius_username",
            "description": "<p>RADIUS 认证时使用的用户名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "0-3",
            "optional": false,
            "field": "state",
            "defaultValue": "0",
            "description": "<p>用户状态：0-活动；1-密码过期；2-帐号过期；3-禁用。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extInfo",
            "description": "<p>用户附加信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "extInfo.id",
            "description": "<p>用户附加信息的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>用户个性化信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.userNav",
            "description": "<p>用户保存的筛选条件。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.zipPsd",
            "description": "<p>用户设置的ZIP文件密码。8位以上同时包含字母和数字的密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.tui",
            "description": "<p>用户个性化信息中的字符会话配置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.tui.accessType",
            "description": "<p>字符会话的访问方式,可选:putty/scrt/xshell。缺省使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.gui",
            "description": "<p>用户个性化信息中的图形会话配置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.gui.accessType",
            "description": "<p>图形会话的访问方式，可选：web/mstsc。缺省使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.gui.customResolution",
            "description": "<p>图形会话分辨率， 可设为由空格分隔的多个分辨率组合，如800x600 1080x920。缺省则使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": true,
            "field": "extra.gui.rdpConsole",
            "defaultValue": "false",
            "description": "<p>是否启用Console连接， 可选:true-启用，false-不启用Console连接。缺省为不启用。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "usergroups",
            "description": "<p>分组信息。具体参数说明请参考“获取用户组”API文档说明。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "usergroups.id",
            "description": "<p>用户分组的ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "usergroups.name",
            "description": "<p>用户分组的名字。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "lastLoginTime",
            "description": "<p>最后一次登录时间，内存维护。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "pwdChangeTime",
            "description": "<p>最后一次密码修改时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authToken",
            "description": "<p>动态令牌信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "authToken.id",
            "description": "<p>动态令牌的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "validFrom",
            "description": "<p>帐号有效期（从）。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "validTo",
            "description": "<p>帐号有效期（到）。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "-1,0,30,90,180,365",
            "optional": false,
            "field": "pwdValidType",
            "defaultValue": "-1",
            "description": "<p>密码有效期配置类型， -1 同系统配置；0 不限；30/90/180/365；指定日期。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "joinTime",
            "description": "<p>加入系统时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "joinUser",
            "description": "<p>加入该用户的用户id,不做关联。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "servSyss",
            "description": "<p>业务系统与用户的关联关系。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "deleted",
            "defaultValue": "false",
            "description": "<p>用户是否被删除，true-已被删除，false-未被删除。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user"
      }
    ],
    "parameter": {
      "fields": {
        "过滤项基本信息": [
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "loginName",
            "description": "<p>帐号，过滤例子：loginNameContains=ad,表示查询帐户包含“ad”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "userName",
            "description": "<p>姓名，过滤例子：userNameContains=test,表示查询姓名包含“test”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮件地址，过滤例子：emailContains=1@1，表示查询邮箱包含“1@1”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "authType",
            "description": "<p>过滤支持多个认证类型“或”， 过滤例子：authType.idIn=1,2 表示查询认证方式id为“1”或者为“2”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>角色，过滤支持多个角色“或”，返回角色id列表， 过滤例子：role.idIn=1,2 表示查询角色id为“1”或者为“2”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Number",
            "size": "0-3",
            "optional": false,
            "field": "state",
            "description": "<p>状态，过滤支持多个状态“或”， 过滤例子：stateIn=0,1,2 表示查询状态为0或者为1或者为2的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "usergroups",
            "description": "<p>用户组，支持选中多个分组“或”，返回分组id列表， 过滤例子：usergroups.idIn=1,2,3 表示查询用户组为1或者2或者3的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Date",
            "optional": false,
            "field": "lastLoginTime",
            "description": "<p>最后一次登录时间，支持“从”和“至”， 过滤例子：“lastLoginTimeBefore=2016-06-06T16:00:00”，“lastLoginTimeAfter=2016-06-06T16:00:00”， “lastLoginTimeBetween=2016-06-06T16:00:00,2017-06-06T16:00:00”； 对相同字段使用不同关键字过滤时，过滤条件的字段必须一致，并且需要使用“useOr”关键字添加到url的查询参数， 例子：“lastLoginTimeBefore=2016-3-17+13:01:19&amp;lastLoginTimeNull&amp;useOr=true”</p>"
          }
        ],
        "过滤项附加信息": [
          {
            "group": "过滤项附加信息",
            "type": "Objetc",
            "optional": false,
            "field": "extInfo",
            "description": "<p>附加信息：分4类，字符串，数字，日期，可选项。 组装原则是：extInfo.* (这里的*是附加信息的id信息) + 过滤字符串(例如：Contains/In等)。</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "String",
            "optional": false,
            "field": "extInfo.1",
            "description": "<p>字符串类型，Contains，例子：extInfo.1Contains=123</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "Number",
            "optional": false,
            "field": "extInfo.2",
            "description": "<p>数字类型，范围过滤。 例子：extInfo.2LessThanEqual=10 or extInfo.2LargeThanEqual=0 or extInfo.2Between=0,10</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "Date",
            "optional": false,
            "field": "extInfo.3",
            "description": "<p>日期类型，范围过滤。 例子：extInfo.3Before=2016-10-10 or extInfo.3After=2015-10-10 or extInfo.3Between=2015-10-10,2016-10-10</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "String",
            "optional": false,
            "field": "extInfo.4",
            "description": "<p>可选项，In过滤，例子：extInfo.4In=研发部，测试部</p>"
          }
        ],
        "过滤项高级属性": [
          {
            "group": "过滤项高级属性",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注，过滤例子remarkContains=1，表示查询备注包含”1“的用户。</p>"
          },
          {
            "group": "过滤项高级属性",
            "type": "Date",
            "optional": false,
            "field": "validFrom",
            "description": "<p>帐号有效期（从），帐号有效期没有过滤项，通过前面的state状态过滤即可。</p>"
          },
          {
            "group": "过滤项高级属性",
            "type": "Date",
            "optional": false,
            "field": "validTo",
            "description": "<p>帐号有效期（到），帐号有效期没有过滤项，通过前面的state状态过滤即可。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/api/usergroup/:id",
    "title": "删除用户组",
    "version": "1.0.0",
    "name": "DeleteUserGroup",
    "group": "UserGroup",
    "description": "<p>根据ID删除指定用户组。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户组 ID</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "用户组不存或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/usergroup/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/usergroup/:id/queryUsers",
    "title": "获取指定用户组下的用户列表",
    "version": "1.0.0",
    "name": "GetQueryUsers",
    "group": "UserGroup",
    "description": "<p>查询并返回符合条件的用户列表。 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/usergroup/1/queryUsers?loginNameContains=admin",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户组 ID</p>"
          }
        ],
        "过滤项基本信息": [
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "loginName",
            "description": "<p>帐号，过滤例子：loginNameContains=ad,表示查询帐户包含“ad”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "userName",
            "description": "<p>姓名，过滤例子：userNameContains=test,表示查询姓名包含“test”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮件地址，过滤例子：emailContains=1@1，表示查询邮箱包含“1@1”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "authType",
            "description": "<p>过滤支持多个认证类型“或”， 过滤例子：authType.idIn=1,2 表示查询认证方式id为“1”或者为“2”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>角色，过滤支持多个角色“或”，返回角色id列表， 过滤例子：role.idIn=1,2 表示查询角色id为“1”或者为“2”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Number",
            "size": "0-3",
            "optional": false,
            "field": "state",
            "description": "<p>状态，过滤支持多个状态“或”， 过滤例子：stateIn=0,1,2 表示查询状态为0或者为1或者为2的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "usergroups",
            "description": "<p>用户组，支持选中多个分组“或”，返回分组id列表， 过滤例子：usergroups.idIn=1,2,3 表示查询用户组为1或者2或者3的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Date",
            "optional": false,
            "field": "lastLoginTime",
            "description": "<p>最后一次登录时间，支持“从”和“至”， 过滤例子：“lastLoginTimeBefore=2016-06-06T16:00:00”，“lastLoginTimeAfter=2016-06-06T16:00:00”， “lastLoginTimeBetween=2016-06-06T16:00:00,2017-06-06T16:00:00”； 对相同字段使用不同关键字过滤时，过滤条件的字段必须一致，并且需要使用“useOr”关键字添加到url的查询参数， 例子：“lastLoginTimeBefore=2016-3-17+13:01:19&amp;lastLoginTimeNull&amp;useOr=true”</p>"
          }
        ],
        "过滤项附加信息": [
          {
            "group": "过滤项附加信息",
            "type": "Objetc",
            "optional": false,
            "field": "extInfo",
            "description": "<p>附加信息：分4类，字符串，数字，日期，可选项。 组装原则是：extInfo.* (这里的*是附加信息的id信息) + 过滤字符串(例如：Contains/In等)。</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "String",
            "optional": false,
            "field": "extInfo.1",
            "description": "<p>字符串类型，Contains，例子：extInfo.1Contains=123</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "Number",
            "optional": false,
            "field": "extInfo.2",
            "description": "<p>数字类型，范围过滤。 例子：extInfo.2LessThanEqual=10 or extInfo.2LargeThanEqual=0 or extInfo.2Between=0,10</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "Date",
            "optional": false,
            "field": "extInfo.3",
            "description": "<p>日期类型，范围过滤。 例子：extInfo.3Before=2016-10-10 or extInfo.3After=2015-10-10 or extInfo.3Between=2015-10-10,2016-10-10</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "String",
            "optional": false,
            "field": "extInfo.4",
            "description": "<p>可选项，In过滤，例子：extInfo.4In=研发部，测试部</p>"
          }
        ],
        "过滤项高级属性": [
          {
            "group": "过滤项高级属性",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注，过滤例子remarkContains=1，表示查询备注包含”1“的用户。</p>"
          },
          {
            "group": "过滤项高级属性",
            "type": "Date",
            "optional": false,
            "field": "validFrom",
            "description": "<p>帐号有效期（从），帐号有效期没有过滤项，通过前面的state状态过滤即可。</p>"
          },
          {
            "group": "过滤项高级属性",
            "type": "Date",
            "optional": false,
            "field": "validTo",
            "description": "<p>帐号有效期（到），帐号有效期没有过滤项，通过前面的state状态过滤即可。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"totalElements\": 100,\n\"totalPages\": 10,\n\"number\": 0,\n\"size\": 10,\n\"first\": true,\n\"last\": false,\n\"numberOfElements\": 10,\n\"content\": [\n  { \"id\": 1, \"loginName\": \"admin\", \"userName\": \"Administrator\", \"state\": 0, \"lastLoginTime\": 0 },\n  ......\n]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ],
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "loginName",
            "description": "<p>登录名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "userName",
            "description": "<p>用户姓名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..16",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码。如果使用本地认证，则必须提供密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮件地址。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authType",
            "description": "<p>认证类型。具体参数说明请参考“获取认证方式信息”API文档说明。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "authType.id",
            "description": "<p>认证类型的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>用户的角色。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "role.id",
            "description": "<p>用户角色的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authInfo",
            "description": "<p>认证相关属性。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "[\"custom\",\"auto\"]",
            "optional": false,
            "field": "authInfo.passwordType",
            "description": "<p>native认证方式的密码类型。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "authInfo.loginModifyPwd",
            "description": "<p>native认证方式的相关属性， true-下次登录时需要修改密码，false-下次登录无需修改密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "32-..",
            "optional": false,
            "field": "authInfo.tokenSN",
            "description": "<p>动态令牌的令牌号。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-32",
            "optional": false,
            "field": "authInfo.pin1",
            "description": "<p>动态令牌的 pin1 码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-32",
            "optional": false,
            "field": "authInfo.pin2",
            "description": "<p>动态令牌的 pin2 码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-64",
            "optional": false,
            "field": "authInfo.ldap_username",
            "description": "<p>LDAP 认证时使用的用户名 。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-64",
            "optional": false,
            "field": "authInfo.radius_username",
            "description": "<p>RADIUS 认证时使用的用户名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "0-3",
            "optional": false,
            "field": "state",
            "defaultValue": "0",
            "description": "<p>用户状态：0-活动；1-密码过期；2-帐号过期；3-禁用。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extInfo",
            "description": "<p>用户附加信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "extInfo.id",
            "description": "<p>用户附加信息的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>用户个性化信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.userNav",
            "description": "<p>用户保存的筛选条件。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.zipPsd",
            "description": "<p>用户设置的ZIP文件密码。8位以上同时包含字母和数字的密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.tui",
            "description": "<p>用户个性化信息中的字符会话配置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.tui.accessType",
            "description": "<p>字符会话的访问方式,可选:putty/scrt/xshell。缺省使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.gui",
            "description": "<p>用户个性化信息中的图形会话配置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.gui.accessType",
            "description": "<p>图形会话的访问方式，可选：web/mstsc。缺省使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.gui.customResolution",
            "description": "<p>图形会话分辨率， 可设为由空格分隔的多个分辨率组合，如800x600 1080x920。缺省则使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": true,
            "field": "extra.gui.rdpConsole",
            "defaultValue": "false",
            "description": "<p>是否启用Console连接， 可选:true-启用，false-不启用Console连接。缺省为不启用。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "usergroups",
            "description": "<p>分组信息。具体参数说明请参考“获取用户组”API文档说明。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "usergroups.id",
            "description": "<p>用户分组的ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "usergroups.name",
            "description": "<p>用户分组的名字。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "lastLoginTime",
            "description": "<p>最后一次登录时间，内存维护。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "pwdChangeTime",
            "description": "<p>最后一次密码修改时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authToken",
            "description": "<p>动态令牌信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "authToken.id",
            "description": "<p>动态令牌的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "validFrom",
            "description": "<p>帐号有效期（从）。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "validTo",
            "description": "<p>帐号有效期（到）。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "-1,0,30,90,180,365",
            "optional": false,
            "field": "pwdValidType",
            "defaultValue": "-1",
            "description": "<p>密码有效期配置类型， -1 同系统配置；0 不限；30/90/180/365；指定日期。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "joinTime",
            "description": "<p>加入系统时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "joinUser",
            "description": "<p>加入该用户的用户id,不做关联。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "servSyss",
            "description": "<p>业务系统与用户的关联关系。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "deleted",
            "defaultValue": "false",
            "description": "<p>用户是否被删除，true-已被删除，false-未被删除。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/usergroup/:id/queryUsers"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/usergroup/:id/queryUsersNot",
    "title": "获取指定用户组下没有的用户列表",
    "version": "1.0.0",
    "name": "GetQueryUsersNot",
    "group": "UserGroup",
    "description": "<p>获取指定用户组下没有的用户列表。 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/shterm/api/usergroup/1/queryUsersNot?loginNameContains=admin",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户组 ID</p>"
          }
        ],
        "过滤项基本信息": [
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "loginName",
            "description": "<p>帐号，过滤例子：loginNameContains=ad,表示查询帐户包含“ad”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "userName",
            "description": "<p>姓名，过滤例子：userNameContains=test,表示查询姓名包含“test”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮件地址，过滤例子：emailContains=1@1，表示查询邮箱包含“1@1”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "authType",
            "description": "<p>过滤支持多个认证类型“或”， 过滤例子：authType.idIn=1,2 表示查询认证方式id为“1”或者为“2”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>角色，过滤支持多个角色“或”，返回角色id列表， 过滤例子：role.idIn=1,2 表示查询角色id为“1”或者为“2”的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Number",
            "size": "0-3",
            "optional": false,
            "field": "state",
            "description": "<p>状态，过滤支持多个状态“或”， 过滤例子：stateIn=0,1,2 表示查询状态为0或者为1或者为2的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "usergroups",
            "description": "<p>用户组，支持选中多个分组“或”，返回分组id列表， 过滤例子：usergroups.idIn=1,2,3 表示查询用户组为1或者2或者3的用户。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Date",
            "optional": false,
            "field": "lastLoginTime",
            "description": "<p>最后一次登录时间，支持“从”和“至”， 过滤例子：“lastLoginTimeBefore=2016-06-06T16:00:00”，“lastLoginTimeAfter=2016-06-06T16:00:00”， “lastLoginTimeBetween=2016-06-06T16:00:00,2017-06-06T16:00:00”； 对相同字段使用不同关键字过滤时，过滤条件的字段必须一致，并且需要使用“useOr”关键字添加到url的查询参数， 例子：“lastLoginTimeBefore=2016-3-17+13:01:19&amp;lastLoginTimeNull&amp;useOr=true”</p>"
          }
        ],
        "过滤项附加信息": [
          {
            "group": "过滤项附加信息",
            "type": "Objetc",
            "optional": false,
            "field": "extInfo",
            "description": "<p>附加信息：分4类，字符串，数字，日期，可选项。 组装原则是：extInfo.* (这里的*是附加信息的id信息) + 过滤字符串(例如：Contains/In等)。</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "String",
            "optional": false,
            "field": "extInfo.1",
            "description": "<p>字符串类型，Contains，例子：extInfo.1Contains=123</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "Number",
            "optional": false,
            "field": "extInfo.2",
            "description": "<p>数字类型，范围过滤。 例子：extInfo.2LessThanEqual=10 or extInfo.2LargeThanEqual=0 or extInfo.2Between=0,10</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "Date",
            "optional": false,
            "field": "extInfo.3",
            "description": "<p>日期类型，范围过滤。 例子：extInfo.3Before=2016-10-10 or extInfo.3After=2015-10-10 or extInfo.3Between=2015-10-10,2016-10-10</p>"
          },
          {
            "group": "过滤项附加信息",
            "type": "String",
            "optional": false,
            "field": "extInfo.4",
            "description": "<p>可选项，In过滤，例子：extInfo.4In=研发部，测试部</p>"
          }
        ],
        "过滤项高级属性": [
          {
            "group": "过滤项高级属性",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注，过滤例子remarkContains=1，表示查询备注包含”1“的用户。</p>"
          },
          {
            "group": "过滤项高级属性",
            "type": "Date",
            "optional": false,
            "field": "validFrom",
            "description": "<p>帐号有效期（从），帐号有效期没有过滤项，通过前面的state状态过滤即可。</p>"
          },
          {
            "group": "过滤项高级属性",
            "type": "Date",
            "optional": false,
            "field": "validTo",
            "description": "<p>帐号有效期（到），帐号有效期没有过滤项，通过前面的state状态过滤即可。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"totalElements\": 100,\n\"totalPages\": 10,\n\"number\": 0,\n\"size\": 10,\n\"first\": true,\n\"last\": false,\n\"numberOfElements\": 10,\n\"content\": [\n  { \"id\": 1, \"loginName\": \"admin\", \"userName\": \"Administrator\", \"state\": 0, \"lastLoginTime\": 0 },\n  ......\n]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ],
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "loginName",
            "description": "<p>登录名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "userName",
            "description": "<p>用户姓名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..16",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码。如果使用本地认证，则必须提供密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1..64",
            "optional": false,
            "field": "email",
            "description": "<p>电子邮件地址。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authType",
            "description": "<p>认证类型。具体参数说明请参考“获取认证方式信息”API文档说明。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "authType.id",
            "description": "<p>认证类型的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>用户的角色。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "role.id",
            "description": "<p>用户角色的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authInfo",
            "description": "<p>认证相关属性。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "[\"custom\",\"auto\"]",
            "optional": false,
            "field": "authInfo.passwordType",
            "description": "<p>native认证方式的密码类型。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "authInfo.loginModifyPwd",
            "description": "<p>native认证方式的相关属性， true-下次登录时需要修改密码，false-下次登录无需修改密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "32-..",
            "optional": false,
            "field": "authInfo.tokenSN",
            "description": "<p>动态令牌的令牌号。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-32",
            "optional": false,
            "field": "authInfo.pin1",
            "description": "<p>动态令牌的 pin1 码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-32",
            "optional": false,
            "field": "authInfo.pin2",
            "description": "<p>动态令牌的 pin2 码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-64",
            "optional": false,
            "field": "authInfo.ldap_username",
            "description": "<p>LDAP 认证时使用的用户名 。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "size": "1-64",
            "optional": false,
            "field": "authInfo.radius_username",
            "description": "<p>RADIUS 认证时使用的用户名。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "0-3",
            "optional": false,
            "field": "state",
            "defaultValue": "0",
            "description": "<p>用户状态：0-活动；1-密码过期；2-帐号过期；3-禁用。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extInfo",
            "description": "<p>用户附加信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "extInfo.id",
            "description": "<p>用户附加信息的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>用户个性化信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.userNav",
            "description": "<p>用户保存的筛选条件。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.zipPsd",
            "description": "<p>用户设置的ZIP文件密码。8位以上同时包含字母和数字的密码。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.tui",
            "description": "<p>用户个性化信息中的字符会话配置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.tui.accessType",
            "description": "<p>字符会话的访问方式,可选:putty/scrt/xshell。缺省使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "extra.gui",
            "description": "<p>用户个性化信息中的图形会话配置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.gui.accessType",
            "description": "<p>图形会话的访问方式，可选：web/mstsc。缺省使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "extra.gui.customResolution",
            "description": "<p>图形会话分辨率， 可设为由空格分隔的多个分辨率组合，如800x600 1080x920。缺省则使用全局设置。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": true,
            "field": "extra.gui.rdpConsole",
            "defaultValue": "false",
            "description": "<p>是否启用Console连接， 可选:true-启用，false-不启用Console连接。缺省为不启用。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "usergroups",
            "description": "<p>分组信息。具体参数说明请参考“获取用户组”API文档说明。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "usergroups.id",
            "description": "<p>用户分组的ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "usergroups.name",
            "description": "<p>用户分组的名字。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "lastLoginTime",
            "description": "<p>最后一次登录时间，内存维护。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "pwdChangeTime",
            "description": "<p>最后一次密码修改时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "authToken",
            "description": "<p>动态令牌信息。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "authToken.id",
            "description": "<p>动态令牌的 ID。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "validFrom",
            "description": "<p>帐号有效期（从）。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "validTo",
            "description": "<p>帐号有效期（到）。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "size": "-1,0,30,90,180,365",
            "optional": false,
            "field": "pwdValidType",
            "defaultValue": "-1",
            "description": "<p>密码有效期配置类型， -1 同系统配置；0 不限；30/90/180/365；指定日期。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Date",
            "optional": false,
            "field": "joinTime",
            "description": "<p>加入系统时间。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "joinUser",
            "description": "<p>加入该用户的用户id,不做关联。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Object",
            "optional": false,
            "field": "servSyss",
            "description": "<p>业务系统与用户的关联关系。</p>"
          },
          {
            "group": "Response响应参数说明",
            "type": "Boolean",
            "optional": false,
            "field": "deleted",
            "defaultValue": "false",
            "description": "<p>用户是否被删除，true-已被删除，false-未被删除。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/usergroup/:id/queryUsersNot"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/usergroup/:id",
    "title": "获取用户组信息",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "UserGroup",
    "description": "<p>根据用户组 ID 查询并返回特定用户组的信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/usergroup/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户组 ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户组的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户组名。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>组织方式。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rules",
            "description": "<p>规则。 参数为 key type(0 用户基本信息; 1 用户附加信息 ) rela(contains/eq/ge/le/lt, contains包含, eq等于， ge大于等于， le小于等于， gt大于，lt小于) value 支持多个判断条件， 例子： {[{&quot;key&quot;:&quot;name&quot;,&quot;type&quot;:0,&quot;rela&quot;:&quot;eq&quot;,&quot;value&quot;:&quot;李四&quot;}，{&quot;key&quot;:1,&quot;type&quot;:1, &quot;rela&quot;:&quot;contains&quot;,&quot;value&quot;:&quot;杭州&quot;}]}。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>排序信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "description",
            "description": "<p>用户组描述。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>用户组下的用户。详细参考 user API</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "accessRules",
            "description": "<p>关联权限。详细参考 accessRules API (暂时不会返回该值)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "servSyss",
            "description": "<p>关联业务系统。详细参考 servSyss API (暂时不会返回该值)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"id\": 1,\n\"name\":\"ios\",\n\"type\": \"0\",\n\"order\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户组不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/usergroup/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/usergroup",
    "title": "获取符合条件的用户组列表",
    "version": "1.0.0",
    "name": "GetUserGroups",
    "group": "UserGroup",
    "description": "<p>查询并返回符合条件的用户列表。 下面的查询参数中，可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals ”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“ LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/usergroup?users.loginName=admin",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>用户组名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "users",
            "description": "<p>用户。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "users.loginName",
            "description": "<p>用户账号。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "users.userName",
            "description": "<p>用户姓名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>同时在用户组名，用户账号，用户姓名中搜索。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户组的唯一性标识。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户组名。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>该用户组下的用户数。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n{name: \"666\", count: 1, id: \"131\"},\n{name: \"lili\", count: 1, id: \"137\"},\n{name: \"999\", count: 1, id: \"28\"}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/usergroup"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/usergroup",
    "title": "创建新用户组",
    "version": "1.0.0",
    "name": "PostUserGroup",
    "group": "UserGroup",
    "description": "<p>创建一个新的用户组。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>用户组名。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"name\": \"imac\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Response 201": [
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户组的唯一性标识。</p>"
          },
          {
            "group": "Response 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户组名。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>排序。</p>"
          },
          {
            "group": "Response 201",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>组织方式。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n{\n\"id\": 141,\n\"name\": \"linux\",\n\"order\": 9,\n\"type\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/usergroup"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/usergroup/:id",
    "title": "修改用户组",
    "version": "1.0.0",
    "name": "PutUserGroup",
    "group": "UserGroup",
    "description": "<p>修改用户组的信息。目前只允许修改name，users，description。不传参，需要传递空对象“{}”</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户组 ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "name",
            "description": "<p>用户组名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..512",
            "optional": true,
            "field": "description",
            "description": "<p>用户组描述。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "users",
            "description": "<p>用户组下用户信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "users.id",
            "description": "<p>用户ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"name\": \"imac\",\n\"description\": \"xxxxxx\",\n\"users\": [{\"id\": 1}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户组不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/usergroup/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/usergroup/:id/addUsers",
    "title": "为用户组关联用户",
    "version": "1.0.0",
    "name": "addUsers",
    "group": "UserGroup",
    "description": "<p>为用户组关联用户</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "http://localhost/api/usergroup/1/addUsers",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\nids:\"1,2\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户组 ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ids",
            "description": "<p>要关联用户的 ID。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "用户组不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/usergroup/:id/addUsers"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/usergroup/:id/removeUsers",
    "title": "为用户组移除用户",
    "version": "1.0.0",
    "name": "removeUsers",
    "group": "UserGroup",
    "description": "<p>为用户组移除用户</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "http://localhost/api/usergroup/1/removeUsers",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\nids:\"1,2\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户组 ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ids",
            "description": "<p>要移除关联用户的 ID。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "用户组不存 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserGroupController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/usergroup/:id/removeUsers"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/:id",
    "title": "导入用户完成后编辑用户",
    "version": "1.0.0",
    "name": "ImportUserPut",
    "group": "User",
    "description": "<p>外部文件导入用户完成后编辑用户。</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "curl -i http://shterm_host:8080/shterm/api/user/117",
          "type": "curl"
        },
        {
          "title": "请求消息体示例",
          "content": "{\n\"authType\": { \"id\": 117 },\n\"password\": \"admin123456\",\n\"pwdValidType\":90,\n\"validFrom\":\"2016-04-29\",\n\"validTo\":\"2017-07-29\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户 ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "authType",
            "description": "<p>认证类型。例子：&quot;authType&quot;: { &quot;id&quot;: 1 }，表示设置用户的认证方式为“id=1”的认证方式， 在本例中是native认证。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "authType.id",
            "description": "<p>认证类型的 ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..16",
            "optional": true,
            "field": "password",
            "description": "<p>登录密码。如果使用本地认证，则必须提供密码。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pwdValidType",
            "defaultValue": "-1",
            "description": "<p>密码有效期配置类型，-1 同系统配置；0 不限；30/90/180/365；指定日期。</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "validFrom",
            "description": "<p>帐号有效期（从）。</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "validTo",
            "description": "<p>帐号有效期（到）。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "用户不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/user",
    "title": "创建新用户",
    "version": "1.0.0",
    "name": "PostUser",
    "group": "User",
    "description": "<p>创建一个新的用户。</p>",
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n{\n\"id\":103\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response响应参数说明": [
          {
            "group": "Response响应参数说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户的 ID。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..60",
            "optional": false,
            "field": "loginName",
            "description": "<p>登录名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "userName",
            "description": "<p>用户姓名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..100",
            "optional": true,
            "field": "password",
            "description": "<p>登录密码。 如果使用本地认证(native)且密码类型为手动创建(&quot;authInfo&quot;:{&quot;passwordType&quot;:&quot;custom&quot;})，则必须提供密码。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..64",
            "optional": true,
            "field": "email",
            "description": "<p>电子邮件地址。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "authType",
            "description": "<p>认证类型。 例子：&quot;authType&quot;: { &quot;id&quot;: 1 }，表示设置用户的认证方式为“id=1”的认证方式，在本例中是native认证。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "authType.id",
            "description": "<p>认证类型的 ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>用户的角色。例子：&quot;role&quot;: { &quot;id&quot;: 6 }，表示设置用户的系统角色为“id=6”的角色类型，在本例中是ROLE_USER角色。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role.id",
            "description": "<p>用户角色的 ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "authInfo",
            "description": "<p>认证相关属性，认证方式设置为[&quot;native&quot;,&quot;totp&quot;,&quot;ldap&quot;,&quot;radius&quot;]之一的一种时，此字段为必需。参数说明如下。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "32",
            "optional": true,
            "field": "authInfo.passwordType",
            "description": "<p>native认证方式的密码类型， 可选包括:custom手动设置密码;auto-自动设置密码。当认证类型为native时，passwordType为必需。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "authInfo.loginModifyPwd",
            "description": "<p>native认证方式的相关属性， 表示下次登录是否需要修改密码，可选:true-下次登录需修改密码;false-下次登录不需要修改密码。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "32",
            "optional": true,
            "field": "authInfo.tokenSN",
            "description": "<p>动态令牌认证时，动态令牌的令牌号。 认证类型为totp时，会根据用户选择的动态令牌自动生成tokenSN，必填。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1-100",
            "optional": true,
            "field": "authInfo.pin1",
            "description": "<p>动态令牌认证时，动态令牌的 pin1 码。认证类型为totp时，pin1为必填。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1-100",
            "optional": true,
            "field": "authInfo.pin2",
            "description": "<p>动态令牌认证时，动态令牌的 pin2 码。认证类型为totp时，pin2可选。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1-30",
            "optional": true,
            "field": "authInfo.ldap_username",
            "description": "<p>LDAP 认证时使用的用户名 。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1-64",
            "optional": true,
            "field": "authInfo.radius_username",
            "description": "<p>RADIUS 认证时使用的用户名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1-20",
            "optional": true,
            "field": "authInfo.phoneNumber",
            "description": "<p>SMS认证需要手机号码。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-3",
            "optional": true,
            "field": "state",
            "defaultValue": "0",
            "description": "<p>用户状态：0-活动；1-密码过期；2-帐号过期；3-禁用。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extInfo",
            "description": "<p>用户附加信息，格式为{key:value, key:value...}， 其中key为ID(扩展信息表中的id);value为存储的值。 例子：&quot;extInfo&quot;:{&quot;1&quot;:&quot;1&quot;,&quot;2&quot;:&quot;2&quot;}，表示为该用户设置“id=1的扩展信息，值为2,id=2的扩展信息，值为2”。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "extInfo.id",
            "description": "<p>用户附加信息的 ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extra",
            "description": "<p>用户个性化信息。可以用来存储用户自定义筛选条件和用户配置的信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "usergroups",
            "description": "<p>分组信息。 例子：&quot;usergroups&quot;: [{&quot;id&quot;: 1}],表示设置用户的分组为“id=1”的用户组；一个用户可以设置多个用户组， 例如&quot;usergroups&quot;: [{&quot;id&quot;: 1}，{&quot;id&quot; : 2}]。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "usergroups.id",
            "description": "<p>用户组 ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "authToken",
            "description": "<p>动态令牌信息。当用户选择动态令牌认证时，此字段为非必需。 例如：&quot;authToken&quot;:{&quot;id&quot;:1}，设置用户的动态令牌信息为“id=1”的动态令牌。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "authToken.id",
            "description": "<p>动态令牌的 ID。当用户选择动态令牌认证时，此字段为必需</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "validFrom",
            "description": "<p>帐号有效期（从），与validTo属性字段必须同时存在,要么都没有。</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "validTo",
            "description": "<p>帐号有效期（到），与validFrom属性字段必须同时存在,要么都没有。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "[-1,0,30,90,180,365]",
            "optional": true,
            "field": "pwdValidType",
            "defaultValue": "-1",
            "description": "<p>密码有效期配置类型， -1 同系统配置；0 不限；30/90/180/365；指定日期。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "deleted",
            "defaultValue": "false",
            "description": "<p>用户是否被删除，true-已被删除，false-未被删除。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "region",
            "description": "<p>区域。 例子：&quot;region&quot;: { &quot;id&quot;: 1 }，表示设置用户的区域为“id=1”的区域。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    \"loginName\": \"user01\",\n    \"userName\": \"张三\",\n    \"email\": \"123456789@qq.com\",\n    \"role\": { \"id\": 6 },\n    \"state\": \"0\",\n    \"authType\": {\"id\":1},\n    \"password\": \"Admin123456\",\n    \"usergroups\": [{\"id\": 2}],\n    \"authInfo\":{\"passwordType\":\"custom\"}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/user/addUserAcl",
    "title": "增加全局用户登录规则",
    "version": "1.0.0",
    "name": "PostUserAcl",
    "group": "User",
    "description": "<p>增加全局用户登录规则</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "condition",
            "description": "<p>条件 。1 满足 ，2 不满足，3 不启用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "act",
            "description": "<p>动作。accept 允许登录，deny 拒绝登录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "timeRange",
            "description": "<p>时间范围。（如：&quot;w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]&quot;） 注意：对 w（周）的含义，在中国，1-7 分别代表周一~周日；国外则 1-7 分半代表周日-周六。目前按国内做法实现。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ipRange",
            "description": "<p>IP范围。格式为以逗号分隔的多段地址，如：1.1.1.1-1.1.1.100,192.168.4.20,10.10.10.0/24</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "\n{\n\"condition\":1,\n\"act\":\"accept\",\n\"timeRange\":\"w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]\",\n\"ipRange\":\"1.1.1.1-2.1.1.1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"id\":7,\n\"priority\":7,\n\"condition\":1,\n\"act\":\"accept\",\n\"timeRange\":\"w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]\",\n\"ipRange\":\"1.1.1.1-2.1.1.1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/addUserAcl"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/user/navAdd",
    "title": "保存筛选快捷方式",
    "version": "1.0.0",
    "name": "PostUserNav",
    "group": "User",
    "description": "<p>新增一个筛选快捷方式(最多只能保存8个筛选快捷方式)。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>快捷方式的名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "filters",
            "description": "<p>快捷方式的过滤条件集合，filters集合中的元素为filter对象。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>filters中的元素，表示一个过滤条件。一个完整的过滤条件由三个属性拼装组成， 例子：{&quot;attr&quot;: &quot;role.id&quot;, &quot;oper&quot;: &quot;In&quot;, &quot;value&quot;: &quot;3&quot;}，组成的过滤条件为“role.idIn=3”， 表示只查询用户的角色为“id=3”的所有用户。当集合中有多个过滤条件时，用“and”连接。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.attr",
            "description": "<p>过滤条件的过滤字段，详情请参考“获取符合条件的用户列表”API文档中的过滤项信息说明。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.oper",
            "description": "<p>过滤条件的过滤关键字，详情请参考“获取符合条件的用户列表”API文档中的过滤项信息说明。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter.value",
            "description": "<p>过滤条件的过滤值，不能为null；详情请参考“获取符合条件的用户列表”API文档中的过滤项信息说明。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"name\": \"密码管理员\",\n\"filters\": [{\"attr\": \"role.id\", \"oper\": \"In\", \"value\": \"3\"}]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/navAdd"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/extra",
    "title": "修改登录用户的个性化信息(字符会话和图形会话的配置)",
    "version": "1.0.0",
    "group": "User",
    "description": "<p>仅用于修改用户个性化信息(字符会话和图形会话的配置)。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/api/user/extra",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>用户个性化信息</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extra.tui",
            "description": "<p>用户个性化信息中的字符会话配置。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "extra.tui.accessType",
            "description": "<p>字符会话访问方式，可选:putty/scrt/xshell。缺省使用全局设置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extra.gui",
            "description": "<p>用户个性化信息中的图形会话配置。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "extra.gui.customResolution",
            "description": "<p>图形会话分辨率，可设为由空格分隔的多个分辨率组合， 如800x600 1080x920。缺省则使用全局设置。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "extra.gui.accessType",
            "description": "<p>图形会话访问方式，可选：web/mstsc。缺省使用全局设置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "extra.gui.rdpConsole",
            "defaultValue": "false",
            "description": "<p>是否启用Console连接，可选:true-启用， false-不启用Console连接。缺省为不启用。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"extra\":\n  {\n     \"tui\":{\n       \"accessType\":\"xshell\"\n       },\n     \"gui\":{\n       \"customResolution\":\"800x600\",\n       \"accessType\":\"mstsc\",\n       \"rdpConsole\":true\n       }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "name": "PutApiUserExtra",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/extra"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/updateInfo",
    "title": "修改登录用户基本信息（仅包括用户姓名和电子邮箱地址，SMS认证类型的手机号）",
    "version": "1.0.0",
    "group": "User",
    "description": "<p>仅用于登录用户修改个人基本信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/api/user/updateInfo",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..16",
            "optional": true,
            "field": "userName",
            "description": "<p>用户姓名，不能包含空白字符与标点符号。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..16",
            "optional": true,
            "field": "email",
            "description": "<p>电子邮箱地址。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"userName\":\"admin\",\n\"email\": \"admin@shterm.com\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "name": "PutApiUserUpdateinfo",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/updateInfo"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/updatePwd",
    "title": "修改用户密码",
    "version": "1.0.0",
    "group": "User",
    "description": "<p>仅用于native认证方式的用户修改登录密码。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/api/user/updatePwd",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..16",
            "optional": false,
            "field": "originalPwd",
            "description": "<p>原始密码。如果使用本地认证，则必须提供原始密码。如果该用户认证方式不包括native，则无法设置密码。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..16",
            "optional": false,
            "field": "password",
            "description": "<p>新密码。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"originalPwd\":\"admin\",\n\"password\": \"admin12345\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "name": "PutApiUserUpdatepwd",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/updatePwd"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/updateTotp",
    "title": "修改用户动态令牌的配置信息",
    "version": "1.0.0",
    "group": "User",
    "description": "<p>仅用于登录用户修改动态令牌的配置。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/api/user/updateTotp",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "authToken",
            "description": "<p>动态令牌。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "authToken.id",
            "description": "<p>动态令牌的id。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..16",
            "optional": true,
            "field": "authInfo",
            "description": "<p>认证信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "32",
            "optional": true,
            "field": "authInfo.tokenSN",
            "description": "<p>动态令牌的令牌号，系统自动根据所选动态令牌进行赋值，非必填。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "4-32",
            "optional": true,
            "field": "authInfo.pin1",
            "description": "<p>动态令牌的pin1码。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"authToken\":{\"id\":1},\n\"authInfo\": {\n  \"pin1\":\"1234\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "name": "PutApiUserUpdatetotp",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/updateTotp"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/zippsd",
    "title": "修改登录用户的ZIP文件密码",
    "version": "1.0.0",
    "group": "User",
    "description": "<p>仅用于修改用户的ZIP文件密码。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/api/user/zippsd",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": "<p>用户个性化信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "extra.zipPsd",
            "description": "<p>{8-32}]  用户个性化信息中保存的ZIP文件密码。8-32位且不可包含空白字符。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"extra\":\n  {\n     \"zipPsd\":\"admin123\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "name": "PutApiUserZippsd",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/zippsd"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/:id",
    "title": "修改用户",
    "version": "1.0.0",
    "name": "PutUser",
    "group": "User",
    "description": "<p>修改用户的信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/api/user/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户 ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..128",
            "optional": true,
            "field": "name",
            "description": "<p>附加信息名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0..512",
            "optional": true,
            "field": "description",
            "description": "<p>扩展信息说明。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "required",
            "defaultValue": "false",
            "description": "<p>是否必须：true-必须，false-非必须。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "extra",
            "description": "<p>extra 每种附加信息可能需要特殊配置的内容。 type=0时，length-表示字符串长度；type=1时，min-数字的最小值，max-数字的最大值； type=2时，start-开始日期，end-结束日期；type=3时，options-可选值。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"userName\": \"张三\",\n\"password\": \"admin\",\n\"role\": {\"id\": 2},\n\"email\": \"user1@mycompany.com\",\n\"state\": 0,\n\"authType\": { \"id\": 1 },\n\"authInfo\": { \"ldap_username\": \"user_1\" },\n\"usergroups\": [{\"id\": 1}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/updateUserAcl/:id",
    "title": "修改全局用户登录规则",
    "version": "1.0.0",
    "name": "PutUserAcl",
    "group": "User",
    "description": "<p>修改用户登录规则</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>全局用户登录规则的ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>全局用户登录规则的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "condition",
            "description": "<p>条件 。1 满足 ，2 不满足，3 不启用</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "act",
            "description": "<p>动作。accept 允许登录，deny 拒绝登录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "timeRange",
            "description": "<p>时间范围。（如：&quot;w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]&quot;） 注意：对 w（周）的含义，在中国，1-7 分别代表周一~周日；国外则 1-7 分半代表周日-周六。目前按国内做法实现。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ipRange",
            "description": "<p>IP范围。格式为以逗号分隔的多段地址，如：1.1.1.1-1.1.1.100,192.168.4.20,10.10.10.0/24</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "\n{\n\"id\":7,\n\"condition\":1,\n\"act\":\"accept\",\n\"timeRange\":\"w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]\",\n\"ipRange\":\"1.1.1.1-2.2.2.2\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户登录规则不存在404错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/updateUserAcl/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/upload/:type",
    "title": "文件上传",
    "version": "1.0.0",
    "name": "Upload",
    "group": "User",
    "description": "<p>上传文件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://shterm_host:8080/shterm/upload/user",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>上传处理类型参数： (1)user：导入用户之前的文件上传；(2)dev：导入设备之前的文件上传；(3)file，普通文件上传。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Disposition",
            "description": "<p>文件上传表单信息。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>文件上传方式。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n    ------WebKitFormBoundary3iYspvZ7sFkQAGyn\n    Content-Disposition: form-data; name=\"myfile\"; filename=\"export_2976847122436878219.xls\"\n    Content-Type: application/vnd.ms-excel\n    ------WebKitFormBoundary3iYspvZ7sFkQAGyn--\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>读取的表格中有效数据行数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>读取成功的所有数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Sheet0",
            "description": "<p>工作簿的表sheet的名称，工作簿中可以有多张表sheet</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginName",
            "description": "<p>登录名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "1",
            "description": "<p>附件信息1的名字，例如：&quot;1&quot;:&quot;附加信息内容1&quot;，表示该用户name为“1”的附加信息的值为“附加信息内容1”</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "2",
            "description": "<p>附件信息2的名字，同上</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>附加信息的增加，表格模板的字段随之变化，具体字段含义可参考&quot;获取用户信息api文档说明&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n    \"total\":6,\n    \"content\":\n    [\n        {\"loginName\":\"user02\",\"userName\":\"user02\",\"email\":\"123456789@qq.com\",\"1\":\"附加信息1\",\"2\":\"附加信息2\"},\n        {\"loginName\":\"user03\",\"userName\":\"user03\",\"email\":\"123456789@qq.com\",\"1\":\"附加信息1\",\"2\":\"附加信息2\"},\n        {\"loginName\":\"user04\",\"userName\":\"user04\",\"email\":\"123456789@qq.com\",\"1\":\"附加信息1\",\"2\":\"附加信息2\"},\n        {\"loginName\":\"user05\",\"userName\":\"user05\",\"email\":\"123456789@qq.com\",\"1\":\"附加信息1\",\"2\":\"附加信息2\"},\n        {\"loginName\":\"user06\",\"userName\":\"user06\",\"email\":\"123456789@qq.com\",\"1\":\"附加信息1\",\"2\":\"附加信息2\"},\n        {\"loginName\":\"user07\",\"userName\":\"user07\",\"email\":\"123456789@qq.com\",\"1\":\"附加信息1\",\"2\":\"附加信息2\"}\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/common/web/FileUploadController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/upload/:type"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/user/addDeviceToFavorite",
    "title": "将访问设备使用的账号，协议 加入收藏",
    "version": "1.0.0",
    "name": "addDeviceToFavorite",
    "group": "User",
    "description": "<p>将访问设备使用的账号，协议 加入收藏</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "\ncurl -i -X POST -H 'Content-Type: application/json' -d '{device: 39, account: \"root\", proto: \"rdp\"}' http://localhost:8080/shterm/api/user/addDeviceToFavorite",
          "type": "curl"
        },
        {
          "title": "请求消息体示例",
          "content": "{\ndevice: 39,\naccount: \"root\",\nproto: \"rdp\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "device",
            "description": "<p>设备ID。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号名。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "proto",
            "description": "<p>协议名。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/addDeviceToFavorite"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/worksheet/task/submit/:taskId",
    "title": "审批工单",
    "version": "1.0.0",
    "name": "Approval",
    "group": "WorkSheet",
    "description": "<p>审批人审批工单(此处的操作人即为最终的审批人)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>工单的任务id,任务id通过流程id获取,在获取工单详情时会返回当前流程的任务id</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "sform",
            "description": "<p>审批结果 {id:&quot;approve&quot;,value:&quot;yes&quot;} : yes为审批通过,no为审批拒绝</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n {\"id\": \"approve\",  \"value\": \"yes\"}\n]",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/task/submit/72607",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/worksheet/task/submit/:taskId"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/worksheet/delete/:type/:id",
    "title": "删除工单模板或者草稿",
    "version": "1.0.0",
    "name": "DeleteDraftOrTemplate",
    "group": "WorkSheet",
    "description": "<p>删除工单模板或者草稿</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>删除类型    template 模板; draft 草稿</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>模板或者草稿对应的id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/worksheet/delete/template/4",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功返回204",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/worksheet/delete/:type/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/worksheet/exportSel",
    "title": "导出密码工单申请的密码文件",
    "version": "1.0.0",
    "name": "ExportPasswordZip",
    "group": "WorkSheet",
    "description": "<p>导出选中的密码文件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>导出格式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "worksheetInstanceId",
            "description": "<p>工单id,用于查询相应的设备帐号及密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipPassword",
            "description": "<p>压缩密码,用于加密下载文件</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n\"worksheetInstanceId\": \"25001\",\n\"zipPassword\": \"QYHJ90\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "http://localhost:8080/shterm/api/worksheet/exportSel?_exportFormat=EXCEL",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功返回下载路径",
          "content": "/shterm/fileDownload?id=5721089950699059501",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/worksheet/exportSel"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/worksheet/instance/detail/:instanceId",
    "title": "查询指定工单详情",
    "version": "1.0.0",
    "name": "GetWorksheetDetail",
    "group": "WorkSheet",
    "description": "<p>查询指定工单详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instanceId",
            "description": "<p>工单id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/worksheet/instance/detail/72501",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "WorksheetInstanceDetail",
            "optional": false,
            "field": "detail",
            "description": "<p>工单详情信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instanceId",
            "description": "<p>工单id</p>"
          }
        ],
        "String": [
          {
            "group": "String",
            "optional": false,
            "field": "worksheetType",
            "description": "<p>工单类型</p>"
          },
          {
            "group": "String",
            "optional": false,
            "field": "instanceStatus",
            "description": "<p>工单状态, 0 进行中; 1 已完成</p>"
          }
        ],
        "Object": [
          {
            "group": "Object",
            "optional": false,
            "field": "currTaskFormInfo",
            "description": "<p>当前任务信息,包含需要审批时需要的taskId</p>"
          },
          {
            "group": "Object",
            "optional": false,
            "field": "hisTaskFormInfoList",
            "description": "<p>工单的历史任务信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 返回用户的已办工单",
          "content": "HTTP/1.1 200 OK\n{\n     instanceId : \"72501\",\n     instanceStatus : 0,\n     worksheetType : \"applyPassword\",\n     hisTaskFormInfoList : []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/worksheet/instance/detail/:instanceId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/worksheet/complete/list",
    "title": "查询用户已办工单列表",
    "version": "1.0.0",
    "name": "ListCompleteWorksheet",
    "group": "WorkSheet",
    "description": "<p>查询用户已办工单列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "WorksheetListFilter",
            "optional": false,
            "field": "filter",
            "description": "<p>过滤条件 filter.type 过滤的工单类型; filter.search,快速过滤条件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/worksheet/complete/list?page=0&size=10&type=applyDevProcess&search=1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 返回用户的已办工单",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/worksheet/complete/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/worksheet/draft/list",
    "title": "查询工单草稿列表",
    "version": "1.0.0",
    "name": "ListDraft",
    "group": "WorkSheet",
    "description": "<p>查询工单草稿列表,返回属于查询人的工单草稿列表</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/worksheet/draft/list",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功返回属于操作人的草稿列表",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/worksheet/draft/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/worksheet/todo/list",
    "title": "查询用户待办工单列表",
    "version": "1.0.0",
    "name": "ListTodoWorksheet",
    "group": "WorkSheet",
    "description": "<p>查询用户待办工单列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "WorksheetListFilter",
            "optional": false,
            "field": "filter",
            "description": "<p>过滤条件 filter.type 过滤的工单类型; filter.search,快速过滤条件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/worksheet/todo/list?page=0&size=10",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 返回用户的待办工单",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/worksheet/todo/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/worksheet/list",
    "title": "查询已经部署的工单的定义",
    "version": "1.0.0",
    "name": "ListWorkSheetType",
    "group": "WorkSheet",
    "description": "<p>查询已经部署的工单的定义</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "http://localhost:8080/shterm/api/worksheet/list",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功返回工单分类列表",
          "content": "HTTP/1.1 200 OK\n[{\"key\":\"accountManager\",\"name\":\"帐号管理\"},\n {\"key\":\"applyDevProcess\",\"name\":\"申请资源\"},\n {\"key\":\"applyPassword\",\"name\":\"申请密码\"},\n {\"key\":\"outsidersApplyDev\",\"name\":\"外来人员申请资源\"},\n {\"key\":\"\",\"name\":\"所有工单类型\"}]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/worksheet/list"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/worksheet/draft",
    "title": "新增工单草稿",
    "version": "1.0.0",
    "name": "SaveDraft",
    "group": "WorkSheet",
    "description": "<p>新增工单草稿(数据传参格式参考新增工单模板API)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "WorksheetDraft",
            "optional": false,
            "field": "draft",
            "description": "<p>待保存的工单草稿,draft至少包含工单标题信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>草稿标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>草稿保存的工单类型，如applyDevProcess</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>保存工单此次填写过的数据 如:[{&quot;id&quot;: &quot;title&quot;, &quot;name&quot;: &quot;工单标题&quot;, formType: &quot;string&quot;, &quot;value&quot; : &quot;111&quot;},...]</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/worksheet/draft",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n{id: 2}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/worksheet/draft"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/worksheet/template",
    "title": "新增工单模板",
    "version": "1.0.0",
    "name": "SaveTemplate",
    "group": "WorkSheet",
    "description": "<p>新增工单模板</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "WorksheetTemplate",
            "optional": false,
            "field": "template",
            "description": "<p>待保存的工单模板,工单模板至少包含工单标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>模板标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>模板保存的工单类型,如applyDevProcess</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>保存工单此次填写过的数据 content中的内容格式由api/worksheet/getform/start/:dkey 获取指定类型工单的表单信息得到,若要添加数据,则在各个属性 值下添加相应的value值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n  \"title\": \"模板标题\",\n  \"type\": \"applyDevProcess\",\n  \"content\": [\n      {\n          \"id\": \"title\",\n         \"name\": \"工单标题\",\n          \"formType\": \"string\",\n          \"readOnly\": false,\n          \"required\": true,\n          \"value\":\"模板标题\"\n      },\n      {\n         \"id\": \"optype\",\n          \"name\": \"操作类型\",\n          \"formType\": \"enum\",\n         \"enumFormObjectList\": [\n             {\n                 \"id\": \"inspection\",\n                 \"name\": \"定期巡检\"\n             },\n             {\n                 \"id\": \"maintenance\",\n                 \"name\": \"日常维护\"\n             }\n          ],\n          \"readOnly\": false,\n          \"required\": true\n      },\n      {\n          \"id\": \"reason\",\n          \"name\": \"申请理由\",\n          \"formType\": \"textarea\",\n          \"readOnly\": false,\n          \"required\": false\n      },\n      {\n          \"id\": \"startTime\",\n          \"name\": \"开始时间\",\n          \"value\": \"2017-12-27 17:30\",\n          \"formType\": \"date\",\n          \"readOnly\": false,\n          \"required\": true,\n          \"datePattern\": \"yyyy-MM-dd HH:mm\"\n      },\n      {\n          \"id\": \"endTime\",\n          \"name\": \"结束时间\",\n          \"value\": \"2017-12-28 17:30\",\n          \"formType\": \"date\",\n          \"readOnly\": false,\n          \"required\": true,\n          \"datePattern\": \"yyyy-MM-dd HH:mm\"\n      },\n      {\n          \"id\": \"regionId\",\n          \"name\": \"区域\",\n          \"formType\": \"string\",\n          \"readOnly\": false,\n          \"required\": false\n      },\n      {\n          \"id\": \"devs\",\n          \"name\": \"资源\",\n          \"formType\": \"devSelector\",\n          \"readOnly\": false,\n          \"required\": true\n      },\n      {\n          \"id\": \"users\",\n          \"name\": \"使用人\",\n          \"formType\": \"userSelector\",\n          \"readOnly\": false,\n          \"required\": true\n      },\n      {\n          \"id\": \"approvers\",\n          \"name\": \"审批人\",\n          \"formType\": \"string\",\n          \"readOnly\": false,\n          \"required\": false\n      }\n  ]\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/worksheet/template",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 Created\n{id: 6}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/worksheet/template"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/worksheet/draft/start/:id",
    "title": "通过草稿提交工单",
    "version": "1.0.0",
    "name": "StartDraft",
    "group": "WorkSheet",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>对应的草稿id,用于查询草稿</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>工单标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>申请理由</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "optype",
            "description": "<p>操作类型:inspection 定期巡检; maintenance 日常维护</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "devs",
            "description": "<p>申请的设备帐号: [{&quot;id&quot;:3,&quot;a&quot;:&quot;root&quot;}] id表示设备id,a对应设备上帐号</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "users",
            "description": "<p>使用人: [{&quot;id&quot;:101}] id表示此次工单申请的使用人</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n {\"id\": \"title\",  \"value\": \"xxdsd\"},\n {\"id\": \"reason\"},\n {\"id\": \"startTime\",  \"value\": \"2017-10-18 07:51:00\"},\n {\"id\": \"endTime\",  \"value\": \"2017-10-19 09:51:00\"},\n {\"id\": \"optype\",  \"value\": \"inspection\"},\n {\"id\": \"type\",  \"value\": \"applyDevProcess\"},\n {\"id\": \"devs\",  \"value\": \"[{\\\"id\\\":3,\\\"a\\\":\\\"root\\\"}]\"},\n {\"id\": \"users\", \"value\": \"[{\\\"id\\\":101}]\"}\n]",
          "type": "json"
        }
      ]
    },
    "description": "<p>根据传入的工单草稿Id,提交当前草稿,当草稿完成后删除该工单草稿对象.</p>",
    "examples": [
      {
        "title": "请求示例,",
        "content": "curl -i http://localhost:8080/shterm/api/worksheet/draft/start/4",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "201 Created ,返回该工单时实例ID",
          "content": "HTTP/1.1 201 Created\n{id: \"35066\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "400 Bad Request 草稿不存在",
          "content": "\"Not find draft\"",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shtermapi/worksheet/draft/start/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/worksheet/getform/start/:dkey",
    "title": "获取指定类型工单的表单信息",
    "version": "1.0.0",
    "name": "getStartForm",
    "group": "WorkSheet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dkey",
            "description": "<p>工单类型 (applyDevProcess-申请设备; applyPassword 申请密码; outsidersApplyDev 外来人员申请)</p>"
          }
        ],
        "路径参数": [
          {
            "group": "路径参数",
            "type": "String",
            "optional": false,
            "field": "dkey",
            "description": "<p>指定的工单类型</p>"
          }
        ]
      }
    },
    "description": "<p>获取指定类型工单的表单信息。</p>",
    "examples": [
      {
        "title": "请求示例, 申请资源类型的工单",
        "content": "curl -i http://localhost:8080/shterm/api/worksheet/getform/start/applyDevProcess",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应  HTTP/1.1 200 OK 说明",
          "content": "返回类型为数组类型的json对象, 数组中的每个值代表该工单中的一个属性值.",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shtermapi/worksheet/getform/start/:dkey"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/worksheet/init",
    "title": "获取内置工单",
    "version": "1.0.0",
    "name": "init",
    "group": "WorkSheet",
    "description": "<p>获取工单初始页面,返回了内置工单类型,内置工单的模板属性,以及模板对应的表单数据。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost:8080/shterm/api/worksheet/init",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"templates\":[],\n        \"name\":\"帐号管理\",\n        \"description\":null,\n        \"id\":\"accountManager\"\n    },\n    {\n        \"templates\":[],\n        \"name\":\"外来人员申请资源\",\n        \"description\":null,\n        \"id\":\"outsidersApplyDev\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shtermapi/worksheet/init"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/worksheet/instance/start/:dkey",
    "title": "提交工单流程",
    "version": "1.0.0",
    "name": "start",
    "group": "WorkSheet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dkey",
            "description": "<p>(applyDevProcess; applyPassword; outsidersApplyDev) 表示不同类型的工单</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>工单标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>申请理由</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "optype",
            "description": "<p>操作类型:inspection 定期巡检; maintenance 日常维护</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "devs",
            "description": "<p>申请的设备帐号: [{&quot;id&quot;:3,&quot;a&quot;:&quot;root&quot;}] id表示设备id,a对应设备上帐号</p>"
          },
          {
            "group": "Parameter",
            "type": "Json",
            "optional": false,
            "field": "users",
            "description": "<p>使用人: [{&quot;id&quot;:101}] id表示此次工单申请的使用人</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n {\"id\": \"title\",  \"value\": \"xxdsd\"},\n {\"id\": \"reason\"},\n {\"id\": \"startTime\",  \"value\": \"2017-10-18 07:51:00\"},\n {\"id\": \"endTime\",  \"value\": \"2017-10-19 09:51:00\"},\n {\"id\": \"optype\",  \"value\": \"inspection\"},\n {\"id\": \"type\",  \"value\": \"applyDevProcess\"},\n {\"id\": \"devs\",  \"value\": \"[{\\\"id\\\":3,\\\"a\\\":\\\"root\\\"}]\"},\n {\"id\": \"users\", \"value\": \"[{\\\"id\\\":101}]\"}\n]",
          "type": "json"
        }
      ]
    },
    "description": "<p>根据工单类型的key值,以及传入的工单属性值,提交一个新工单.</p>",
    "examples": [
      {
        "title": "请求示例,",
        "content": "curl -i http://localhost:8080/shterm/api/worksheet/instance/start/applyDevProcess",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "201 Created 成功回应 ,返回该工单时实例ID",
          "content": "HTTP/1.1 201 Created\n{id: \"35066\"}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shtermapi/worksheet/instance/start/:dkey"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/worksheet/instance/startOutSiders",
    "title": "外来人员提交工单接口",
    "version": "1.0.0",
    "name": "startOutSiders",
    "group": "WorkSheet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "form",
            "description": "<p>欲提交的表单信息,包含WorksheetFormInfo以及Outsiders, WorksheetForm是工单的基本信息,包含title,reason,optype等属性 outsiders是临时用户信息,用于工单生成临时用户, 包含userName(用户名),extra.factory(厂商),authInfo.passwordType(密码类型),password(密码) {&quot;outsiders&quot; :[ { &quot;authInfo&quot;:{&quot;passwordType&quot;:&quot;custom&quot;}, &quot;extra&quot;:{&quot;factory&quot;:&quot;shadsad&quot;}, &quot;password&quot;:&quot;111111&quot;, &quot;userName&quot;:&quot;sdadad&quot; }], &quot;sform&quot;:[ {&quot;id&quot;: &quot;title&quot;, &quot;value&quot;: &quot;sdasda&quot;}, {&quot;id&quot;: &quot;reason&quot;}, {&quot;id&quot;: &quot;startTime&quot;, &quot;value&quot;: &quot;2017-10-17 19:24&quot;}, {&quot;id&quot;: &quot;endTime&quot;, &quot;value&quot;: &quot;2017-10-18 19:24&quot;}, {&quot;id&quot;: &quot;optype&quot;, &quot;value&quot;: &quot;inspection&quot;}, {&quot;id&quot;:&quot;optype&quot;,&quot;value&quot;:&quot;inspection&quot;}, {&quot;id&quot;: &quot;type&quot;, &quot;value&quot;: &quot;outsidersApplyDev&quot;}, {&quot;id&quot;: &quot;devs&quot;, &quot;value&quot;: &quot;[{'id':3,'a':'root'}]&quot;}, {&quot;id&quot;: &quot;users&quot;, &quot;value&quot;: &quot;[{'id':1}]&quot;}, {&quot;id&quot;: &quot;notifiers&quot;, &quot;value&quot;: &quot;1&quot;} ]}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\"outsiders\" :[\n   {\n      \"authInfo\":{\"passwordType\":\"custom\"},\n      \"extra\":{\"factory\":\"shadsad\"},\n      \"password\":\"111111\",\n      \"userName\":\"sdadad\"\n    }],\n \"sform\":[\n         {\"id\": \"title\", \"value\": \"sdasda\"},\n         {\"id\": \"reason\"},\n         {\"id\": \"startTime\", \"value\": \"2017-10-17 19:24\"},\n         {\"id\": \"endTime\", \"value\": \"2017-10-18 19:24\"},\n         {\"id\": \"optype\", \"value\": \"inspection\"},\n         {\"id\": \"type\", \"value\": \"outsidersApplyDev\"},\n         {\"id\": \"devs\", \"value\": \"[{\\\"id\\\":3,\\\"a\\\":\\\"root\\\"}]},\n         {\"id\": \"users\", \"value\": \"[{\\\"id\\\":101}]\"},\n         {\"id\": \"notifiers\", \"value\": \"1\"}\n]}",
          "type": "json"
        }
      ]
    },
    "description": "<p>根据传参自动生成临时用户并校验，校验通过则提交外来人员工单</p>",
    "success": {
      "examples": [
        {
          "title": "成功回应 ,返回该工单时实例ID",
          "content": "HTTP/1.1 201 Created\n{id: \"270203\"}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/worksheet/web/api/WorksheetController.java",
    "groupTitle": "WorkSheet",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shtermapi/worksheet/instance/startOutSiders"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/loginRole",
    "title": "获取当前登录用户的角色信息",
    "version": "1.0.0",
    "name": "GetLoginRole",
    "group": "WorkSpace",
    "description": "<p>查询当前登录用户的角色信息。</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "\ncurl -i http://localhost:8080/shterm/api/user/loginRole",
          "type": "curl"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>描述。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "permissions",
            "description": "<p>角色包含的权限。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\"id\":1,\n \"name\":\"ROLE_ADMIN\",\n \"permissions\":[\"ROLE_OPER_USER\",\"ROLE_OPER_RESOURCE\",\n     \"ROLE_OPER_PRIVILEGE\",\"ROLE_OPER_WORKSHEET\",\"ROLE_OPER_SETTINGS\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "WorkSpace",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/loginRole"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/loginService",
    "title": "查询当前登录用户服务信息列表",
    "version": "1.0.0",
    "name": "GetLoginService",
    "group": "WorkSpace",
    "description": "<p>查询当前登录用户的服务信息列表</p>",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "\ncurl -i http://localhost:8080/shterm/api/user/loginService",
          "type": "curl"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>服务ID。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>发布服务名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>发布服务对应的角色。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "type",
            "description": "<p>发布服务类型。 任务，1 工单，2 其他。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "order",
            "description": "<p>发布服务顺序。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sourceType",
            "description": "<p>来源。0 预定义，1 用户自定义。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>服务的URL。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{[{\"id\":7,\"name\":\"BatchOperate\",\"role\":\"ROLE_SERV_BATCHOPERATE\",\"type\":2,\"order\":7,\n\"sourceType\":0,\"url\":\"/batchoperate\"},\n{\"id\":2,\"name\":\"DeviceApply\",\"role\":\"ROLE_SERV_DEVICEAPPLY\",\"type\":1,\"serviceId\":1,\n\"order\":2,\"sourceType\":0,\"url\":\"/device/apply\"},\n{\"id\":8,\"name\":\"Report\",\"role\":\"ROLE_SERV_REPORT\",\"type\":2,\"order\":8,\"sourceType\":0,\n\"url\":\"/report\"},\n{\"id\":9,\"name\":\"Statistic\",\"role\":\"ROLE_SERV_STATISTIC\",\"type\":2,\"order\":9,\n\"sourceType\":0,\"url\":\"/statistic\"},\n{\"id\":1,\"name\":\"DeviceAccess\",\"role\":\"ROLE_SERV_DEVICEACCESS\",\"type\":2,\"order\":1,\n\"sourceType\":0,\"url\":\"/device/access\"},\n{\"id\":3,\"name\":\"Audit\",\"role\":\"ROLE_SERV_AUDIT\",\"type\":2,\"order\":3,\"sourceType\":0,\n\"url\":\"/audit\"},\n{\"id\":5,\"name\":\"Inspection\",\"role\":\"ROLE_SERV_INSPECTION\",\"type\":0,\"serviceId\":2,\n\"order\":5,\"sourceType\":0,\"url\":\"/device/inspection\"},\n{\"id\":4,\"name\":\"ChangePwd\",\"role\":\"ROLE_SERV_CHANGEPWD\",\"type\":0,\"serviceId\":1,\n\"order\":4,\"sourceType\":0,\"url\":\"/device/accountmanage\"},\n{\"id\":6,\"name\":\"Backup\",\"role\":\"ROLE_SERV_BACKUP\",\"type\":0,\"serviceId\":3,\"order\":6,\n\"sourceType\":0,\"url\":\"/device/backup\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "WorkSpace",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/loginService"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/current",
    "title": "获取当前登录用户(不包含各种密码)",
    "version": "1.0.0",
    "name": "GetLoginUserInfo",
    "group": "WorkSpace",
    "description": "<p>获取当前登录用户</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>当前登录用户的ID。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginName",
            "description": "<p>当前登录用户的登录名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>当前登录用户的用户名。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"id\":2,\n\"loginName\":\"test\",\n\"userName\":\"测试\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "WorkSpace",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/current"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/user/current",
    "title": "获取当前登录用户(包含zipPsd密码，用于配置密码管理)",
    "version": "1.0.0",
    "name": "GetLoginUserInfo",
    "group": "WorkSpace",
    "description": "<p>获取当前登录用户</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>当前登录用户的ID。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginName",
            "description": "<p>当前登录用户的登录名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>当前登录用户的用户名。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"id\":2,\n\"loginName\":\"test\",\n\"userName\":\"测试\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/UserController.java",
    "groupTitle": "WorkSpace",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/user/current"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/logintmpl/addLoginRuleTmpl",
    "title": "增加登录模板",
    "version": "1.0.0",
    "name": "addLoginRuleTmpl",
    "group": "loginRuleTemplate",
    "description": "<p>增加登录模板。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/logintmpl/addLoginRuleTmpl",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 OK\n{\n \"id\": 1,\n \"name\": \"LoginRuleTmpl1\",\n \"defaultStrategy\": 1,\n \"rules\": [\n        {\"priority\": 0,\"condition\": 1,\"action\": \"accept\",\n        \"timeRange\": \"w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]\",\n        \"ipRange\": \"1.1.1.1-1.1.1.100,192.168.4.20,10.10.10.0/24\"}\n ],\n \"confs\": {...}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/LoginTmplController.java",
    "groupTitle": "loginRuleTemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/logintmpl/addLoginRuleTmpl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>模板名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "defaultStrategy",
            "defaultValue": "1",
            "description": "<p>缺省处理策略。0-禁止登录, 1-允许登录。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isDefault",
            "description": "<p>是否缺省，系统在没有选择登录规则模板时，缺省使用此模板。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "confs",
            "description": "<p>高级权限配置，格式为: &quot;confs&quot;: {&quot;control&quot;:{&quot;diskmap&quot;:0,...}} --子字段control中， nosend_cuttext剪切板上行(未配置1，配置为0)，noaccept_cuttext剪切板下行（未配置1，配置0 ， diskmap磁盘映射（未配置为0，配置为1）。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"name\": \"LoginRuleTmpl1\",\n \"defaultStrategy\": 1,\n \"confs\": {\"control\":{\"diskmap\":0,...}}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/logintmpl/deleteLoginRuleById/:id",
    "title": "删除登录规则（通过id）",
    "version": "1.0.0",
    "name": "deleteLoginRuleById",
    "group": "loginRuleTemplate",
    "description": "<p>通过id删除命令规则。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/logintmpl/deleteLoginRuleById/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>命令规则id</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "指定对象不存在或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/LoginTmplController.java",
    "groupTitle": "loginRuleTemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/logintmpl/deleteLoginRuleById/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/logintmpl/deleteLoginRuleTmplById/:id",
    "title": "删除登录模板（通过id）",
    "version": "1.0.0",
    "name": "deleteLoginRuleTmplById",
    "group": "loginRuleTemplate",
    "description": "<p>通过id删除登录模板，级联删除登录规则。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/logintmpl/deleteLoginRuleTmplById/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>登录模板id</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "指定对象不存在或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/LoginTmplController.java",
    "groupTitle": "loginRuleTemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/logintmpl/deleteLoginRuleTmplById/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/logintmpl/getAllLoginRuleTmpl",
    "title": "获取符合条件的登录模板列表",
    "version": "1.0.0",
    "name": "getAllLoginRuleTmpl",
    "group": "loginRuleTemplate",
    "description": "<p>根据查询条件，返回符合条件的登录模板列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/logintmpl/getAllLoginRuleTmpl?nameContains=template1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\"content\": [{\n \"id\": 1,\n \"name\": \"登录模板1\",\n \"defaultStrategy\": 1\n }\n ......\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/LoginTmplController.java",
    "groupTitle": "loginRuleTemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/logintmpl/getAllLoginRuleTmpl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/logintmpl/getLoginRuleTmplById/:id",
    "title": "获取登录模板（根据id）",
    "version": "1.0.0",
    "name": "getLoginRuleTmplById",
    "group": "loginRuleTemplate",
    "description": "<p>根据id获取登录模板。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/logintmpl/getLoginRuleTmplById/1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 OK\n{\n \"id\": 1,\n \"name\": \"loginRuleTmpl1\",\n \"defaultStrategy\": 1,\n \"rules\": [\n     {\"priority\": 0,\"condition\": 1,\"action\": \"accept\",\n     \"timeRange\": \"w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]\",\n     \"ipRange\": \"1.1.1.1-1.1.1.100,192.168.4.20,10.10.10.0/24\"}\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "登录模板不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/LoginTmplController.java",
    "groupTitle": "loginRuleTemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/logintmpl/getLoginRuleTmplById/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/logintmpl/getLoginRulesByTmpl",
    "title": "查询登录模板的规则列表",
    "version": "1.0.0",
    "name": "getLoginRulesByTmpl",
    "group": "loginRuleTemplate",
    "description": "<p>根据模板id，查询模板的规则列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/logintmpl/getLoginRulesByTmpl?tmplId=1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "tmplId",
            "description": "<p>所请求模板的id</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "{\"content\": [\n {\n     \"template\": {\"id\": 1},\n     \"condition\": 1,\n     \"action\": \"accept\",\n     \"timeRange\": \"w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]\",\n     \"ipRange\": \"1.1.1.1-1.1.1.100,192.168.4.20,10.10.10.0/24\"\n }],\n ......\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/LoginTmplController.java",
    "groupTitle": "loginRuleTemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/logintmpl/getLoginRulesByTmpl"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/logintmpl/saveLoginRuleTmpl/:id",
    "title": "修改登录模板",
    "version": "1.0.0",
    "name": "saveLoginRuleTmpl",
    "group": "loginRuleTemplate",
    "description": "<p>修改登录模板。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/logintmpl/saveLoginRuleTmpl/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>登录模板id</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>模板名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "defaultStrategy",
            "defaultValue": "1",
            "description": "<p>缺省处理策略。0-禁止登录 1-允许登录。</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isDefault",
            "description": "<p>是否缺省，系统在没有选择登录规则模板时，缺省使用此模板。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "confs",
            "description": "<p>高级权限配置，格式为: &quot;confs&quot;: {&quot;control&quot;:{&quot;diskmap&quot;:0,...}} --子字段control中， nosend_cuttext剪切板上行(未配置1，配置为0)，noaccept_cuttext剪切板下行（未配置1，配置0 ， diskmap磁盘映射（未配置为0，配置为1）。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"name\": \"LoginRuleTmpl1\",\n \"defaultStrategy\": 1,\n \"confs\": {\"control\":{\"diskmap\":0,...}}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "登录模板不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/LoginTmplController.java",
    "groupTitle": "loginRuleTemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/logintmpl/saveLoginRuleTmpl/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/cmdchk/addCmdChk",
    "title": "增加命令复核",
    "version": "1.0.0",
    "name": "addCmdChk",
    "group": "risk_cmd_check",
    "description": "<p>增加命令复核。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/cmdchk/addCmdChk",
        "type": "curl"
      }
    ],
    "filename": "java/com/shterm/device/web/api/CmdCheckController.java",
    "groupTitle": "risk_cmd_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/cmdchk/addCmdChk"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>命令复核名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "chkUsers",
            "description": "<p>复核用户，字符串数组。数据格式：&quot;chkUsers&quot;: [&quot;admin&quot;,&quot;user1&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "cmdRuleTemplate",
            "description": "<p>命令模板。数据格式： &quot;cmdRuleTemplate&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;xx&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>访问配置。数据格式：&quot;configurations&quot;: { &quot;users&quot;: [ 1, 2, 3], &quot;devs&quot;: [4, 5, 6], &quot;accounts&quot;: [ &quot;root&quot;, &quot;www&quot; ] }，其中users数据为用户id数组，devs为设备id数组， accounts为设备访问帐号数组，帐号可以取各设备的帐号并集。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n  \"name\": \"命令复核1\",\n  \"chkUsers\": [\"admin\",\"users1\"],\n  \"cmdRuleTemplate\": {\"id\": 1,\"name\": \"命令模板1\"},\n  \"configurations\": { \"users\": [ 1, 2, 3], \"devs\": [4, 5, 6], \"accounts\": [ \"root\", \"www\" ] }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 OK\n{\n   \"name\": \"命令复核1\",\n   \"chkUsers\": [\"admin\",\"users1\"],\n   \"cmdRuleTemplate\": {\"id\": 1,\"name\": \"命令模板1\"},\n   \"configurations\": { \"users\": [ 1, 2, 3], \"devs\": [4, 5, 6], \"accounts\": [ \"root\", \"www\" ] }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/cmdchk/downPriority",
    "title": "降低优先级",
    "version": "1.0.0",
    "name": "downPriority",
    "group": "risk_cmd_check",
    "description": "<p>降低高危命令优先级</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/cmdchk/downPriority",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n{\"id\": 1,\"priority\": 1},\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/CmdCheckController.java",
    "groupTitle": "risk_cmd_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/cmdchk/downPriority"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/cmdchk/:id",
    "title": "获取命令复核列表",
    "version": "1.0.0",
    "name": "getCmdChk",
    "group": "risk_cmd_check",
    "description": "<p>获取命令复核。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/cmdchk/1",
        "type": "curl"
      }
    ],
    "filename": "java/com/shterm/device/web/api/CmdCheckController.java",
    "groupTitle": "risk_cmd_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/cmdchk/:id"
      }
    ],
    "parameter": {
      "fields": {
        "实体查询参数": [
          {
            "group": "实体查询参数",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>命令复核名称。</p>"
          },
          {
            "group": "实体查询参数",
            "type": "String[]",
            "optional": false,
            "field": "chkUsers",
            "description": "<p>复核用户，字符串数组。数据格式：&quot;chkUsers&quot;: [&quot;admin&quot;,&quot;user1&quot;]</p>"
          },
          {
            "group": "实体查询参数",
            "type": "Object",
            "optional": false,
            "field": "cmdRuleTemplate",
            "description": "<p>命令模板。数据格式： &quot;cmdRuleTemplate&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;xx&quot;}</p>"
          },
          {
            "group": "实体查询参数",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>访问配置。数据格式：&quot;configurations&quot;: { &quot;users&quot;: [ 1, 2, 3], &quot;devs&quot;: [4, 5, 6], &quot;accounts&quot;: [ &quot;root&quot;, &quot;www&quot; ] }，其中users数据为用户id数组， devs为设备id数组，accounts为设备访问帐号数组，帐号可以取各设备的帐号并集。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "响应消息体示例",
          "content": "{\n   \"id\": 1,\n   \"name\": \"命令复核1\",\n   \"chkUsers\": [\"admin\",\"users1\"],\n   \"cmdRuleTemplate\": {\"id\": 1,\"name\": \"命令模板1\"},\n   \"configurations\": { \"users\": [ 1, 2, 3], \"devs\": [4, 5, 6], \"accounts\": [ \"root\", \"www\" ] }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/cmdchk",
    "title": "获取命令复核列表",
    "version": "1.0.0",
    "name": "getCmdChkList",
    "group": "risk_cmd_check",
    "description": "<p>获取命令复核列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/cmdchk",
        "type": "curl"
      }
    ],
    "filename": "java/com/shterm/device/web/api/CmdCheckController.java",
    "groupTitle": "risk_cmd_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/cmdchk"
      }
    ],
    "parameter": {
      "fields": {
        "实体查询参数": [
          {
            "group": "实体查询参数",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>命令复核名称。</p>"
          },
          {
            "group": "实体查询参数",
            "type": "String[]",
            "optional": false,
            "field": "chkUsers",
            "description": "<p>复核用户，字符串数组。数据格式：&quot;chkUsers&quot;: [&quot;admin&quot;,&quot;user1&quot;]</p>"
          },
          {
            "group": "实体查询参数",
            "type": "Object",
            "optional": false,
            "field": "cmdRuleTemplate",
            "description": "<p>命令模板。数据格式： &quot;cmdRuleTemplate&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;xx&quot;}</p>"
          },
          {
            "group": "实体查询参数",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>访问配置。数据格式：&quot;configurations&quot;: { &quot;users&quot;: [ 1, 2, 3], &quot;devs&quot;: [4, 5, 6], &quot;accounts&quot;: [ &quot;root&quot;, &quot;www&quot; ] }，其中users数据为用户id数组， devs为设备id数组，accounts为设备访问帐号数组，帐号可以取各设备的帐号并集。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "响应消息体示例",
          "content": "{\n   \"id\": 1,\n   \"name\": \"命令复核1\",\n   \"chkUsers\": [\"admin\",\"users1\"],\n   \"cmdRuleTemplate\": {\"id\": 1,\"name\": \"命令模板1\"},\n   \"configurations\": { \"users\": [ 1, 2, 3], \"devs\": [4, 5, 6], \"accounts\": [ \"root\", \"www\" ] }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/cmdchk/:id",
    "title": "修改命令复核",
    "version": "1.0.0",
    "name": "saveCmdChk",
    "group": "risk_cmd_check",
    "description": "<p>修改命令复核。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/cmdchk",
        "type": "curl"
      }
    ],
    "filename": "java/com/shterm/device/web/api/CmdCheckController.java",
    "groupTitle": "risk_cmd_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/cmdchk/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "name",
            "description": "<p>命令复核名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "chkUsers",
            "description": "<p>复核用户，字符串数组。数据格式：&quot;chkUsers&quot;: [&quot;admin&quot;,&quot;user1&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "cmdRuleTemplate",
            "description": "<p>命令模板。数据格式： &quot;cmdRuleTemplate&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;xx&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "configurations",
            "description": "<p>访问配置。数据格式：&quot;configurations&quot;: { &quot;users&quot;: [ 1, 2, 3], &quot;devs&quot;: [4, 5, 6], &quot;accounts&quot;: [ &quot;root&quot;, &quot;www&quot; ] }，其中users数据为用户id数组，devs为设备id数组， accounts为设备访问帐号数组，帐号可以取各设备的帐号并集。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": " {\n  \"name\": \"命令复核1\",\n  \"chkUsers\": [\"admin\",\"users1\"],\n  \"cmdRuleTemplate\": {\"id\": 1,\"name\": \"命令模板1\"},\n  \"configurations\": { \"users\": [ 1, 2, 3], \"devs\": [4, 5, 6], \"accounts\": [ \"root\", \"www\" ] }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/cmdchk/:id",
    "title": "删除命令复核",
    "version": "1.0.0",
    "name": "saveCmdChk",
    "group": "risk_cmd_check",
    "description": "<p>删除命令复核。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/cmdchk/1",
        "type": "curl"
      }
    ],
    "filename": "java/com/shterm/device/web/api/CmdCheckController.java",
    "groupTitle": "risk_cmd_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/cmdchk/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/cmdchk/upPriority",
    "title": "提高优先级",
    "version": "1.0.0",
    "name": "upPriority",
    "group": "risk_cmd_check",
    "description": "<p>提高高危命令优先级。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/cmdchk/upPriority",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n{\"id\": 1,\"priority\": 2},\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/CmdCheckController.java",
    "groupTitle": "risk_cmd_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/cmdchk/upPriority"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/servSys/addCmdRuleTmpl",
    "title": "增加命令模板",
    "version": "1.0.0",
    "name": "addCmdRuleTmpl",
    "group": "risk_cmdruletemplate",
    "description": "<p>增加命令模板。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/addCmdRuleTmpl",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": " HTTP/1.1 201 OK\n{\n \"id\": 1,\n \"name\": \"CmdRuleTemplate1\",\n \"defaultStrategy\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/CommandTmplController.java",
    "groupTitle": "risk_cmdruletemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/addCmdRuleTmpl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1...256",
            "optional": false,
            "field": "name",
            "description": "<p>模板名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "defaultStrategy",
            "defaultValue": "1",
            "description": "<p>缺省处理策略。0-禁止登录 1-允许登录。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"name\": \"CmdRuleTemplate1\",\n \"defaultStrategy\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/servSys/deleteCmdRuleById/:id",
    "title": "删除命令规则（通过id）",
    "version": "1.0.0",
    "name": "deleteCmdRuleById",
    "group": "risk_cmdruletemplate",
    "description": "<p>通过id删除命令规则。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/deleteCmdRuleById/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>命令规则id</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "指定对象不存在或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/CommandTmplController.java",
    "groupTitle": "risk_cmdruletemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/deleteCmdRuleById/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/servSys/deleteCmdRuleTmplById/:id",
    "title": "删除命令模板（通过id）",
    "version": "1.0.0",
    "name": "deleteCmdRuleTmplById",
    "group": "risk_cmdruletemplate",
    "description": "<p>通过id删除命令模板，级联删除命令规则。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/deleteCmdRuleTmplById/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>命令模板id</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "指定对象不存在或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/CommandTmplController.java",
    "groupTitle": "risk_cmdruletemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/deleteCmdRuleTmplById/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/servSys/getAllCmdRuleTmpl",
    "title": "获取符合条件的命令模板列表",
    "version": "1.0.0",
    "name": "getAllCmdRuleTmpl",
    "group": "risk_cmdruletemplate",
    "description": "<p>根据查询条件，返回符合条件的命令模板列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getAllCmdRuleTmpl?nameContains=template1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\"content\": [{\n \"id\": 1,\n \"name\": \"命令模板1\",\n \"defaultStrategy\": 1\n }\n ......\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/CommandTmplController.java",
    "groupTitle": "risk_cmdruletemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getAllCmdRuleTmpl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/servSys/getCmdRuleTmplById/:id",
    "title": "获取命令模板（根据id）",
    "version": "1.0.0",
    "name": "getCmdRuleTmplById",
    "group": "risk_cmdruletemplate",
    "description": "<p>增加命令模板。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getCmdRuleTmplById/1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 OK\n{\n \"id\": 1,\n \"name\": \"CmdRuleTemplate1\",\n \"defaultStrategy\": 1,\n \"rules\": [\n     {\"priority\": 1,\"action\": \"accept\",\n     \"timeRange\": \"w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]\",\n     \"severityLevel\": 8,\"eventTitle\": \"cmdRule Exec1\"}\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "命令模板不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/CommandTmplController.java",
    "groupTitle": "risk_cmdruletemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getCmdRuleTmplById/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/getCmdRulesByTmpl",
    "title": "查询命令模板的规则列表",
    "version": "1.0.0",
    "name": "getCmdRulesByTmpl",
    "group": "risk_cmdruletemplate",
    "description": "<p>根据模板id，查询模板的规则列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getCmdRulesByTmpl?template.id=1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "template",
            "description": "<p>所请求的模板</p>"
          },
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "template.id",
            "description": "<p>所请求模板的id</p>"
          },
          {
            "group": "路径参数",
            "type": "String",
            "optional": true,
            "field": "template.name",
            "description": "<p>所请求模板的名称</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "{\"content\": [\n {\n     \"template\": {\"id\": 1},\n     \"commands\": \"reboot,restart\",\n     \"action\": \"accept\",\n     \"timeRange\": \"w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160201-20160203] T[03:30-18:00]\",\n     \"severityLevel\": 0,\n     \"eventTitle\": \"命令规则执行邮件标题\",\n     \"priority\": 1\n }],\n ......\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/CommandTmplController.java",
    "groupTitle": "risk_cmdruletemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getCmdRulesByTmpl"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/servSys/saveCmdRuleTmpl/:id",
    "title": "修改命令模板",
    "version": "1.0.0",
    "name": "saveCmdRuleTmpl",
    "group": "risk_cmdruletemplate",
    "description": "<p>修改命令模板。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/saveCmdRuleTmpl/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>命令模板id</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1...256",
            "optional": false,
            "field": "name",
            "description": "<p>模板名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "defaultStrategy",
            "defaultValue": "1",
            "description": "<p>缺省处理策略。0-禁止登录 1-允许登录。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"name\": \"CmdRuleTemplate1\",\n \"defaultStrategy\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "命令模板不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/CommandTmplController.java",
    "groupTitle": "risk_cmdruletemplate",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/saveCmdRuleTmpl/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/sesschk",
    "title": "增加会话复核。",
    "version": "1.0.0",
    "name": "addSessionCheck",
    "group": "risk_session_check",
    "description": "<p>获取会话复核</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/sesschk/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会话复核id</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>会话复核名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "chkUsers",
            "description": "<p>复核用户列表。数据格式：key值“chkUsers”，列表参数为用户的登录名称。&quot;chkUsers&quot;: [&quot;admin&quot;,&quot;user1&quot;]。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>访问配置。数据格式：key值“configurations”，访问用户“users”，列表为用户id， 访问设备“devs”，列表为设备id，使用帐号“accounts”，列表数据为设备列表的帐号交集。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/SessionChkController.java",
    "groupTitle": "risk_session_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesschk"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "返回成功消息体示例",
          "content": "{\n  \"id\": 1,\n  \"name\": \"会话复核1\",\n  \"chkUsers\": [\"admin\",\"user1\",\"user2\"],\n  \"configurations\": {\n      \"users\": [ 1, 2, 3 ],\n      \"devs\": [ 4, 5, 6],\n      \"accounts\": [ \"root\", \"www\" ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/sesschk/:id",
    "title": "删除会话复核",
    "version": "1.0.0",
    "name": "deleteSessionCheck",
    "group": "risk_session_check",
    "description": "<p>修改会话复核</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/sesschk/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会话复核id</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "指定对象不存在或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/SessionChkController.java",
    "groupTitle": "risk_session_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesschk/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/sesschk/getChkUsers/:dId",
    "title": "获取当前登录用户访问设备的复核人列表。",
    "version": "1.0.0",
    "name": "getChkUsers",
    "group": "risk_session_check",
    "description": "<p>获取当前登录用户访问设备的复核人列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/sesschk/getChkUsers/1?account=root",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "String",
            "optional": false,
            "field": "dId",
            "description": "<p>访问的设备id</p>"
          },
          {
            "group": "路径参数",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>访问帐号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回成功消息体示例",
          "content": "[admin,user1,user2]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/SessionChkController.java",
    "groupTitle": "risk_session_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesschk/getChkUsers/:dId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sesschk/:id",
    "title": "获取会话复核",
    "version": "1.0.0",
    "name": "getSessionCheck",
    "group": "risk_session_check",
    "description": "<p>获取会话复核</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/sesschk/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会话复核id</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>会话复核名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "chkUsers",
            "description": "<p>复核用户列表。数据格式：key值“chkUsers”，列表参数为用户的登录名称。&quot;chkUsers&quot;: [&quot;admin&quot;,&quot;user1&quot;]。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>访问配置。数据格式：key值“configurations”，访问用户“users”，列表为用户id， 访问设备“devs”，列表为设备id，使用帐号“accounts”，列表数据为设备列表的帐号交集。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/SessionChkController.java",
    "groupTitle": "risk_session_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesschk/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "返回成功消息体示例",
          "content": "{\n  \"id\": 1,\n  \"name\": \"会话复核1\",\n  \"chkUsers\": [\"admin\",\"user1\",\"user2\"],\n  \"configurations\": {\n      \"users\": [ 1, 2, 3 ],\n      \"devs\": [ 4, 5, 6],\n      \"accounts\": [ \"root\", \"www\" ]\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/sesschk/getList",
    "title": "获取会话复核列表",
    "version": "1.0.0",
    "name": "getSessionCheckList",
    "group": "risk_session_check",
    "description": "<p>获取会话复核列表</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/sesschk/getList",
        "type": "curl"
      }
    ],
    "filename": "java/com/shterm/device/web/api/SessionChkController.java",
    "groupTitle": "risk_session_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesschk/getList"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ],
        "实体查询参数": [
          {
            "group": "实体查询参数",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>会话复核名称。</p>"
          },
          {
            "group": "实体查询参数",
            "type": "String[]",
            "optional": false,
            "field": "chkUsers",
            "description": "<p>复核用户列表。数据格式：key值“chkUsers”， 列表参数为用户的登录名称。&quot;chkUsers&quot;: [&quot;admin&quot;,&quot;user1&quot;] 。</p>"
          },
          {
            "group": "实体查询参数",
            "type": "Object",
            "optional": false,
            "field": "configurations",
            "description": "<p>访问配置。数据格式：key值“configurations”， 访问用户“users”，列表为用户id，访问设备“devs”，列表为设备id，使用帐号“accounts”，列表数据为设备列表的帐号交集。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回成功消息体示例",
          "content": "{\n  \"content\": {\n      \"id\": 1,\n      \"name\": \"会话复核1\",\n      \"chkUsers\": [\"admin\",\"user1\",\"user2\"],\n      \"configurations\": {\n          \"users\": [ 1, 2, 3 ],\n          \"devs\": [ 4, 5, 6],\n          \"accounts\": [ \"root\", \"www\" ]\n      }\n },\n ......\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/sesschk/:id",
    "title": "修改会话复核",
    "version": "1.0.0",
    "name": "saveSessionCheck",
    "group": "risk_session_check",
    "description": "<p>修改会话复核</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/sesschk/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会话复核id</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "name",
            "description": "<p>会话复核名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "chkUsers",
            "description": "<p>复核用户列表。数据格式：key值“chkUsers”，列表参数为用户的登录名称。 &quot;chkUsers&quot;: [&quot;admin&quot;,&quot;user1&quot;]。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "configurations",
            "description": "<p>访问配置。数据格式：key值“configurations”，访问用户“users”， 列表为用户id，访问设备“devs”，列表为设备id，使用帐号“accounts”，列表数据为设备列表的帐号交集。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/SessionChkController.java",
    "groupTitle": "risk_session_check",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/sesschk/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/role/getAllServices",
    "title": "获取所有可用服务",
    "version": "1.0.0",
    "name": "getAllServices",
    "group": "role",
    "description": "<p>获取所有可用服务。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/role/getAllServices",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>服务的ID。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>服务名。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>角色名。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>服务类型。0 job, 1 工单, 2 其他</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>位置。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sourceType",
            "description": "<p>来源。1 预定义, 2 用户自定义</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL信息。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>服务图标。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n  {\n       \"id\":1,\n       \"name\": \"DeviceAccess\",\n       \"role\": \"ROLE_SERV_DEVICEACCESS\",\n       \"type\": 2,\n       \"order\": 1,\n       \"sourceType\": 0,\n       \"url\": \"'Business','ResourceAccess'\",\n       \"icon\": \"left_nav_icon_1.png\"\n }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/RoleController.java",
    "groupTitle": "role",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/role/getAllServices"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/role/getLoginUserRole",
    "title": "获取当前登录用户的角色信息",
    "version": "1.0.0",
    "name": "getLoginUserRole",
    "group": "role",
    "description": "<p>获取当前登录用户的角色信息</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/role/getLoginUserRole",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n   \"name\": \"自定义角色\",\n   \"description\": \"自定义角色\"\",\n   \"permissions\": [\"系统设置\",\"资源管理\"],\n   \"services\": [\"abc\",\"cdf\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/RoleController.java",
    "groupTitle": "role",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/role/getLoginUserRole"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/role/getRoleServices/:id",
    "title": "获取角色可使用的服务列表",
    "version": "1.0.0",
    "name": "getRoleServices",
    "group": "role",
    "description": "<p>根据角色id，获取角色有权限的服务列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/role/getRoleServices/1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[{\n  \"name\": \"DeviceAccess\",\n  \"type\": 2,\n  \"serviceId\": \"\",\n  \"order\": 1,\n  \"sourceType\": 0,\n  \"url\": \"/device/access\",\n  \"role\": \"ROLE_SERV_DEVICEACCESS\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "角色不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/RoleController.java",
    "groupTitle": "role",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/role/getRoleServices/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/role/getRoleServicesCount/:id",
    "title": "获取角色可使用的服务数量",
    "version": "1.0.0",
    "name": "getRoleServicesCount",
    "group": "role",
    "description": "<p>根据角色id，获取角色有权限的服务数量。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/role/getRoleServicesCount/1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n8",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "角色不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/user/web/api/RoleController.java",
    "groupTitle": "role",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/role/getRoleServicesCount/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/servSys/addDevs2AccessRule/:ssId",
    "title": "增加设备到权限矩阵",
    "version": "1.0.0",
    "name": "addDevs2AccessRule",
    "group": "servSys_accessRule",
    "description": "<p>增加（显示）设备到权限矩阵，设备必须属于当前业务系统下。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/addDevs2AccessRule/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n {\"id\": 1},\n {\"id\": 2}\n]",
          "type": "json"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>业务系统id</p>"
          }
        ],
        "请求体参数": [
          {
            "group": "请求体参数",
            "type": "Object[]",
            "optional": false,
            "field": "devs",
            "description": "<p>参数为设备列表。参考请求体示例。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "业务系统或依赖对象不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_accessRule",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/addDevs2AccessRule/:ssId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/servSys/addRule",
    "title": "增加访问规则",
    "version": "1.0.0",
    "name": "addRule",
    "group": "servSys_accessRule",
    "description": "<p>增加访问规则。其中登录模板可以携带rules列表。rules列表中对象如果没有id， 则会新增一条（登录/命令）规则，存在id则修改规则。模板的id必须存在（详见登录模板api）。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/addRule",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"servSys\": {\"id\": 48},\n \"dev\": {\"id\": 17},\n \"user\": {\"id\": 1},\n \"loginRuleTemplate\": {\"id\":1},\n \"accounts\": [\"root\",\"shterm\"]\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "servSys",
            "description": "<p>归属的业务系统。数据格式：&quot;servSys&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;业务系统&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "dev",
            "description": "<p>业务系统下独立设备。数据格式：&quot;dev&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;设备&quot;}，dev和devGroup两者必需且只能填一个</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "devGroup",
            "description": "<p>业务系统下设备分组。 数据格式： &quot;devGroup&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;设备分组&quot;} devGroup和dev两者必需且只能填一个</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "user",
            "description": "<p>业务系统下独立用户。 数据格式： &quot;user&quot;: {&quot;id&quot;: 1,&quot;loginName&quot;: &quot;admin&quot;} user和userGroup两者必需且只能填一个</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "userGroup",
            "description": "<p>业务系统下用户分组。 数据格式：&quot;userGroup&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;用户分组&quot;} userGroup和user两者必需且只能填一个</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "loginRuleTemplate",
            "description": "<p>登录控制规则模板。数据格式：&quot;loginRuleTemplate&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;登录模板&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "accounts",
            "description": "<p>登录帐号列表。 数据格式： &quot;accounts&quot;: [&quot;admin&quot;, &quot;admin1&quot;]，其中登录帐号为各个设备帐号的并集，必须在设备上存在。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": "HTTP/1.1 201 OK\n{\n \"servSys\": {\"id\": 48},\n \"dev\": {\"id\": 17},\n \"user\": {\"id\": 1},\n \"loginRuleTemplate\": {\"id\":1,\"rules\":[{\"id\":1,\"priority\":0,\"condition\":1,\"action\":\"accept\",\n \"timeRange\":\"w[1-3,5,7] m[1,3-5,12] d[1,5,7,31] D[20160101,20160501-20160529] T[00:00-23:59]\",\n \"ipRange\":\"1.1.1.1-1.1.1.100,10.10.1.1-10.10.1.100,10.10.2.1-10.10.2.100,192.168.4.20,10.10.10.0/24\"}]},\n \"accounts\": [\"root\",\"shterm\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_accessRule",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/addRule"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/servSys/getAccsOfDev/:dId",
    "title": "获取设备的帐号列表",
    "version": "1.0.0",
    "name": "getAccsOfDev",
    "group": "servSys_accessRule",
    "description": "<p>获取设备的帐号列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getAccsOfDev/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "dId",
            "description": "<p>设备id。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "[\"root\", \"shterm\", ...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_accessRule",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getAccsOfDev/:dId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/getCommonAccountsOfDevGroup/:dgId",
    "title": "获取设备分组里边的设备帐号的并集",
    "version": "1.0.0",
    "name": "getCommonAccountsOfDevGroup",
    "group": "servSys_accessRule",
    "description": "<p>获取设备分组里边的设备帐号的并集 （设备分组所有设备的帐号综合）</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getUsableServicesByDevGroup/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "dgId",
            "description": "<p>设备分组id。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "[\"root\", \"shterm\", ...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备分组不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_accessRule",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getCommonAccountsOfDevGroup/:dgId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/getDevsOfAccessRule/:id",
    "title": "获取显示在权限矩阵的设备",
    "version": "1.0.0",
    "name": "getDevsOfAccessRule",
    "group": "servSys_accessRule",
    "description": "<p>获取显示在权限矩阵的设备。 可以根据设备的相关字段进行查询，字段可增加后缀“StartsWith”、“EndsWith”、“Contains”， “Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getDevsOfAccessRule/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>业务系统id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n\"content\": [{\n    \"id\": 1,\n    \"name\": \"switch_erp\",\n    \"ip\": \"192.168.0.1\",\n    \"joinTime\": 1463377830578,\n    \"joinUserId\": 1,\n    \"deleted\": false,\n    \"state\": 0\n    }],\n    \"last\": true,\n    \"totalPages\": 1,\n    \"totalElements\": 1,\n    \"number\": 0,\n    \"size\": 50\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "业务系统不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_accessRule",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getDevsOfAccessRule/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/getDevsOutOfAccessRule/:id",
    "title": "获取不显示在权限矩阵的设备分页对象",
    "version": "1.0.0",
    "name": "getDevsOutOfAccessRule",
    "group": "servSys_accessRule",
    "description": "<p>获取不显示在权限矩阵的设备分页对象。 可以根据设备的相关字段进行查询，字段可增加后缀“StartsWith”、“EndsWith”、“Contains”， “Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getDevsOutOfAccessRule/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>业务系统id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n\"content\": [{\n    \"id\": 1,\n    \"name\": \"switch_erp\",\n    \"ip\": \"192.168.0.1\",\n    \"joinTime\": 1463377830578,\n    \"joinUserId\": 1,\n    \"deleted\": false,\n    \"state\": 0\n    }],\n    \"last\": true,\n    \"totalPages\": 1,\n    \"totalElements\": 1,\n    \"number\": 0,\n    \"size\": 50\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "业务系统不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_accessRule",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getDevsOutOfAccessRule/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/servSys/joinDevs2Dev/:ssId/:dId",
    "title": "增加多个设备到指定设备（成组）",
    "version": "1.0.0",
    "name": "joinDevs2Dev",
    "group": "servSys_accessRule",
    "description": "<p>将多个设备“加入“到设备A，生成一个新的设备分组，并以A的访问规则生效（如果存在）。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/joinDevs2Dev/1/1?groupName=devGroups&description=devGroup",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n {\"id\": 1,\"ip\": \"1.1.1.1\",....},\n {\"id\": 2,\"ip\": \"2.2.2.2\",....}\n]",
          "type": "json"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>业务系统id。</p>"
          },
          {
            "group": "路径参数",
            "type": "String",
            "optional": false,
            "field": "dId",
            "description": "<p>主设备id，其他设备增加到此设备。</p>"
          },
          {
            "group": "路径参数",
            "type": "String",
            "optional": false,
            "field": "groupName",
            "description": "<p>分组名称。新分组的名称，在同一业务系统下唯一。</p>"
          },
          {
            "group": "路径参数",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>分组描述。</p>"
          }
        ],
        "请求参数": [
          {
            "group": "请求参数",
            "type": "Object[]",
            "optional": false,
            "field": "dev[]",
            "description": "<p>请求体传入设备数组。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "业务系统/主设备/设备列表 不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_accessRule",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/joinDevs2Dev/:ssId/:dId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/servSys/removeDevFromAccessRule/:ssId/:dId",
    "title": "将独立设备移除出权限矩阵",
    "version": "1.0.0",
    "name": "removeDevFromAccessRule",
    "group": "servSys_accessRule",
    "description": "<p>将独立设备移除出（隐藏掉）权限矩阵，并删除关联访问规则。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/removeDevFromAccessRule/1/2",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>业务系统id</p>"
          },
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "dId",
            "description": "<p>设备id,与前一个参数之间使用/连接</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "业务系统不存在或设备不存在时 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_accessRule",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/removeDevFromAccessRule/:ssId/:dId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/servSys/saveRule",
    "title": "修改访问规则",
    "version": "1.0.0",
    "name": "saveRule",
    "group": "servSys_accessRule",
    "description": "<p>修改访问规则，需要传递完整参数。根据user/userGroup和dev/devGroup中的id来共同确定所修改的访问规则。 其中登录模板可以携带rules列表。rules列表中对象如果没有id，则会新增一条（登录/命令）规则，存在id则修改规则。 （登录/命令）模板的id必须存在（有增加登录/命令模板的api）。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/saveRule",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n  \"servSys\": {\"id\": 48},\n  \"dev\": {\"id\": 17},\n  \"user\": {\"id\": 1},\n  \"loginRuleTemplate\": {\"id\":1},\n  \"accounts\": [\"root\",\"shterm\"]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "servSys",
            "description": "<p>归属的业务系统。数据格式：&quot;servSys&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;业务系统&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "dev",
            "description": "<p>业务系统下独立设备。数据格式：&quot;dev&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;设备&quot;}，dev和devGroup两者必需且只能填一个</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "devGroup",
            "description": "<p>业务系统下设备分组。 数据格式： &quot;devGroup&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;设备分组&quot;} devGroup和dev两者必需且只能填一个</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "user",
            "description": "<p>业务系统下独立用户。 数据格式： &quot;user&quot;: {&quot;id&quot;: 1,&quot;loginName&quot;: &quot;admin&quot;} user和userGroup两者必需且只能填一个</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "userGroup",
            "description": "<p>业务系统下用户分组。 数据格式：&quot;userGroup&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;用户分组&quot;} userGroup和user两者必需且只能填一个</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "loginRuleTemplate",
            "description": "<p>登录控制规则模板。数据格式：&quot;loginRuleTemplate&quot;: {&quot;id&quot;: 1,&quot;name&quot;: &quot;登录模板&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "accounts",
            "description": "<p>登录帐号列表。 数据格式： &quot;accounts&quot;: [&quot;admin&quot;, &quot;admin1&quot;]，其中登录帐号为各个设备帐号的并集，必须在设备上存在。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_accessRule",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/saveRule"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/servSys/getLoginUserAccessDevConfig/:dId",
    "title": "获取当前用户可访问设备的登录配置",
    "version": "1.0.0",
    "name": "getLoginUserAccessDevConfig",
    "group": "servSys_access_dev",
    "description": "<p>获取当前用户可访问设备的登录配置，包含当前用户对设备的访问规则配置信息（协议+帐号及复核用户等）。如果没有访问规则，返回错误码。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getLoginUserAccessDevConfig/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "dId",
            "description": "<p>当前设备id。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"services\": {\"ssh2\":{\"proto\":\"ssh\",\"port\":22}},\n \"accs\": [\"root\",\"apache\"],\n \"confs\": {\"resolution\": \"1366x768:fullscreen\",\"vncpwd\": \"1234x\"}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_access_dev",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getLoginUserAccessDevConfig/:dId"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/servSys/getLoginUserAccessableDevs/:ssId",
    "title": "获取当前业务系统下当前用户可访问的设备列表",
    "version": "1.0.0",
    "name": "getLoginUserAccessableDevs",
    "group": "servSys_access_dev",
    "description": "<p>获取当前业务系统下当前用户可访问的设备列表。如果当前业务系统为业务节点，返回空。 可以根据设备的相关字段进行查询，可增加后缀“StartsWith”、“EndsWith”、“Contains”， “Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getLoginUserAccessableDevs/1?nameContain=test&ipContains=20&sysType.nameContains=linux&size=50",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>当前业务系统id</p>"
          }
        ],
        "过滤项基本信息": [
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "name",
            "description": "<p>资源名，过滤例子：nameContains=ad,表示查询帐户包含“ad”的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>资源ip，过滤例子：ipIn=&quot;192.168.99.6&quot;,表示查询ip是&quot;192.168.99.63&quot;的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "sysType",
            "description": "<p>过滤支持多个资源类型“或”， 过滤例子：sysType.idIn=1,2 表示查询资源类型id为“1”或者为“2”的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "state",
            "description": "<p>状态，过滤支持多个状态“或”，过滤例子：stateIn=0,1, 表示查询状态为0或者为1</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Objetc",
            "optional": false,
            "field": "extInfo",
            "description": "<p>扩展信息：分4类，字符串，数字，日期，可选项。 (1)字符串类型，Contains 模糊过滤，例如：extInfo.1Contains=&quot;dev&quot; 查询所有extInfo.1包含&quot;dev&quot;的资源， (2)数字类型，Is 精确过滤，例如：extInfo.1Is=3 查询所有extInfo.1为3的资源， (3)日期类型，Is 精确过滤，例如：extInfo.1Is= &quot;2018-09-08 00:00:00&quot; 查询所有extInfo.1为&quot;2018-09-08 00:00:00&quot;的资源， (4)可选项，In 数组过滤，例如：extInfo.1In= 1,2 查询所有extInfo.1为“1”或者“2”的资源，</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n \"content\": [{\n         \"id\": 1,\n         \"name\": \"dev1test\",\n         \"ip\": \"1.1.1.220\",\n         \"description\": \"dev1\",\n         \"sysType\": {\"name\": \"linux\"}\n         ....\n     },\n     {\n         \"id\": 2,\n         \"name\": \"dev2test\",\n         \"ip\": \"2.2.20.2\",\n         \"description\": \"dev2\",\n         \"sysType\": {\"name\": \"linux\"}\n         ....\n     }\n ]\n ....\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_access_dev",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getLoginUserAccessableDevs/:ssId"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/servSys/getLoginUserAllAccessableDevs",
    "title": "获取当前登录用户的所有可访问设备列表",
    "version": "1.0.0",
    "name": "getLoginUserAllAccessableDevs",
    "group": "servSys_access_dev",
    "description": "<p>根据当前登录用户，其所有可访问的设备列表。 可以根据设备的相关字段进行查询，可增加后缀“StartsWith”、“EndsWith”、“Contains”， “Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。 对多值条件（Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getLoginUserAllAccessableDevs?nameContain=test&ipContains=20&sysType.nameContains=linux&size=50",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n \"content\": [{\n         \"id\": 1,\n         \"name\": \"dev1\",\n         \"ip\": \"1.1.1.1\",\n         \"description\": \"dev1\",\n         ....\n     },\n     {\n         \"id\": 2,\n         \"name\": \"dev2\",\n         \"ip\": \"2.2.2.2\",\n         \"description\": \"dev2\",\n         ....\n     }\n ]\n ....\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_access_dev",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getLoginUserAllAccessableDevs"
      }
    ],
    "parameter": {
      "fields": {
        "过滤项基本信息": [
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "name",
            "description": "<p>资源名，过滤例子：nameContains=ad,表示查询帐户包含“ad”的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>资源ip，过滤例子：ipIn=&quot;192.168.99.6&quot;,表示查询ip是&quot;192.168.99.63&quot;的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "sysType",
            "description": "<p>过滤支持多个资源类型“或”， 过滤例子：sysType.idIn=1,2 表示查询资源类型id为“1”或者为“2”的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "state",
            "description": "<p>状态，过滤支持多个状态“或”，过滤例子：stateIn=0,1, 表示查询状态为0或者为1</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Objetc",
            "optional": false,
            "field": "extInfo",
            "description": "<p>扩展信息：分4类，字符串，数字，日期，可选项。 (1)字符串类型，Contains 模糊过滤，例如：extInfo.1Contains=&quot;dev&quot; 查询所有extInfo.1包含&quot;dev&quot;的资源， (2)数字类型，Is 精确过滤，例如：extInfo.1Is=3 查询所有extInfo.1为3的资源， (3)日期类型，Is 精确过滤，例如：extInfo.1Is= &quot;2018-09-08 00:00:00&quot; 查询所有extInfo.1为&quot;2018-09-08 00:00:00&quot;的资源， (4)可选项，In 数组过滤，例如：extInfo.1In= 1,2 查询所有extInfo.1为“1”或者“2”的资源，</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/servSys/getLoginUserRecentDevs",
    "title": "获取当前登录用户的最近访问设备列表",
    "version": "1.0.0",
    "name": "getLoginUserRecentDevs",
    "group": "servSys_access_dev",
    "description": "<p>根据当前登录用户，查询其是否有访问设备的规则配置，如果存在，则返回其业务系统访问的根节点。如果没有访问设备权限，则返回空。 可以根据设备的相关字段进行查询，可增加后缀“StartsWith”、“EndsWith”、“Contains”， “Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。 对多值条件（Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getLoginUserRecentDevs?nameContain=test&ipContains=20&sysType.nameContains=linux&size=50",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n \"content\": [{\n         \"id\": 1,\n         \"name\": \"dev1\",\n         \"ip\": \"1.1.1.1\",\n         \"description\": \"dev1\",\n         ....\n     },\n     {\n         \"id\": 2,\n         \"name\": \"dev2\",\n         \"ip\": \"2.2.2.2\",\n         \"description\": \"dev2\",\n         ....\n     }\n ]\n ....\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys_access_dev",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getLoginUserRecentDevs"
      }
    ],
    "parameter": {
      "fields": {
        "过滤项基本信息": [
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "name",
            "description": "<p>资源名，过滤例子：nameContains=ad,表示查询帐户包含“ad”的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>资源ip，过滤例子：ipIn=&quot;192.168.99.6&quot;,表示查询ip是&quot;192.168.99.63&quot;的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "sysType",
            "description": "<p>过滤支持多个资源类型“或”， 过滤例子：sysType.idIn=1,2 表示查询资源类型id为“1”或者为“2”的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "state",
            "description": "<p>状态，过滤支持多个状态“或”，过滤例子：stateIn=0,1, 表示查询状态为0或者为1</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Objetc",
            "optional": false,
            "field": "extInfo",
            "description": "<p>扩展信息：分4类，字符串，数字，日期，可选项。 (1)字符串类型，Contains 模糊过滤，例如：extInfo.1Contains=&quot;dev&quot; 查询所有extInfo.1包含&quot;dev&quot;的资源， (2)数字类型，Is 精确过滤，例如：extInfo.1Is=3 查询所有extInfo.1为3的资源， (3)日期类型，Is 精确过滤，例如：extInfo.1Is= &quot;2018-09-08 00:00:00&quot; 查询所有extInfo.1为&quot;2018-09-08 00:00:00&quot;的资源， (4)可选项，In 数组过滤，例如：extInfo.1In= 1,2 查询所有extInfo.1为“1”或者“2”的资源，</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/servSys/addFreeDev2ServSys/:ssId",
    "title": "批量增加独立设备到业务系统",
    "version": "1.0.0",
    "name": "addFreeDev2ServSys",
    "group": "servSys",
    "description": "<p>批量增加独立设备到业务系统，请求体为设备列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/addFreeDev2ServSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n {\"id\": 1,\"ip\": 1.1.1.1,.....},\n {\"id\": 2,\"ip\": 1.1.1.2,.....}\n]",
          "type": "json"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>业务系统id</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "业务系统或依赖对象不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/addFreeDev2ServSys/:ssId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/servSys/addFreeUser2ServSys/:ssId",
    "title": "增加独立用户到业务系统（批量）",
    "version": "1.0.0",
    "name": "addFreeUser2ServSys",
    "group": "servSys",
    "description": "<p>批量增加独立用户到业务系统</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/addFreeUser2ServSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n {\"id\": 1},\n {\"id\": 2}\n]",
          "type": "json"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>业务系统id</p>"
          }
        ],
        "请求参数": [
          {
            "group": "请求参数",
            "type": "Object[]",
            "optional": false,
            "field": "NULL",
            "description": "<p>用户id组成的数组,此参数没有字段名，请参考请求消息体示例。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "业务系统或依赖对象不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/addFreeUser2ServSys/:ssId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/servSys/addServSys",
    "title": "增加业务系统",
    "version": "1.0.0",
    "name": "addServSys",
    "group": "servSys",
    "description": "<p>增加一个业务系统节点。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/addServSys",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "请求实体参数": [
          {
            "group": "请求实体参数",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>业务系统名称。</p>"
          },
          {
            "group": "请求实体参数",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "type",
            "description": "<p>业务系统类型。0-业务层次，1-权限节点。缺省为0-业务节点。</p>"
          },
          {
            "group": "请求实体参数",
            "type": "Object",
            "optional": true,
            "field": "parent",
            "description": "<p>业务系统的父节点。 parent数据类型为业务系统类型， 即指定当前业务系统的父业务系统。参考格式为： &quot;parent&quot;: {&quot;id&quot;: 1}</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": " HTTP/1.1 201 OK\n {\n\"name\": \"银行运维系统杭州分行\",\n\"description\": \"运维系统业务节点\",\n\"type\": 1,\n\"parent\": {\n    \"id\": 0\n  }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/addServSys"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/servSys/addUserGroup2ServSys/:ssId",
    "title": "增加用户分组到业务系统（批量）",
    "version": "1.0.0",
    "name": "addUserGroup2ServSys",
    "group": "servSys",
    "description": "<p>批量增加用户分组到业务系统</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/addUserGroup2ServSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n {\"id\": 1},\n {\"id\": 2}\n]",
          "type": "json"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>业务系统id</p>"
          }
        ],
        "请求参数": [
          {
            "group": "请求参数",
            "type": "Object[]",
            "optional": false,
            "field": "NULL",
            "description": "<p>用户分组id组成的数组，此参数无字段名，请参考请求消失体示例。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "业务系统或依赖对象不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/addUserGroup2ServSys/:ssId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/servSys/:id",
    "title": "删除业务系统",
    "version": "1.0.0",
    "name": "deleteServSysById",
    "group": "servSys",
    "description": "<p>根据ID删除业务系统。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>业务系统id</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "指定对象不存在或已经被删除 410 错误示例",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/devGroup/findByServSys/:ssId",
    "title": "获取业务系统下的设备分组",
    "version": "1.0.0",
    "name": "devGroupFindByServSys",
    "group": "servSys",
    "description": "<p>根据业务系统ID查询并返回设备分组列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/DevGroup/findByServSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>业务系统ID。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n\"content\": [{\n\"id\": 1,\n\"name\": \"switch_group\",\n\"description\": \"Switch devices\",\n\"servSys\": {\n    \"id\": 1,\n    \"name\": \"erp component 1\",\n    \"parent\": {\n        \"id\": 0,\n        \"name\": \"root of all servSys\",\n        \"description\": \"root node\"\n     }\n   }],\n   ......\n }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "业务系统不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/DevGroupController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devGroup/findByServSys/:ssId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/getAllPriNode",
    "title": "获取所有业务系统（权限节点）",
    "version": "1.0.0",
    "name": "getAllPriNode",
    "group": "servSys",
    "description": "<p>获取所有业务系统（权限节点）</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getAllPriNode",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n[\n{\"id\": 2, \"name\": \"北京分行\"},\n{\"id\": 3, \"name\": \"杭州分行\"}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getAllPriNode"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/getDevsOfServSys",
    "title": "获取业务系统符合条件的设备",
    "version": "1.0.0",
    "name": "getDevsOfServSys",
    "group": "servSys",
    "description": "<p>获取业务系统下的设备分页对象。包含独立设备和设备分组中的设备综合。 其中查询参数必须携带servSysId，其他查询字段可以根据设备的相关字段进行查询，如果包含ip查询条件，会根据ip字段进行模糊查询。 除了servSysId，其他查询字段可增加后缀“StartsWith”、“EndsWith”、“Contains”， “Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getDevsOfServSys?ssId=1&nameContains=dev001&ip=12.12.12.12",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>此字段必须提供。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n\"content\": [{\n    \"id\": 1,\n    \"name\": \"111\",\n    \"ip\": \"6.6.6.6\",\n    \"joinTime\": 1463377830578,\n    \"joinUserId\": 1,\n    \"deleted\": false,\n    \"state\": 0\n    }],\n    \"last\": true,\n    \"totalPages\": 1,\n    \"totalElements\": 1,\n    \"number\": 0,\n    \"size\": 50\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getDevsOfServSys"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/servSys/getDevsOutOfServSys",
    "title": "获取不包含在任何业务系统下的设备",
    "version": "1.0.0",
    "name": "getDevsOutOfServSys",
    "group": "servSys",
    "description": "<p>获取不包含在任何业务系统下的设备。 可以通过设备的相关字段进行查询可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getDevsOutOfServSys",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n\"content\": [{\n    \"id\": 1,\n    \"name\": \"111\",\n    \"ip\": \"6.6.6.6\",\n    \"joinTime\": 1463377830578,\n    \"joinUserId\": 1,\n    \"deleted\": false,\n    \"state\": 0\n    }],\n    \"last\": true,\n    \"totalPages\": 1,\n    \"totalElements\": 1,\n    \"number\": 0,\n    \"size\": 50\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getDevsOutOfServSys"
      }
    ],
    "parameter": {
      "fields": {
        "过滤项基本信息": [
          {
            "group": "过滤项基本信息",
            "type": "String",
            "size": "1..30",
            "optional": false,
            "field": "name",
            "description": "<p>资源名，过滤例子：nameContains=ad,表示查询帐户包含“ad”的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>资源ip，过滤例子：ipIn=&quot;192.168.99.6&quot;,表示查询ip是&quot;192.168.99.63&quot;的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Object",
            "optional": false,
            "field": "sysType",
            "description": "<p>过滤支持多个资源类型“或”， 过滤例子：sysType.idIn=1,2 表示查询资源类型id为“1”或者为“2”的资源。</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Number",
            "size": "0-1",
            "optional": false,
            "field": "state",
            "description": "<p>状态，过滤支持多个状态“或”，过滤例子：stateIn=0,1, 表示查询状态为0或者为1</p>"
          },
          {
            "group": "过滤项基本信息",
            "type": "Objetc",
            "optional": false,
            "field": "extInfo",
            "description": "<p>扩展信息：分4类，字符串，数字，日期，可选项。 (1)字符串类型，Contains 模糊过滤，例如：extInfo.1Contains=&quot;dev&quot; 查询所有extInfo.1包含&quot;dev&quot;的资源， (2)数字类型，Is 精确过滤，例如：extInfo.1Is=3 查询所有extInfo.1为3的资源， (3)日期类型，Is 精确过滤，例如：extInfo.1Is= &quot;2018-09-08 00:00:00&quot; 查询所有extInfo.1为&quot;2018-09-08 00:00:00&quot;的资源， (4)可选项，In 数组过滤，例如：extInfo.1In= 1,2 查询所有extInfo.1为“1”或者“2”的资源，</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/servSys/getFreeDevs/:id",
    "title": "获取业务系统下的独立设备",
    "version": "1.0.0",
    "name": "getFreeDevs",
    "group": "servSys",
    "description": "<p>获取业务系统下的设备分页对象。 可以根据设备的相关字段进行查询，字段可增加后缀“StartsWith”、“EndsWith”、“Contains”， “Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getFreeDevs/1?ip=192.168.0.1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>业务系统id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n\"content\": [{\n    \"id\": 1,\n    \"name\": \"switch_erp\",\n    \"ip\": \"192.168.0.1\",\n    \"joinTime\": 1463377830578,\n    \"joinUserId\": 1,\n    \"deleted\": false,\n    \"state\": 0\n    }],\n    \"last\": true,\n    \"totalPages\": 1,\n    \"totalElements\": 1,\n    \"number\": 0,\n    \"size\": 50\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "业务系统不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getFreeDevs/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/getFreeUsers/:id",
    "title": "获取业务系统下的独立用户",
    "version": "1.0.0",
    "name": "getFreeUsers",
    "group": "servSys",
    "description": "<p>获取业务系统下的独立用户分页对象。 查询字段可增加后缀“StartsWith”、“EndsWith”、“Contains”，“Like”，“NotLike”，“Equals”， “Before”，“After”，“GreaterThan”，“GreaterThanEqual”，“LessThan”，“LessThanEqual”，“Between”， “In”，“NotIn”，“Null”，“NotNull”，“True”，“False”等，用于对查询条件进行约束和限定。对多值条件（ Between、In、NotIn）可使用逗号“,”分隔多个条件。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getFreeUsers/1?nameContains=admin",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>业务系统id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n\"content\": [{\n    \"id\": 1,\n    \"name\": \"admin\"\n    }],\n    \"last\": true,\n    \"totalPages\": 1,\n    \"totalElements\": 1,\n    \"number\": 0,\n    \"size\": 50\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "业务系统不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getFreeUsers/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/getRulesByServSysId/:ssId",
    "title": "获取业务系统下的访问规则列表",
    "version": "1.0.0",
    "name": "getRulesByServSysId",
    "group": "servSys",
    "description": "<p>根据业务系统id，获取业务系统下的访问规则，返回访问规则列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getRulesByServSysId/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>业务系统id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n [{\n\"id\": 1,\n\"servSys\": {\n   \"id\": 1,\n   \"name\": \"杭州分行业务系统\",\n   \"type\": 1,\n   \"parent\": {\n       \"id\": 0,\n       \"name\": \"银行跟节点\"\n       \"type\": 0\n   }\n  },\n  \"userGroup\": {\n   \"id\": 1,\n   \"name\": \"adminGroup\"\n  },\n  \"devGroup\": {\n   \"id\": 1,\n   \"name\": \"switchDevs\"\n  },\n  \"loginRuleTemplate\": {\n   \"id\": 1,\n   \"name\": \"登录模板1\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "访问规则不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getRulesByServSysId/:ssId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/:id",
    "title": "获取业务系统",
    "version": "1.0.0",
    "name": "getServSysById",
    "group": "servSys",
    "description": "<p>根据id查询业务系统</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>业务系统id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n\"id\": 3,\n\"name\": \"杭州分行\",\n\"description\": \"运维系统业务节点\",\n\"type\": 1,\n\"parent\": {\n    \"id\": 0,\n    \"type\": 0,\n    \"name\": \"根节点\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "业务系统不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/getServSysTreeObj",
    "title": "获取业务系统完整树对象",
    "version": "1.0.0",
    "name": "getServSysTreeObj",
    "group": "servSys",
    "description": "<p>获取业务系统完整树对象，返回业务系统所有对象构成的树结构json数据。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getServSysTreeObj",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"id\": 1,\n \"name\": \"业务系统\",\n \"color\": \"\",\n \"background\": \"\",\n \"description\": \"root\",\n \"type\": 0,\n \"children\": [\n     {\n         \"id\": 2,\n         \"name\": \"servsys\",\n         .......\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getServSysTreeObj"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/getUserGroupsCount/:id",
    "title": "获取业务系统下的用户分组数量",
    "version": "1.0.0",
    "name": "getUserGroupsCount",
    "group": "servSys",
    "description": "<p>获取业务系统下的用户分组数量</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getUserGroupsCount/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>业务系统id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n123",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "业务系统不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getUserGroupsCount/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/servSys/getUserGroupsOutOfServSys/:ssId",
    "title": "获取不在此业务系统下的用户分组",
    "version": "1.0.0",
    "name": "getUserGroupsOutOfServSys",
    "group": "servSys",
    "description": "<p>获取不在当前业务系统下的用户分组</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getUserGroupsOutOfServSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>此字段必须提供。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n\"content\": [{\n    \"id\": 1,\n    \"name\": \"111\"\n    }],\n    \"last\": true,\n    \"totalPages\": 1,\n    \"totalElements\": 1,\n    \"number\": 0,\n    \"size\": 50\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getUserGroupsOutOfServSys/:ssId"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/servSys/getUsersOutOfServSys/:ssId",
    "title": "获取不在当前业务系统下的用户",
    "version": "1.0.0",
    "name": "getUsersOutOfServSys",
    "group": "servSys",
    "description": "<p>获取不在当前业务系统下的用户</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getUsersOutOfServSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>此字段必须提供。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n\"content\": [{\n    \"id\": 1,\n    \"name\": \"111\"\n    }],\n    \"last\": true,\n    \"totalPages\": 1,\n    \"totalElements\": 1,\n    \"number\": 0,\n    \"size\": 50\n }",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getUsersOutOfServSys/:ssId"
      }
    ],
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/servSys/saveServSys/:id",
    "title": "修改业务系统(不包含关联关系)",
    "version": "1.0.0",
    "name": "modifyServSys",
    "group": "servSys",
    "description": "<p>修改业务系统节点基本信息（只能修改名称和父节点）。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/saveServSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>业务系统id。</p>"
          }
        ],
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "name",
            "description": "<p>业务系统名称。</p>"
          },
          {
            "group": "请求参数",
            "type": "Object",
            "optional": true,
            "field": "parent",
            "description": "<p>非必须，传入表示修改所属父节点。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "业务系统不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/saveServSys/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/servSys/getUserGroups/:id",
    "title": "获取业务系统下的用户分组",
    "version": "1.0.0",
    "name": "queryUserGroups",
    "group": "servSys",
    "description": "<p>获取业务系统下的用户分组分页对象。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/getUserGroups/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>此字段必须提供。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n\"content\": [{\n    \"id\": 1,\n    \"name\": \"111\"\n    }],\n    \"last\": true,\n    \"totalPages\": 1,\n    \"totalElements\": 1,\n    \"number\": 0,\n    \"size\": 50\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "业务系统不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/getUserGroups/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/servSys/removeFreeDevFromServSys/:ssId",
    "title": "移除独立设备出业务系统（批量）",
    "version": "1.0.0",
    "name": "removeFreeDevFromServSys",
    "group": "servSys",
    "description": "<p>批量移除独立设备出业务系统</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/removeFreeDevFromServSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n {\"id\": 1},\n {\"id\": 2}\n]",
          "type": "json"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>业务系统id</p>"
          }
        ],
        "请求参数": [
          {
            "group": "请求参数",
            "type": "Object[]",
            "optional": false,
            "field": "NULL",
            "description": "<p>多个设备id组成的数组，此参数无字段名，参考请求消息示例。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "业务系统或依赖对象不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/removeFreeDevFromServSys/:ssId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/servSys/removeFreeUserFromServSys/:ssId",
    "title": "移除独立用户出业务系统（批量）",
    "version": "1.0.0",
    "name": "removeFreeUserFromServSys",
    "group": "servSys",
    "description": "<p>批量移除独立用户出业务系统，请求参数为用户列表，其中用户id为必须项。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/removeFreeUserFromServSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n {\"id\": 1},\n {\"id\": 2}\n]",
          "type": "json"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>业务系统id</p>"
          }
        ],
        "请求参数": [
          {
            "group": "请求参数",
            "type": "Object[]",
            "optional": false,
            "field": "NULL",
            "description": "<p>用户id组成的数组,此参数无字段名，请参考请求消息体示例。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "业务系统或依赖对象不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/removeFreeUserFromServSys/:ssId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/servSys/removeUserGroupFromServSys/:ssId",
    "title": "移除用户分组出业务系统（批量）",
    "version": "1.0.0",
    "name": "removeUserGroupFromServSys",
    "group": "servSys",
    "description": "<p>批量移除用户分组出业务系统</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/servSys/removeUserGroupFromServSys/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "ssId",
            "description": "<p>业务系统id</p>"
          }
        ],
        "请求参数": [
          {
            "group": "请求参数",
            "type": "Object[]",
            "optional": false,
            "field": "NULL",
            "description": "<p>多个用户分组id组成的数组，此参数无字段名，参考请求消息示例</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n {\"id\": 1},\n {\"id\": 2},\n {\"id\": 3}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "业务系统或依赖对象不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/ServSysController.java",
    "groupTitle": "servSys",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/servSys/removeUserGroupFromServSys/:ssId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/devGroup/:id",
    "title": "根据ID删除设备分组",
    "version": "1.0.0",
    "name": "devGroupDeleteByid",
    "group": "servsys_DevGroup",
    "description": "<p>根据设备分组ID删除设备分组</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备分组id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/DevGroup/1",
        "type": "curl"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "失败回应消息 410 设备分组已经被删除",
          "content": "HTTP/1.1 410 Gone",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevGroupController.java",
    "groupTitle": "servsys_DevGroup",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devGroup/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/devGroup/devsCount/:id",
    "title": "获取设备分组下的设备数量",
    "version": "1.0.0",
    "name": "devGroupDevsCountById",
    "group": "servsys_DevGroup",
    "description": "<p>根据设备分组ID查询并返回其包含设备的数量</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/DevGroup/devsCount/1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n123",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备分组不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevGroupController.java",
    "groupTitle": "servsys_DevGroup",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devGroup/devsCount/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/devGroup/:id",
    "title": "获取设备分组信息",
    "version": "1.0.0",
    "name": "devGroupFindById",
    "group": "servsys_DevGroup",
    "description": "<p>根据设备分组ID查询并返回设备分组的信息。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/DevGroup/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备分组的 ID。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n  \"id\": 1,\n  \"name\": \"switch_group\",\n  \"description\": \"Switch devices\",\n  \"servSys\": {\n     \"id\": 1,\n     \"name\": \"erp component 1\",\n     \"parent\": {\n           \"id\": 0,\n           \"name\": \"root of all servSys\",\n           \"description\": \"root node\"\n         }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "设备分组不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevGroupController.java",
    "groupTitle": "servsys_DevGroup",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devGroup/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/devGroup/listDevs/:id",
    "title": "获取设备分组下的设备列表",
    "version": "1.0.0",
    "name": "devGroupListDevsById",
    "group": "servsys_DevGroup",
    "description": "<p>根据设备分组ID，返回其设备列表。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/DevGroup/listDevs/1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备分组的 ID。</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": " HTTP/1.1 200 OK\n {\n \"content\": [{\n   \"id\": 1,\n   \"name\": \"pc1\",\n   \"ip\": \"10.10.1.1\"\n   }],\n   ......\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "设备分组不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/DevGroupController.java",
    "groupTitle": "servsys_DevGroup",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devGroup/listDevs/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/devGroup",
    "title": "创建设备分组",
    "version": "1.0.0",
    "name": "devGroupPost",
    "group": "servsys_DevGroup",
    "description": "<p>创建业务系统下的一个新的设备分组</p>",
    "success": {
      "examples": [
        {
          "title": "成功回应 201 示例",
          "content": " HTTP/1.1 201 Created\n {\n  \"id\": 1,\n  \"name\": \"switch_group\",\n  \"description\": \"Switch devices\",\n  \"servSys\": {\n     \"id\": 1,\n     \"name\": \"erp servSys 1\"\n   },\n   \"devs\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevGroupController.java",
    "groupTitle": "servsys_DevGroup",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devGroup"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..128",
            "optional": false,
            "field": "name",
            "description": "<p>用户分组名称。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..512",
            "optional": true,
            "field": "description",
            "description": "<p>分组描述。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "servSys",
            "description": "<p>所属业务系统。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "servSys.id",
            "description": "<p>业务系统id。</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "devs",
            "description": "<p>分组下的设备列表。参数为设备列表。其中设备必须和所指定的设备分组同属于一个业务系统。 数据格式： &quot;devs&quot;: [{&quot;id&quot;: 1},{&quot;id&quot;: 2}]。不赋值或者为空列表时，表示没有关联的设备。有增加设备到列表接口、 移除设备出设备分组接口，可以使用这些接口执行增加移除设备操作。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "{\n \"name\": \"switch_group\",\n \"description\": \"Switch devices\",\n \"servSys\": {\n     \"id\": 1\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/devGroup/:id",
    "title": "修改设备分组",
    "version": "1.0.0",
    "name": "devGroupPut",
    "group": "servsys_DevGroup",
    "description": "<p>可以修改设备分组的名称和描述。设备关联关系可以通过“增加设备到分组”和“批量移除设备分组中的设备进行维护”。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/DevGroup/1\n{\n \"name\": \"devGorup001\",\n \"description\": \"devGorup001\",\n}",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>设备分组id。</p>"
          }
        ],
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "size": "1..128",
            "optional": true,
            "field": "name",
            "description": "<p>用户分组名称。</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "size": "1..512",
            "optional": true,
            "field": "description",
            "description": "<p>分组描述。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "设备分组不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/DevGroupController.java",
    "groupTitle": "servsys_DevGroup",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devGroup/:id"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/devGroup/getDevGroups",
    "title": "获取设备分组列表",
    "version": "1.0.0",
    "name": "getDevGroups",
    "group": "servsys_DevGroup",
    "description": "<p>根据查询条件获取设备分组列表</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/DevGroup/getDevGroups?nameContains=xxx&servSys.nameContains=xxx",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "查询参数": [
          {
            "group": "查询参数",
            "optional": false,
            "field": "name",
            "description": "<p>用户分组名称。</p>"
          },
          {
            "group": "查询参数",
            "optional": false,
            "field": "servSys",
            "description": "<p>所属业务系统。可以通过业务系统后缀查询，比如 servSys.name=xxxx</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>请求的分页号，从 0 开始。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-2000",
            "optional": true,
            "field": "size",
            "defaultValue": "20",
            "description": "<p>每页返回的记录数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>排序方式。格式为：属性名(,asc|desc)，缺省为升序（asc）。例如：sort=firstname&amp;sort=lastname,asc。</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功回应 200 示例",
          "content": "HTTP/1.1 200 OK\n{\n \"content\": {\n   \"name\": \"switch_group\",\n   \"description\": \"Switch devices\",\n   \"servSys\":{\n     \"id\": 1,\n     \"name\": \"erp component 1\",\n     \"parent\": {\n         \"id\": 0,\n         \"name\": \"root of all servSys\",\n         \"description\": \"root node\"\n        }\n     }\n },\n .....\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalElements",
            "description": "<p>符合条件的总记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPages",
            "description": "<p>符合条件的总页数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>当前请求的分页号，同请求参数中的 page。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>每页返回的记录数，同请求参数中的 size。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "first",
            "description": "<p>当前是否为第一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "last",
            "description": "<p>当前是否为最后一页。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfElements",
            "description": "<p>实际返回的记录数。</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "content",
            "description": "<p>返回的数据。</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "设备分组不存在 404 错误示例",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "java/com/shterm/device/web/api/DevGroupController.java",
    "groupTitle": "servsys_DevGroup",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devGroup/getDevGroups"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/dev/mergeDevs/:opType/:opId",
    "title": "增加资源到资源分组",
    "version": "1.0.0",
    "name": "mergeDevs",
    "group": "servsys_DevGroup",
    "description": "<p>增加资源到资源分组。如果操作类型opType=0，会将选择的资源列表， 合并到指定DevGroup的资源列表中。资源和资源分组必须属于同一个业务系统， 资源可以属于同一个业务系统下的不同资源分组。</p>",
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/dev/mergeDevs/0/2",
        "type": "curl"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "请求消息体示例",
          "content": "[\n    {\"id\": 1},\n    {\"id\": 2}\n]",
          "type": "json"
        }
      ],
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "opType",
            "description": "<p>增加资源到分组操作，操作码必须为0。</p>"
          },
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "opId",
            "description": "<p>资源分组的id。</p>"
          }
        ],
        "请求参数": [
          {
            "group": "请求参数",
            "type": "Object[]",
            "optional": false,
            "field": "NULL",
            "description": "<p>多个资源组成的数组。此参数无字段名，请参考请求消息体示例。</p>"
          }
        ]
      }
    },
    "filename": "java/com/shterm/device/web/api/DevController.java",
    "groupTitle": "servsys_DevGroup",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/dev/mergeDevs/:opType/:opId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/devGroup/removeDev/:dgId/:dId",
    "title": "删除设备分组下边的指定设备",
    "version": "1.0.0",
    "name": "removeDevBydgIdAnddId",
    "group": "servsys_DevGroup",
    "description": "<p>根据设备分组ID和设备id，移除设备出特定设备分组。</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "dgId",
            "description": "<p>设备分组id</p>"
          },
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "dId",
            "description": "<p>设备id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/DevGroup/removeDev/1/1",
        "type": "curl"
      }
    ],
    "filename": "java/com/shterm/device/web/api/DevGroupController.java",
    "groupTitle": "servsys_DevGroup",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devGroup/removeDev/:dgId/:dId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/devGroup/removeDevs/:dgId",
    "title": "批量移除设备分组中的设备",
    "version": "1.0.0",
    "name": "removeDevsBydgId",
    "group": "servsys_DevGroup",
    "description": "<p>移除指定设备分组中的设备列表</p>",
    "parameter": {
      "fields": {
        "路径参数": [
          {
            "group": "路径参数",
            "type": "Number",
            "optional": false,
            "field": "dgId",
            "description": "<p>设备分组id。</p>"
          }
        ],
        "请求参数": [
          {
            "group": "请求参数",
            "type": "Object[]",
            "optional": false,
            "field": "NULL",
            "description": "<p>设备列表，参数为设备分组下的设备所组成的数组。此参数无字段名，请参考请求示例。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "请求示例",
        "content": "curl -i http://localhost/api/DevGroup/removeDevs/1\n[{\n   \"id\": 1\n},\n{\n   \"id\": 2\n}\n]",
        "type": "curl"
      }
    ],
    "filename": "java/com/shterm/device/web/api/DevGroupController.java",
    "groupTitle": "servsys_DevGroup",
    "sampleRequest": [
      {
        "url": "http://10.10.0.20/shterm/api/devGroup/removeDevs/:dgId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "成功回应 204 示例",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "code",
            "description": "<p>错误码。目前支持错误码包括：</p> <ul> <li>Max：数字超过允许的最大值；</li> <li>Min：数字超过允许的最小值；</li> <li>Size：字符串超过允许的最大长度；</li> <li>Pattern：提交的值不符合特定正则表达式的匹配规则；</li> <li>Null：提交的值必须为 <code>null</code>；</li> <li>NotNull：提交的值必须不能为 <code>null</code>；</li> <li>Duplicate：数据已经存在，例如新增加的名字已经被使用了；</li> <li>NotExist：依赖的数据不存在或已经被删除，例如给用户设定某角色，在提交时该角色已经被其他用户删除了；</li> <li>InUse：由于数据正在被使用或被引用，不允许删除或修改；</li> <li>Conflict：提交的请求数据，在系统中存在业务冲突，例如一个独立设备只能关联一个业务系统；修改或删除系统预定义的数据等；</li> <li>TypeMismatch：提交的值不符合要求的类型。此时回应信息中包含的 \"requiredType\" 字段给出要求的类型。</li> </ul>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "objectName",
            "description": "<p>出错的实体名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "field",
            "description": "<p>出错的属性或参数名称。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "requiredType",
            "description": "<p>要求的数值类型。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "rejectedValue",
            "description": "<p>错误值。</p>"
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "defaultMessage",
            "description": "<p>错误信息。</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "无效请求回应 400 示例",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"Duplicate\",\n  \"objectName\": \"MyObject\",\n  \"field\": \"myField\",\n  \"requiredType\": \"java.lang.Lang\",\n  \"rejectedValue\": \"sampleValue\",\n  \"defaultMessage\": \"errorMsg\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
