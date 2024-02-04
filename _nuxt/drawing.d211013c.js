const e="#define GLSLIFY 1\nfloat aastep(float threshold,float value){float afwidth=length(vec2(dFdx(value),dFdy(value)))*0.70710678118654757;return smoothstep(threshold-afwidth,threshold+afwidth,value);}float aaedge(vec2 uv,float thresh){vec2 st=abs((uv-0.5)*2.0);float border=aastep(0.5,smoothstep(1.0,thresh,length(st.x)))*aastep(0.5,smoothstep(1.0,thresh,length(st.y)));return border;}\n#define BLACK vec3(0.0, 0.0, 0.0)\n#define WHITE vec3(1.0, 1.0, 1.0)\n#define RED vec3(1.0, 0.0, 0.0)\n#define GREEN vec3(0.0, 1.0, 0.0)\n#define BLUE vec3(0.0, 0.0, 1.0)\n#define YELLOW vec3(1.0, 1.0, 0.0)\n#define CYAN vec3(0.0, 1.0, 1.0)\n#define MAGENTA vec3(1.0, 0.0, 1.0)\n#define ORANGE vec3(1.0, 0.5, 0.0)\n#define PURPLE vec3(1.0, 0.0, 0.5)\n#define LIME vec3(0.5, 1.0, 0.0)\n#define ACQUA vec3(0.0, 1.0, 0.5)\n#define VIOLET vec3(0.5, 0.0, 1.0)\n#define AZUR vec3(0.0, 0.5, 1.0)\nfloat fill(in float x){return 1.0-aastep(0.0,x);}float fill(float x,float size,float edge){return 1.0-smoothstep(size-edge,size+edge,x);}float fill(float x,float size){return 1.0-aastep(size,x);}float stroke(in float d,in float t){return(1.0-aastep(t,abs(d)));}float stroke(float x,float size,float w){float d=aastep(size,x+w*0.5)-aastep(size,x-w*0.5);return clamp(d,0.0,1.0);}float stroke(float x,float size,float w,float edge){float d=smoothstep(size-edge,size+edge,x+w*0.5)-smoothstep(size-edge,size+edge,x-w*0.5);return clamp(d,0.0,1.0);}vec3 draw(in sampler2D t,in vec2 pos,in vec2 w){vec2 s=w/1.0;s.x*=-1.0;return texture2D(t,pos/s+0.5).rgb;}vec3 field(float d){const vec3 c1=mix(WHITE,YELLOW,0.4);const vec3 c2=mix(WHITE,AZUR,0.7);const vec3 c3=mix(WHITE,ORANGE,0.9);const vec3 c4=BLACK;float d0=abs(stroke(mod(d+0.1,0.2)-0.1,0.004));float d1=abs(stroke(mod(d+0.025,0.05)-0.025,0.004));float d2=abs(stroke(d,0.004));float f=clamp(d*0.85,0.0,1.0);vec3 gradient=mix(c1,c2,f);gradient=mix(gradient,c4,1.0-clamp(1.25-d*0.25,0.0,1.0));gradient=mix(gradient,c3,fill(d));gradient=mix(gradient,c4,max(d2*0.85,max(d0*0.25,d1*0.06125))*clamp(1.25-d,0.0,1.0));return gradient;}";export{e as g};
