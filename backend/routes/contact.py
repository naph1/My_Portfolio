from flask import Blueprint, jsonify

contact_bp = Blueprint("contact", __name__)

@contact_bp.route("/", methods=["GET"])
def contact_info():
    return jsonify({
        "email": "your.email@example.com",
        "github": "https://github.com/yourusername",
        "linkedin": "https://linkedin.com/in/yourprofile"
    })
