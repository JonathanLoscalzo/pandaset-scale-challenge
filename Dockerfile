# Usa una imagen base de Node
FROM node:20-slim

# Crea el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu proyecto
COPY . .

# Instala las dependencias de la aplicación
RUN npm install

# Instala supervisord
RUN apt-get update && apt-get install -y supervisor wget && rm -rf /var/lib/apt/lists/*

# Descarga los framews
RUN bash scripts/get_frames.sh

# Copia el archivo de configuración de supervisord
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Comando de inicio
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]