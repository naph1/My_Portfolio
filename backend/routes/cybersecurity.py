from flask import Blueprint, jsonify
import json

cybersecurity_bp = Blueprint("cybersecurity", __name__)

@cybersecurity_bp.route("/", methods=["GET"])
def get_cybersecurity():
    with open("data/cybersecurity.json") as f:
        data = json.load(f)
    return jsonify(data)
