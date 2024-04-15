module.exports = {
    apps: [
      {
        name: "trianametria", // Nombre que le das a la aplicación en PM2
        script: "npm run production", // Comando para iniciar tu aplicación
        instances: 1, // Número de instancias (1 por defecto)
        cwd: "/var/www/public/backend/cowhub", // Directorio de trabajo de tu aplicación
        env: {
          NODE_ENV: "production", // Variables de entorno (opcional)
        },
        // Otras opciones de configuración (reinicio automático, logs, etc.)
      },
      // Puedes agregar más aplicaciones a este arreglo
    ],
  };
