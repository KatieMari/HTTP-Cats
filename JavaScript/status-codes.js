const codesAndDescriptions = {
    codes: [
      200, 404, 500, 403, 418, 100, 101, 102, 201, 202, 203, 204, 206, 207,
      300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 405, 406, 407,
      408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 420, 421, 422, 423,
      424, 425, 426, 429, 431, 444, 450, 451, 497, 498, 499, 501, 502, 503,
      504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 599
    ],
    descriptions: { 
      "100": "Continue - The server has received the request headers.",
      "101": "Switching Protocols - The server is switching protocols as requested.",
      "102": "Processing - The server has received and is processing the request.",
      "200": "OK - Success!",
      "201": "Created - The request was successful and resulted in a new resource being created.",
      "202": "Accepted - The request has been accepted for processing, but the processing is not complete.",
      "203": "Non-Authoritative Information - The server successfully processed the request, but the returned information may be from a third-party source.",
      "204": "No Content - The server successfully processed the request, but there is no content to return.",
      "206": "Partial Content - The server is returning a portion of the requested resource.",
      "207": "Multi-Status - The server is returning multiple status codes for a single request.",
      "300": "Multiple Choices - The server offers multiple options for the resource.",
      "301": "Moved Permanently - The resource has permanently moved to a new location.",
      "302": "Found - The resource has temporarily moved to a different location.",
      "303": "See Other - The response to the request can be found at a different location.",
      "304": "Not Modified - The resource has not been modified since the last request.",
      "305": "Use Proxy - The resource must be accessed through a proxy.",
      "307": "Temporary Redirect - The resource has temporarily moved to a new location.",
      "308": "Permanent Redirect - The resource has permanently moved to a new location.",
      "400": "Bad Request - The server could not understand the request due to invalid syntax.",
      "401": "Unauthorized - The client must authenticate itself to get the requested response.",
      "402": "Payment Required - Reserved for future use.",
      "403": "Forbidden - You don't have permission to access this resource.",
      "404": "Not Found - The server can't find the requested resource.",
      "405": "Method Not Allowed - The request method is not allowed for the requested resource.",
      "406": "Not Acceptable - The server cannot produce a response that is acceptable to the client.",
      "407": "Proxy Authentication Required - The client must authenticate through a proxy.",
      "408": "Request Timeout - The server timed out waiting for the request.",
      "409": "Conflict - The request conflicts with the current state of the server.",
      "410": "Gone - The resource is no longer available at the server.",
      "411": "Length Required - The server requires a Content-Length header.",
      "412": "Precondition Failed - The server does not meet one of the preconditions specified by the client.",
      "413": "Payload Too Large - The request is larger than the server is willing to process.",
      "414": "URI Too Long - The URI provided was too long for the server to process.",
      "415": "Unsupported Media Type - The server does not support the media type of the request.",
      "416": "Range Not Satisfiable - The client requested a range that is not available.",
      "417": "Expectation Failed - The server could not meet the expectation specified in the request header.",
      "418": "I'm a teapot - The server refuses to brew coffee.",
      "420": "Enhance Your Calm - The server is being overwhelmed and can't process the request.",
      "421": "Misdirected Request - The request was directed to the wrong server.",
      "422": "Unprocessable Entity - The server understands the content type, but the content is invalid.",
      "423": "Locked - The resource is locked and can't be modified.",
      "424": "Failed Dependency - The request failed due to a dependency on another request.",
      "425": "Too Early - The server is not ready to process the request.",
      "426": "Upgrade Required - The client should switch to a different protocol.",
      "429": "Too Many Requests - The user has sent too many requests in a given amount of time.",
      "431": "Request Header Fields Too Large - The server refuses to process the request because the header fields are too large.",
      "444": "No Response - The server returns no response and closes the connection.",
      "450": "Blocked by Windows Parental Controls - The request was blocked by Windows parental controls.",
      "451": "Unavailable For Legal Reasons - The resource is unavailable due to legal reasons.",
      "497": "HTTP Request Sent to HTTPS Port - The request was sent to an HTTPS port without using HTTPS.",
      "498": "Invalid Token - The provided token is invalid.",
      "499": "Client Closed Request - The client closed the request before the server could respond.",
      "500": "Internal Server Error - The server encountered an unexpected condition.",
      "501": "Not Implemented - The server does not support the functionality required to fulfill the request.",
      "502": "Bad Gateway - The server received an invalid response from an upstream server.",
      "503": "Service Unavailable - The server is currently unavailable (overloaded or down).",
      "504": "Gateway Timeout - The server did not receive a timely response from an upstream server.",
      "506": "Variant Also Negotiates - The server has an internal configuration error.",
      "507": "Insufficient Storage - The server is unable to store the representation needed to complete the request.",
      "508": "Loop Detected - The server detected an infinite loop while processing the request.",
      "509": "Bandwidth Limit Exceeded - The server has exceeded its bandwidth limit.",
      "510": "Not Extended - The server requires further extensions to fulfill the request.",
      "511": "Network Authentication Required - The client must authenticate to access the network.",
      "521": "Web Server Is Down - The server is down and cannot process the request.",
      "522": "Connection Timed Out - The server failed to respond to the connection request.",
      "523": "Origin Is Unreachable - The server is unable to reach the origin server.",
      "525": "SSL Handshake Failed - The SSL handshake failed.",
      "599": "Network Connect Timeout Error - The server did not respond in time."
    }
  }
  