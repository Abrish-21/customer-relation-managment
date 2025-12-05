package app

import (
	"github.com/swiftcrm/backend/internal/config"
	"github.com/swiftcrm/backend/internal/logger"
	"github.com/swiftcrm/backend/internal/server"
)

func Run() {
	cfg := config.Load()
	log := logger.New()

	srv := server.New(cfg, log)
	srv.Start()
}
