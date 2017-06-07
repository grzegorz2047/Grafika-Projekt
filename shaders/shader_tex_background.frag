#version 430 core

uniform vec3 objectColor;

in vec3 interpNormal;
in vec2 vertexTexC;
uniform sampler2D sampler;

void main()
{
	vec4 textureColor = texture2D(sampler, vertexTexC * -1);
	vec3 normal = normalize(interpNormal);
	gl_FragColor = vec4(vec3(textureColor), 1.0);
}
