from flask import Flask, render_template, send_from_directory, abort, request, redirect, jsonify
import logging
import re

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/resume')
def resume():
    try:
        return send_from_directory('static/documents', 'Angello-Gonzalez-IBM-Certified.pdf', as_attachment=False)
    except FileNotFoundError:
        abort(404)

@app.route('/verify-badge')
def verify_badge():
    provider = request.args.get('provider')
    badge_id = request.args.get('id')
    certificate_type = request.args.get('certificateType')
    direct_redirection = request.args.get('directRedirection', 'false').lower() == 'true'

    app.logger.info(f"Received request to verify badge: provider={provider}, badge_id={badge_id}, certificate_type={certificate_type}, direct_redirection={direct_redirection}")

    allowed_certificate_type = ['professional', 'specialization', 'course']

    allowed_providers = {
        'credly': 'https://www.credly.com/{}/{}',
        'coursera': 'https://www.coursera.org/{}/{}'
    }

    # Validate provider
    if provider not in allowed_providers:
        app.logger.warning(f"Invalid provider: {provider}")
        abort(400)

    # Validate badge_id (alphanumeric and dashes only)
    if not re.match(r'^[A-Za-z0-9\-]+$', badge_id):
        app.logger.warning(f"Invalid badge_id: {badge_id}")
        abort(400)

    # Validate certificate_type
    if certificate_type not in allowed_certificate_type and certificate_type not in ['undefined', '', None]:
        app.logger.warning(f"Invalid certificate_type: {certificate_type}")
        abort(400)

    # Construct the URL prefix for each platform
    if provider == 'credly':
        url_prefix = 'badges'
    elif provider == 'coursera':
        url_prefix = 'verify'
        if certificate_type == 'professional':
            url_prefix += "/professional-cert"
        elif certificate_type == 'specialization':
            url_prefix += "/specialization"
    else:
        abort(400)
    
    url = allowed_providers[provider].format(url_prefix, badge_id)
    app.logger.info(f"Verified badge for provider={provider}, badge_id={badge_id}, certificate_type={certificate_type}, url={url}")

    if direct_redirection == True:
        return redirect(url, code=302)
    else:
        return jsonify({'url': url})
    
        # URL Examples
        # https://www.credly.com/badges/a8290c5d-d520-4e79-8a73-8f22fb590f97
        # https://www.coursera.org/verify/LWXF7TMK2PW6
        # https://www.coursera.org/verify/professional-cert/WG0EBLG9UOUX
        # https://www.coursera.org/verify/specialization/QS9GUJLEDXQF
    

if __name__ == "__main__":
    app.run(debug=False)
