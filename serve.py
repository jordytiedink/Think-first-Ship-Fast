#!/usr/bin/env python3
"""Minimale statische server voor lokale preview (vermijdt os.getcwd in de sandbox)."""
import functools
import http.server
import os
import socketserver

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = 8765

Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)


class Server(socketserver.TCPServer):
    allow_reuse_address = True


with Server(("127.0.0.1", PORT), Handler) as httpd:
    httpd.serve_forever()
