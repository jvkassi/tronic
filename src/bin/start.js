import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import { config } from '../webpack'

export default function start() {
  const compiler = webpack(config)
  const server = new WebpackDevServer(compiler, config.devServer)
  server.listen(config.devServer.port, '127.0.0.1', () => {
    console.log()
    console.log(`Starting server on http://localhost:${config.devServer.port}`)
    console.log()
  })
}
