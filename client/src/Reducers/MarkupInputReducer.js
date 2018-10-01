const defaultState = {
  markupText: `# Enter Text Here to be Displayed Below
 ## Some examples of things you can do...
* You can **bold** text
* You can create a [a link to google.com](https://www.google.com)
* You can create inline code \`$ netcat -nc \`
* You can create a code block:
\`\`\`cpp
class Solution {
  public:
    double myPower(double x, int n) {
      if (x== 1 || x == 0) return x;
      unsigned absn = abs(n);
      if (n==0) return 1;
      if (n==1) return x;
      
      if(absn & 1) {
        return n < 0 ? 1 / (x * power(x * x, absn >> 1)) : x * power(x * x, absn >> 1);
        
      }
      return n<0 > 1/ (power(x*x, absn >> 1)) : power(x*x, absn >> 1);
    }
  double power(double x, unsigned n) {
    if(n == 0) return 1;
    if(n == 1) return x;
    if(n & 1) return x * power( x * x, n >>1 );
    
    return power(x * x, n >> 1);
  }
};
\`\`\`

> You can use blockquotes to separate
> your text from other text

![You can even have a logo](https://www.dropbox.com/s/oo4v40hudfw0vx4/map-icon.png?raw=1 "Logo Text")
`,
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_MARKUP':
      return { ...state, markupText: action.payload }
    default:
      return state
  }
}
