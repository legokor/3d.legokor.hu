#!/bin/sh

rm *-sm.jpg

for img in *.jpg; do
    magick convert "$img" -resize 512x512^ "${img%.jpg}-sm.jpg"
done
