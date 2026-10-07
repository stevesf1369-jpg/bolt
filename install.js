module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone -b stable https://github.com/stackblitz-labs/bolt.diy app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "npm install"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: "uv pip install litellm[proxy]==1.104.1"
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "env"
      }
    }
  ]
}
