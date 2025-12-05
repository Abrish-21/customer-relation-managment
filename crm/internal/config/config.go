package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	AppPort string
	DBHost  string
	DBUser  string
	DBPass  string
	DBName  string
	DBPort  string
}

func Load() *Config {
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env found, using system env variables")
	}

	return &Config{
		AppPort: getEnv("APP_PORT", "8080"),
		DBHost:  getEnv("DB_HOST", "localhost"),
		DBUser:  getEnv("DB_USER", "postgres"),
		DBPass:  getEnv("DB_PASS", "password"),
		DBName:  getEnv("DB_NAME", "swiftcrm"),
		DBPort:  getEnv("DB_PORT", "5432"),
	}
}

func getEnv(key, fallback string) string {
	if val, ok := os.LookupEnv(key); ok {
		return val
	}
	return fallback
}
