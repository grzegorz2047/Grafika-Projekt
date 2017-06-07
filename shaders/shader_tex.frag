#version 430 core

uniform vec3 objectColor;
uniform vec3 lightDir;

in vec3 interpNormal;
in vec2 vertexTexC;
uniform sampler2D sampler;

void main()
{
	vec4 textureColor = texture2D(sampler, vertexTexC * -1);
	vec3 normal = normalize(interpNormal);
	float diffuse = max(dot(normal, -lightDir), 0.0);
	gl_FragColor = vec4(vec3(textureColor) * diffuse, 1.0);
}
