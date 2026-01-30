from flask import Blueprint, jsonify
import json

projects_bp = Blueprint("projects", __name__)

@projects_bp.route("/", methods=["GET"])
def get_projects():
    with open("data/projects.json") as f:
        data = json.load(f)
    return jsonify(data)
