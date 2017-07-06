#!/usr/bin/env bash

[ -z "$TOMCAT" ] && read -ep "Tomcat-Verzeichnis? (Autovervollständigung mit TAB erlaubt): " TOMCAT

./node_modules/.bin/ng build --output-path $TOMCAT/webapps/ROOT/ --watch -dev
