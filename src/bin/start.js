import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import { config } from '../webpack'

/**
 * Display compilation output
 */
function callback() {
  console.log(`Starting server on http://localhost:${config.devServer.port}`)
  console.log()
}

/**
 * Start in-memory dev server
 */
export default function start() {
  const compiler = webpack(config)
  const server = new WebpackDevServer(compiler, config.devServer)
  // Start server and listen to port
  server.listen(config.devServer.port, '127.0.0.1', callback)
}
