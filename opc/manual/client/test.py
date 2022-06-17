#!/usr/bin/env python2.7

import sys

import urllib2

import json 

imc_url='10.153.88.11:8080'

http_url='http://'

api_url='/imcrs/plat/res/device?size=1000'

usernames='admin'

passwords='admin'

authhandler = urllib2.HTTPDigestAuthHandler()    

authhandler.add_password("iMC RESTful Web Services", imc_url, usernames, passwords)    

opener = urllib2.build_opener(authhandler)    

urllib2.install_opener(opener)    

pagehandle=urllib2.Request(http_url+imc_url+api_url)    

pagehandle.add_header('Accept', 'application/json')    

result = urllib2.urlopen(pagehandle)    
 
print json.loads(result.read()).values()


