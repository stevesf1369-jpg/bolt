module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "node -e \"const fs=require('fs'); const path=require('path'); const {execSync}=require('child_process'); const nodeModules=path.join(process.cwd(),'node_modules'); if (!fs.existsSync(nodeModules)) { execSync('npm install --prefer-offline --no-fund --no-audit --progress=false', { stdio: 'inherit' }); } else { console.log('Skipping npm install: dependencies are already present'); }\""
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",
      message: "pip install --disable-pip-version-check litellm[proxy]==1.57.4"
    }
  }, {
    method: "fs.link",
    params: {
      venv: "env"
    }
  }]
}
