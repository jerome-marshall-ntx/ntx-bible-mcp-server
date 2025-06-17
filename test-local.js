import { FastMCP } from "fastmcp"

const server = new FastMCP({
  name: "Test Nutanix Bible MCP",
  version: "1.0.0",
})

server.addTool({
  name: "test_tool",
  description: "A simple test tool",
  execute: async () => {
    return "Hello from Nutanix Bible MCP!"
  },
})

server.start({
  transportType: "httpStream",
  httpStream: {
    port: 3001,
    endpoint: "/mcp",
  },
})

console.log("Test server running at http://localhost:3001/mcp")
