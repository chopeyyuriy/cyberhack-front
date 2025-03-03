module.exports = {
  apps: [
    {
      name: "cyber-hacks-front",
      exec_mode: "cluster",
      instances: 2, // Or a number of instances
      script: "npm",
      args: "start",
      max_memory_restart: "4096M",
    },
  ],
};
