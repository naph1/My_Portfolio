from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

from routes.projects import projects_bp
from routes.cybersecurity import cybersecurity_bp
from routes.contact import contact_bp
from config import DevelopmentConfig, ProductionConfig

load_dotenv()

app = Flask(__name__)
CORS(app)

env = os.getenv("FLASK_ENV", "development")

if env == "production":
    app.config.from_object(ProductionConfig)
else:
    app.config.from_object(DevelopmentConfig)

app.register_blueprint(projects_bp, url_prefix="/api/projects")
app.register_blueprint(cybersecurity_bp, url_prefix="/api/cybersecurity")
app.register_blueprint(contact_bp, url_prefix="/api/contact")

if __name__ == "__main__":
    app.run()
