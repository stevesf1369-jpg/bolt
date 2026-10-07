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
        message: [
          "node -e \"const fs=require('fs'); const path=require('path'); const {execSync}=require('child_process'); const appDir=process.cwd(); const nodeModules=path.join(appDir,'node_modules'); const needsInstall=!fs.existsSync(nodeModules); const needsWrangler=!fs.existsSync(path.join(nodeModules,'wrangler')); if (needsInstall || needsWrangler) { const commands=[]; if (needsInstall) commands.push('npm install --prefer-offline --no-fund --no-audit --progress=false'); if (needsWrangler) commands.push('npm install wrangler@3.57.1 --prefer-offline --no-fund --no-audit --progress=false'); execSync(commands.join(' && '), { stdio: 'inherit' }); } else { console.log('Skipping npm install: dependencies are already present'); }\""
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: "uv pip install --disable-pip-version-check litellm[proxy]==1.57.4"
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
