const path = require('path')
module.exports = {
  version: "3.4.0",
  title: "bolt.diy",
  description: "Build frontend-only mini web apps with Bolt.diy. https://github.com/stackblitz-labs/bolt.diy",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = info.exists("app/node_modules")
    let shortcuts = [{
      icon: "fa-solid fa-stopwatch",
      text: "Tempo · Mini App",
      href: "tempo.html?raw=true",
    }, {
      icon: "fa-solid fa-wand-magic-sparkles",
      text: "Frontend-only Build Mode",
      href: "intro.html?raw=true#mini-app-mode",
    }]
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    if (running.install) {
      return [...shortcuts, {
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [...shortcuts, {
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
            popout: true,
          }, {
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [...shortcuts, {
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [...shortcuts, {
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [...shortcuts, {
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else {
        return [...shortcuts, {
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        }, {
          icon: "fa-solid fa-key",
          text: "Getting Started",
          href: "intro.html?raw=true"
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-solid fa-download",
          text: "Download Ollama Model",
          href: "custom_download.json"
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
        }]
      }
    } else {
      return [...shortcuts, {
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
