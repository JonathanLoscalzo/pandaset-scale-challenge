#!/bin/bash

# URL base
base_url="https://static.scale.com/uploads/pandaset-challenge/frame_"

# Directorio de destino
destination_dir="public/frames/"

# Bucle para descargar los archivos desde frame_00 hasta frame_10
for i in {0..10}
do
  # Formatear el número con dos dígitos (00, 01, 02, ...)
  num=$(printf "%02d" $i)

  # Construir la URL completa
  url="${base_url}${num}.json"

  # Descargar el archivo usando wget
  wget -P $destination_dir $url
done