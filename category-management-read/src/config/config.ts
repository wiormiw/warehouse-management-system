import dotenv from 'dotenv'
dotenv.config()

interface Config {
  port: number
  isProduction: boolean
  isDevelopment: boolean
  isTestEnvironment: boolean
  elasticCloud?: string
  elasticUsername?: string
  elasticPassword?: string
}

export const initConfig = (): Config => {
  const { NODE_ENV, PORT, ELASTIC_CLOUD_ID, ELASTIC_USERNAME, ELASTIC_PASSWORD } = process.env
  switch (NODE_ENV) {
    case 'development':
      return {
        isProduction: false,
        isDevelopment: true,
        isTestEnvironment: false,
        port: Number(PORT) || 3002,
        elasticCloud: ELASTIC_CLOUD_ID,
        elasticUsername: ELASTIC_USERNAME,
        elasticPassword: ELASTIC_PASSWORD
      }
    case 'production':
      return {
        isProduction: true,
        isDevelopment: false,
        isTestEnvironment: false,
        port: Number(PORT) || 3002
      }
    case 'test':
      return {
        isProduction: false,
        isDevelopment: false,
        isTestEnvironment: true,
        port: Number(PORT) || 4001
      }
    default:
      return {
        isProduction: false,
        isDevelopment: true,
        isTestEnvironment: false,
        port: Number(PORT) || 3002
      }
  }
}

export const config = initConfig()