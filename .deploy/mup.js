module.exports = {
  servers: {
    one: {
      host: '159.203.139.9',
      username: 'root',
      pem: '~/.ssh/id_rsa'
    }
  },

  app: {
    name: 'coffeecu',
    path: '../',

    volumes: {
      '/upload': '/upload'
    },

    docker: {
      image: 'abernix/meteord:base',
      prepareBundle: false
    },

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: 'https://coffeecu.com',
      MONGO_URL: 'mongodb://localhost/meteor',
      MAIL_URL: 'smtps://postmaster%40coffeecu.mailgun.org:a92b089cefd9fd6983cbe50596ebda05@smtp.mailgun.org:587',
    },

    // This is the maximum time in seconds it will wait
    // for your app to start
    // Add 30 seconds if the server has 512mb of ram
    // And 30 more if you have binary npm dependencies.
    deployCheckWaitTime: 300,

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    port: 27017,
    version: '3.4.0',
    servers: {
      one: {}
    }
  },

  proxy: {
    domains: 'coffeecu.com,www.coffeecu.com',

    ssl: {
      // Enable Let's Encrypt
      forceSSL: true,
      letsEncryptEmail: 'stanley.yu@columbia.edu'
    }
  }
};