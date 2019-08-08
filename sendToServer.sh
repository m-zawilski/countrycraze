#!/bin/bash
HOST=$1
USER=$2
PASSWD=$3
NAME=$4

ftp $HOST <<END_SCRIPT
user $USER
$PASSWD
mput build/* /public_html/$NAME
quit
END_SCRIPT
exit 0