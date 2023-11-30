export default {
  port: 1337,
  dbUri:
    "mongodb+srv://admin:admin@cluster0.unxgz.mongodb.net/rest-api-tutorial?retryWrites=true&w=majority",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrTrMNCk5etjpew3F6oIeC4L5P
pr/0CmUtMSYUCYmkqtgzm8SCvgWFPGO7Y9RCGBHNmrjWtnom99WEdfPcPLSSPTWp
RH9+qvbRRfbtXnPoMoB2jbPutwm+7VdUrTSfH2W117wiT0Q4fWzfzv+P3SHpQJmK
4FPySYbNstmrNImK+wIDAQAB
-----END PUBLIC KEY-----
`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQCrTrMNCk5etjpew3F6oIeC4L5Ppr/0CmUtMSYUCYmkqtgzm8SC
vgWFPGO7Y9RCGBHNmrjWtnom99WEdfPcPLSSPTWpRH9+qvbRRfbtXnPoMoB2jbPu
twm+7VdUrTSfH2W117wiT0Q4fWzfzv+P3SHpQJmK4FPySYbNstmrNImK+wIDAQAB
AoGBAI16QJu7cD/+RbSvuw+odmIblHEZ6Rv2Xdr15VnVCq1JP6dXtPK5VrvTxRYk
+07erA1fA9qn97gpJFjyRUUViZaDcDQWd4hqAo1NUb+51suo/ibSvmf3nOfVCTrD
4RVcKs7u5H7pHRda1yhcWiNn0LM4g26wyhGfXmrq+Zb3BEFJAkEA8sXVSmA+XOSS
/wvi4gydl/G17jAZzkYDsrEevpjL7Z5d3hpXGaBbOSdME6wd41dUoYb3z4i2ip2O
bt27rxb1XQJBALSkE1f3uZHNUvEtHHh3QIosrSQ+/HbizwhzoZdQ/TQJ6j2aEPT3
BD7HL8ZOYXlF3f0ows6cbOe3AE4xfv8k5DcCQCNp6GspDu/OCANcYIRJAtQfVkKg
kaMdY3y1iZ6T+2t2Jos3nG0Ij0YPDXHxMYrwOlA1uAB2GOqvgQ97GN25o6ECQQCd
ShTRzxGVRCyJdhdJScU3y0kDu5iHSFyvZkf5AvtGma+N7h3/vyrCIxyVVuCHAXAX
JKvjzc8CQJWSgIStU4knAkEA4TK6H+ArVOdGxqBp3VRqDvoGexVvFAIL0ZKO5oCI
9k3/CJMi+08A+Msvm2yNyVXvLS5KGvd1GKr1rpLriZlCXQ==
-----END RSA PRIVATE KEY-----`,
};
