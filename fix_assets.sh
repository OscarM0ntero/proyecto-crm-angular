#!/bin/bash
echo "Corrigiendo rutas de assets en main-*.js..."
sed -i 's|"/assets/IMG_|"/mh-torremolinos/assets/IMG_|g' /var/www/html/mh-torremolinos/main-*.js
echo "Corrección completada."
