#!/bin/sh


jekyls_raw=$(find /Users/ch23936/git/eolapp/eoljek/_site -d -type f -iname "*.html" -not -iname "index*")

for j in $jekyls_raw; do
	id=$(basename "${j}" .html)

lopathsfx=$(echo $j | awk -F'_site' '{print $2}')
lopathpfx="eoljek/_site"
lopath=$lopathpfx$lopathsfx
curl "http://localhost:8983/solr/eoljek/update/extract?literal.id="$id"&literal.lopath="$lopath"&commit=true" -F "myfile=@"$j
done