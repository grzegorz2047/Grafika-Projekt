#version 430 core

uniform vec3 objectColor;
uniform vec3 lightDir;

in vec3 interpNormal;
in vec2 vertexTexC;
in vec2 vertexP;
uniform sampler2D sampler;

void main()
{
	vec3 red = vec3(1,0,0);
	vec3 green = vec3(0,1,0);
	vec3 color;
	if(sin(vertexP.y * 5) > 0) color = red;
    else color = green;

	vec3 normal = normalize(interpNormal);
	float diffuse = max(dot(normal, -lightDir), 0.0);
	gl_FragColor = vec4(color * diffuse, 1.0);
}
