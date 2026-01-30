import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "fallback-secret")
    DEBUG = False

class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False
