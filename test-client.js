import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js"
import { Client } from "@modelcontextprotocol/sdk/client/index.js"

async function testServer() {
  console.log("Testing remote server...")

  const transport = new StreamableHTTPClientTransport(
    new URL("https://ntx-bible-mcp-server.onrender.com/mcp")
  )

  const client = new Client(
    {
      name: "test-client",
      version: "1.0.0",
    },
    {
      capabilities: {},
    }
  )

  try {
    await client.connect(transport)
    console.log("✓ Connected successfully!")

    // Test listing tools
    const tools = await client.listTools()
    console.log(
      "✓ Available tools:",
      tools.tools.map((t) => t.name)
    )

    // Test calling a tool
    if (tools.tools.length > 0) {
      const result = await client.callTool(tools.tools[0].name, {})
      console.log(
        "✓ Tool call result:",
        result.content[0]?.text?.slice(0, 100) + "..."
      )
    }
  } catch (error) {
    console.error("✗ Error:", error.message)
  } finally {
    await client.close()
  }
}

testServer()
