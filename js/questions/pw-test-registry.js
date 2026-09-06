
registerTest({
  series: "pw-cs-gate-2026",
  name: "SWt - C programming",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `Consider the following expression using variable <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">-p + q - r + - s % t / u;</code></pre> Which of the following are TRUE ?`,
      image: "",
      options: ["p = 2, q = 11, r = 7, s = -9, t = 6, u = 2 the expression evaluated to 3", "p = 2, q = 11, r = 7, s = 9, t = 6, u = 2 the expression evaluated to 1", "p = 2, q = 11, r = 7, s = -9, t = 6 , u = 3 the expression evaluated to 2", "p = 2, q = 10, r = 7, s = -9, t = 6 , u = 2 the expression evaluated to 3"],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/pw-c-prog/q_img2.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `What will be output if you will execute following c code? <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;
int main()
{

int i=1, j=1, sum=0;

while (i++ &lt;= 10)
{

sum = sum +10*j-4*i;

j +=2;

}

printf("%d", sum);

return 0 ;

}</code></pre>`,
      image: "",
      options: [],
      answer: "740",
      solution: `<img src="/images/quiz/pw-c-prog/q_img4.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `Consider the following C-declaration and assignments. <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">char *a, *b, c[10], d[10];</code></pre> Which assignments will result in error ?`,
      image: "",
      options: ["a = b; // Line 1", "b = c++; // Line", "c = d; // line 3", "*b = d[1]; // Line 4"],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/pw-c-prog/q_img6.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `What will be output if you will execute following c code? <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int bar(int num)
{
static int i=10;
i++;
return num*i;
}

int main()
{
int val = 0;
for(int i=10;i&gt;=2;i/=2)
val = val+bar(i);
printf("%d", val);
return 0;
}</code></pre>`,
      image: "",
      options: ["196", "100", "202", "1100"],
      answer: "A",
      solution: `<img src="/images/quiz/pw-c-prog/q_img8.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `consider the following C-Prog <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;
int foo(int n)
{
int j=1,i;

if (n==1) return j;

for (i=1; i&lt;n; ++i)
j = j + foo(n-i)+foo(i);

return j;
}</code></pre> The return value of foo(6) is _________`,
      image: "",
      options: [],
      answer: "243",
      solution: `<img src="/images/quiz/pw-c-prog/q_img10.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the following C program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c"># include &lt;stdio.h&gt;
int acc;
void foo(int**, int);

int main()
{
int a[ ] ={11, -4, 5, -1, 11, 14};
int *p[ ]={a, a+5, a+3, a+1, a+2, a+4};
int n = 1;
foo(p,n);
printf("%d", acc);
return 0;
}
void foo(int **ptr, int n)
{
if (n&gt;5)
return;
if (**ptr&gt;0)
acc=acc+**ptr;
foo(ptr+1, n+1);
return;
}</code></pre> What will be the output of the program?`,
      image: "",
      options: [],
      answer: "30",
      solution: `<img src="/images/quiz/pw-c-prog/q_img12.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int main ()
{
char str1[ ] = "abbcdd";
char str2[ ] = "acccde";
int ch=0;
char *s1, *s2;
s1 = str1;
s2 = str2;
while(*s1!='\0'||*s2!='\0')
{
if (*s1==*s2)
ch+= *s1;
s1++;
s2++;
}
printf("%d", ch);
}</code></pre>`,
      image: "",
      options: ["296", "198", "97", "195"],
      answer: "A",
      solution: `<img src="/images/quiz/pw-c-prog/q_img14.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;
int main()
{

int i, j,k,m, count;

count=0;

i=0;

m=0;

for (k = 1; k&lt;=2;k++)

for (j=-3; j&lt;=3; j++) {

if (( j &lt;= 0) &amp;&amp; (i++) &amp;&amp; m++)

count = count + j +m;

}

printf("%d ", count);

return 0;

}</code></pre> The output of the program is _______`,
      image: "",
      options: ["13", "80", "20", "8"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img16.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Find the output of the following program. <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c"># include &lt;stdio.h&gt;

int main ()
{

int a, b;

int count = 3;

int *ptr = &amp;count;;

int **ptr1= &amp;ptr;

a = ++(*ptr)+40;

b = ++(**ptr1)+40;

b=2*(*ptr+++5);

printf ("\n %d", a-b);

return 0;

}</code></pre> The output of the above program is_____`,
      image: "",
      options: ["20", "25", "24", "23"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img18.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following function written in the C programming language. <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

void bar(char*);

void foo(char *a)
{

if (*a)
{

bar(++a);

putchar(*a);

}

}

void bar(char *a)
{

if(*a)
{

putchar(*a);

foo(a+1);

}

}

int main()
{

foo("abcd");

return 0;

}</code></pre> What is the output of the above C program?`,
      image: "",
      options: ["abcd", "bdbd", "bddb", "bbdd"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img20.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int main()
{
    int a=10,b=20, c = 24;
    for (int i = 0;i&lt;7;i++)
    {
        switch(i)
        {
            default:
                b^c||a++;
                break;
            case 6:
                b--*70;
                break;
            case 5:
                c = a&gt;&gt;=4;
                break;
            case 1:
                a++ + b++ - c++;
                break;
        }
    }
    printf("%d \n",a+b+c);
    return 0;
}</code></pre>`,
      image: "",
      options: ["25", "20", "31", "7"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-c-prog/q_img22.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

int main (int argc, char* argv [])
{
char a = 'R';
char b = 'j';
char c = ++a|b? (a-- &amp; b)+'*':(b^a) - '-';
char d = (c-- ^ b) + '*' ;
char e = (~c + c + 67);
printf ("%c %c %c", c,d,e);
return 0;
}</code></pre> ASCII encoding for relevant characters is given below <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">*  = 42
+  = 43
-  = 45</code></pre> output of the program is ________`,
      image: "",
      options: ["Z k s", "k 0 B", "L 0 A", "N t 9"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-c-prog/q_img24.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int fun(int num)
{
    static int count = 0;
    count = count + num;
    return count;
}

int main ()
{
    int y=15,z;
    z = fun(fun(y | 10));
    y = fun(fun(z&gt;&gt;2));
    printf("%d", z+y);
}</code></pre> Output of the program is ________`,
      image: "",
      options: [],
      answer: "104",
      solution: `<img src="/images/quiz/pw-c-prog/q_img26.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The integer value printed by the ANSI-C program given below is. <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int bar(int y){
static int x = 12;
x+=y;
return x;
}

int foo(int y){
static int x = 1;
x+=10;
return bar(x+y);
}

int main(){
int x=10,y;
y = foo(bar(x))+x;
printf("%d\n", (x+y));
return 0;
}</code></pre>`,
      image: "",
      options: ["52", "630", "75", "63"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img28.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program. <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int bar(int a, int b)
{
return a&gt;b?a:b ;
}

int foo(int *A, int n)
{
if (n == 1)
return A[0];
return bar(A[n-1], foo(A, n-1));
}

int main()
{
int a[] = {11,2,33,4,5};
printf("%d", foo(a,5));
return 0;
}</code></pre> The output of the function is________`,
      image: "",
      options: ["11", "5", "33", "4"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img30.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `consider the following c-prog. <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int a []={61,72,18,81,64,87 };
int b []={43,89,83,91 };
int*x[]={a, a+3, b+2, b, b+3 };
int main(){
int **ptr;
ptr = x;
++ptr;
printf ("%d",*ptr[1]+3+*(ptr[1]-2));
return 0;
}</code></pre> what will be the output of the above program?`,
      image: "",
      options: [],
      answer: "129",
      solution: `<img src="/images/quiz/pw-c-prog/q_img32.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;
int main()
{
int arr[3][3]={1,2,3,4,5,23,3,22,91};
int i, j;
int *ptr1;
int **ptr2 = &amp;ptr1;
ptr1 = (*arr+1);
++*ptr2;
ptr1++;
printf("%d", ++*ptr1 + ++**ptr2 );
return 0;
}</code></pre> The output of the above program is______`,
      image: "",
      options: ["11", "9", "8", "10"],
      answer: "A",
      solution: `<img src="/images/quiz/pw-c-prog/q_img34.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int main()
{

int tot = 21, a[5] = {1, 2, 3, 4, 5};

int *p;

int **p1= &amp;p;

for (int i = 0;i&lt;5;i++){

p =a;

for (int j = 0; j&lt; a[i];j++)
{

tot+= *p+**p1+a[i];

p++;

}

}

printf("%d", tot);

return 0;

}</code></pre> The output of the program is ______`,
      image: "",
      options: ["66", "76", "55", "146"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-c-prog/q_img36.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

void fun(int *a , int *b)
{
    do
    {
        *a-=2;
        *b+= 1;
    }while (*a - *b &lt; 20);
}

int main()
{
    int a = 100, b = 20;
    fun(&amp;a, &amp;b);
    printf("%d", a+b);
    return 0;
}</code></pre> The value printed by the program is _____`,
      image: "",
      options: [],
      answer: "116",
      solution: `<img src="/images/quiz/pw-c-prog/q_img38.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

int fun(int n) {

static int sum = 7300;

for(int i=0; i &lt; n; i++) {

for(int j=i; j &gt;= 5; j--) {

sum--;

}

}

return sum;

}

int main() {

printf("%d", fun(100)+fun(50));

return 0;

}</code></pre> The output of the program is ______`,
      image: "",
      options: ["2740", "1715", "1035", "4445"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-c-prog/q_img40.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int main(){

char s[]={'a','b','c','\n','c','\0'};

char *p,*str,*str1;

printf("%s",s);

p=&amp;s[3];

str=p;

str1=s;

printf("%d",*++p + ++*str1-32);

return 0;

}</code></pre> The value printed by above program is ________ <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">'\n' ASCII value is 10</code></pre>`,
      image: "",
      options: ["abcc165", "abc165", "abc\nc165", "abc\nc75"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img42.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following C program? <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int fun(int n){

int i, j = 1, sum = 0;

for (i = 1; i &lt; n; i = i*2, j++)

sum = sum + i+ 2*j;

return sum;

}

int main(){

printf("%d",fun(100));

}</code></pre> Which of the following is output of the above program?`,
      image: "",
      options: ["243", "183", "100", "111"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-c-prog/q_img44.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

void jumble(int *x, int *y, int *z){

*x=2**x+*y+*z;

}

int main(){

int x=1, y=4, z = 10;

jumble(&amp;y,&amp;x,&amp;z);

jumble(&amp;z,&amp;y,&amp;x);

jumble(&amp;x,&amp;y,&amp;z);

printf("%d", x+y+z);

return 0;

}</code></pre> The output of the program is __________`,
      image: "",
      options: ["61", "19", "40", "120"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-c-prog/q_img46.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

int foo(int x, int y){

static int count;

do{

count++;

}while(++x != --y);

return count;

}

int main(){

printf("%d", foo(131,141 ));

return 0;

}</code></pre> The output of the program is _______`,
      image: "",
      options: [],
      answer: "5",
      solution: `<img src="/images/quiz/pw-c-prog/q_img48.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int foo(int n){

static int res = 0;

while((n&gt;&gt;=1))

res++;

return res;

}

int main(){

static int x[] = {1,2,3,4,5,6,7,8};

int i=0;

for(i=0; i&lt;8;i++)

i =i+foo(x[i]);

printf ("%d", i);

return 0;

}</code></pre> The output of the program is __________`,
      image: "",
      options: [],
      answer: "14",
      solution: `<img src="/images/quiz/pw-c-prog/q_img50.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following two functions. <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">void fun1 (int n){

if (n ==0 ) return;

printf ("%d" , n);

fun2 (n - 3);

}

void fun2 (int n){

if (n == 0) return ;

fun1(++n) ;

printf ("%d" , n);

}</code></pre> The output printed when fun1(8) is called is__________`,
      image: "",
      options: ["86420146", "86420247", "86420246", "87420246"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img52.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

int a[]={23,24};

void fun(int *a, int *b){

*a = *a + *b;

*b&gt;&gt;=2;

}

int main(){

int *ptr1 = a,**ptr2 = &amp;ptr1;

*ptr1+=10;

(*ptr2)++;

**ptr2-=10;

fun(ptr1,*ptr2);

printf("%d", a[0]+a[1]);

return 0;

}</code></pre> The Output of the program is ________`,
      image: "",
      options: [],
      answer: "40",
      solution: `<img src="/images/quiz/pw-c-prog/q_img54.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following recursive definition of fib: <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">int fib(int n) {

if (n==0||n==1)

return n;

else

return fib(n-1)+fib(n-2);

}</code></pre> The number of times '+' will be done for an evaluation of fib (8) is __________`,
      image: "",
      options: [],
      answer: "33",
      solution: `<img src="/images/quiz/pw-c-prog/q_img56.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;
int x;
void bar(int z) {
z += x;
x++;
}
void foo(int *y) {
int x = *y+2;
*y+=12;
x = *y-1;
bar(x);
}

int main(void) {
x = 10;
foo(&amp;x);
bar(x);
printf("%d ",x);
return 0;
}</code></pre> Output of the program is __________`,
      image: "",
      options: [],
      answer: "24",
      solution: `<img src="/images/quiz/pw-c-prog/q_img58.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following structure declaration <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

struct node{

int x;

int A[10];

}p;

int main(void) {

int count=0;

for(int i=0;i&lt;10;i++)

p.A[i]=i*10+i;

for(int i=0;i&lt;10;i++)

p.x+=p.A[i];

while(p.x&gt;&gt;=1)

count++;

printf("%d", count);

}</code></pre> What is the output of the following program`,
      image: "",
      options: ["10", "7", "8", "9"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img60.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

struct node{

char *a;

char *b;

}p;

void change(struct node *s){

char *temp;

temp = s-&gt;a;

s-&gt;a = s-&gt;b;

s-&gt;b = temp;

}

int main(void) {

p.a = "GATE";

p.b = "2026";

change(&amp;p);

printf("%s %s", p.a, p.b);

}</code></pre> The output of the program is_____`,
      image: "",
      options: ["GATE 2026", "2026 2026", "GATE GATE", "2026 GATE"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-c-prog/q_img62.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program <pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

struct A {

int x;

int y;

};

void increment(struct A a, struct A* b) {

a.x = a.x++ + b-&gt;y++;

b-&gt;x = b-&gt;x++ - a.x ;

}

int main() {

struct A a = { 10, 20 };

struct A b = { 20, 30 };

increment(a, &amp;b);

printf("%d", a.x+a.y+b.x+b.y);

return 0;

}</code></pre> Output of the program is ____`,
      image: "",
      options: [],
      answer: "40",
      solution: `<img src="/images/quiz/pw-c-prog/q_img64.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },



  ]
});
registerTest({
  series: "pw-cs-gate-2026",
  name: "SWt - Algorithm",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the number in the sequence</p> <p>\\( 130, 126, 122, 115, 109, 95, 86, 72, 49, 30, 21, 15, 9, 2 \\)</p> <p>Using binary search, the number of comparisons that will be required to search for the element '126' are_______?</p>`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/pw-algo/q_img2.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Consider the following code</p> <pre><code class="language-c">void AJ(int n)
{
    for(i = 0; (i * i) &lt; n; i++)
    {
        for (j = n; j &gt;= 0; j = j/2)
        {
            printf("Aditya Jain Sir");
        }
    }
}</code></pre> <p>What is the worst case time complexity of above program?</p>`,
      image: "",
      options: [
        `\\( O(n \\log n) \\)`,
        `\\( O(\\log n * \\log n) \\)`,
        `\\( O(\\sqrt{n}) \\)`,
        `\\( O(\\sqrt{n} * \\log n) \\)`
      ],
      answer: "D",
      solution: `<img src="/images/quiz/pw-algo/q_img4.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the following Graph G:</p> <div style="text-align: center; margin: 20px 0;"> <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"> <defs> <marker id="arrow" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" /> </marker> </defs> <line x1="150" y1="30" x2="60" y2="100" stroke="#000" stroke-width="2" marker-end="url(#arrow)" /> <line x1="150" y1="30" x2="240" y2="100" stroke="#000" stroke-width="2" marker-end="url(#arrow)" /> <line x1="150" y1="100" x2="150" y2="30" stroke="#000" stroke-width="2" marker-end="url(#arrow)" /> <line x1="60" y1="100" x2="100" y2="180" stroke="#000" stroke-width="2" marker-end="url(#arrow)" /> <line x1="150" y1="100" x2="100" y2="180" stroke="#000" stroke-width="2" marker-end="url(#arrow)" /> <line x1="240" y1="100" x2="200" y2="180" stroke="#000" stroke-width="2" marker-end="url(#arrow)" /> <line x1="150" y1="100" x2="200" y2="180" stroke="#000" stroke-width="2" marker-end="url(#arrow)" /> <line x1="150" y1="100" x2="150" y2="260" stroke="#000" stroke-width="2" marker-end="url(#arrow)" /> <line x1="100" y1="180" x2="150" y2="260" stroke="#000" stroke-width="2" marker-end="url(#arrow)" /> <line x1="200" y1="180" x2="150" y2="260" stroke="#000" stroke-width="2" marker-end="url(#arrow)" /> <g fill="#fff" stroke="#000" stroke-width="2"> <circle cx="150" cy="30" r="18" /> <circle cx="60" cy="100" r="18" /> <circle cx="150" cy="100" r="18" /> <circle cx="240" cy="100" r="18" /> <circle cx="100" cy="180" r="18" /> <circle cx="200" cy="180" r="18" /> <circle cx="150" cy="260" r="18" /> </g> <g fill="#000" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" dominant-baseline="central"> <text x="150" y="32">P</text> <text x="60" y="102">Q</text> <text x="150" y="102">R</text> <text x="240" y="102">S</text> <text x="100" y="182">T</text> <text x="200" y="182">U</text> <text x="150" y="262">V</text> </g> </svg> </div> <p>DFS is applied on above graph starting at P, and selection of adjacent vertex in DFS decided by the Lexicographical order in Graph G.</p> <p>Then what is the number of cross edges after DFS is performed_______?</p> <p>(Note: Visit adjacent vertex Q before vertex S Starting from source vertex P)</p>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<img src="/images/quiz/pw-algo/q_img6.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Given 6 sorted files having 70, 20, 25, 15, 30 and 50 records respectively. You have to merge them into a single sorted file, by merging 2 files at a time. If the minimum number of record movements required by the most efficient algorithm are 'a' and the Best-case number of elements comparisons that are required are 'b' then the value of a + b is?</p>`,
      image: "",
      options: [
        `1015`,
        `725`,
        `1020`,
        `1025`
      ],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img8.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the following array</p> <table border="1" cellpadding="10" style="border-collapse: collapse; text-align: center; font-size: 18px; margin: 15px 0;"> <tr> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">70</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">?</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">?</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">60</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">?</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">25</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">?</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">5</td> </tr> </table> <p>If the remaining 4 elements are to be picked from the set {10, 45, 30, 35} in some order to be placed in the above array.<br><br> Then the minimum number of inversions that are possible in the above array are _______?</p>`,
      image: "",
      options: [],
      answer: "18",
      solution: `<img src="/images/quiz/pw-algo/q_img10.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Consider the following array that is to be sorted in ascending order using Selection sort.</p> <table border="1" cellpadding="10" style="border-collapse: collapse; text-align: center; font-size: 18px; margin: 15px 0;"> <tr> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">15</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">90</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">82</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">30</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">46</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">55</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">39</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">21</td> </tr> </table> <p>Then what will be 8th element after the 6th pass?</p>`,
      image: "",
      options: [
        `55`,
        `46`,
        `82`,
        `90`
      ],
      answer: "D",
      solution: `<img src="/images/quiz/pw-algo/q_img12.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Consider the following array</p> <table border="1" cellpadding="10" style="border-collapse: collapse; text-align: center; font-size: 18px; margin: 15px 0;"> <tr> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">100</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">90</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">50</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">80</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">70</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">35</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">49</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">51</td> </tr> </table> <p>What are the total number of comparisons required to sort this array in ascending order using Insertion sort?</p>`,
      image: "",
      options: [
        `20`,
        `30`,
        `26`,
        `15`
      ],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img14.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Consider the following array.</p> <table border="1" cellpadding="10" style="border-collapse: collapse; text-align: center; font-size: 18px; margin: 15px 0;"> <tr> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">2122</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">177</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">355</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">57</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">290</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">433</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">146</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">3520</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">26</td> <td style="padding: 8px; border: 1px solid #ced4da; width: 50px;">1020</td> </tr> </table> <p>If Radix sort is used to sort the above array in ascending order, then the 7th element after the 3rd pass is?</p>`,
      image: "",
      options: [
        `355`,
        `290`,
        `177`,
        `433`
      ],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img16.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the following directed graph G.</p> <div style="text-align: center; margin: 20px 0;"> <svg width="850" height="500" viewBox="0 0 850 500" xmlns="http://www.w3.org/2000/svg" style="font-family: serif; max-width: 100%; height: auto;"> <defs> <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="24" refY="3.5" orient="auto"> <polygon points="0 0, 10 3.5, 0 7" fill="#000" /> </marker> </defs> <g stroke="#000" stroke-width="2" fill="none"> <!-- Top Curve A->D --> <path d="M 100,250 C 150,50 450,50 550,150" marker-end="url(#arrowhead)"/> <!-- Bottom Curve C->F --> <path d="M 300,350 C 400,480 650,480 750,250" marker-end="url(#arrowhead)"/> <!-- Straight Lines --> <line x1="750" y1="250" x2="550" y2="150" marker-end="url(#arrowhead)"/> <!-- F->D --> <line x1="750" y1="250" x2="550" y2="350" marker-end="url(#arrowhead)"/> <!-- F->E --> <line x1="550" y1="150" x2="300" y2="150" marker-end="url(#arrowhead)"/> <!-- D->B --> <line x1="550" y1="150" x2="550" y2="350" marker-end="url(#arrowhead)"/> <!-- D->E --> <line x1="300" y1="150" x2="100" y2="250" marker-end="url(#arrowhead)"/> <!-- B->A --> <line x1="300" y1="150" x2="300" y2="350" marker-end="url(#arrowhead)"/> <!-- B->C --> <line x1="300" y1="150" x2="750" y2="250" marker-end="url(#arrowhead)"/> <!-- B->F --> <line x1="550" y1="350" x2="300" y2="150" marker-end="url(#arrowhead)"/> <!-- E->B --> <line x1="550" y1="350" x2="100" y2="250" marker-end="url(#arrowhead)"/> <!-- E->A --> <line x1="550" y1="350" x2="300" y2="350" marker-end="url(#arrowhead)"/> <!-- E->C --> <line x1="300" y1="350" x2="100" y2="250" marker-end="url(#arrowhead)"/> <!-- C->A --> </g> <g font-size="22" fill="#000" text-anchor="middle" style="paint-order: stroke; stroke: #fff; stroke-width: 6px; stroke-linecap: round; stroke-linejoin: round;"> <text x="325" y="90">12</text> <!-- A->D --> <text x="525" y="460">10</text> <!-- C->F --> <text x="650" y="190">4</text> <!-- F->D --> <text x="650" y="325">5</text> <!-- F->E --> <text x="425" y="140">9</text> <!-- D->B --> <text x="575" y="250">50</text> <!-- D->E --> <text x="200" y="185">4</text> <!-- B->A --> <text x="325" y="250">90</text> <!-- B->C --> <text x="475" y="200">80</text> <!-- B->F --> <text x="475" y="260">3</text> <!-- E->B --> <text x="270" y="290">6</text> <!-- E->A --> <text x="425" y="375">4</text> <!-- E->C --> <text x="200" y="325">2</text> <!-- C->A --> </g> <g fill="#fff" stroke="#000" stroke-width="2"> <circle cx="100" cy="250" r="22" /> <circle cx="300" cy="150" r="22" /> <circle cx="300" cy="350" r="22" /> <circle cx="550" cy="150" r="22" /> <circle cx="550" cy="350" r="22" /> <circle cx="750" cy="250" r="22" /> </g> <g font-size="24" fill="#000" font-family="serif" text-anchor="middle" dominant-baseline="central"> <text x="100" y="252">A</text> <text x="300" y="152">B</text> <text x="300" y="352">C</text> <text x="550" y="152">D</text> <text x="550" y="352">E</text> <text x="750" y="252">F</text> </g> </svg> </div> <p>Suppose Dijkstra's SSSP algorithm is applied to find the minimum path cost for all the vertices with F as the source vertex.</p> <p>What will be the cost of the shortest path from F to A, reported by it_______?</p>`,
      image: "",
      options: [],
      answer: "11",
      solution: `<img src="/images/quiz/pw-algo/q_img18.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Consider the following array of elements</p> <p>[29, 17, 30, 27, 52, 15, 12, 5, 70, 11, 65, 29, 200].</p> <p>The minimum number of interchanges needed to convert it into a max-heap are?</p> <p><strong>Note:</strong> It is not mandatory to insert one element at a time.</p>`,
      image: "",
      options: [
        `8`,
        `7`,
        `9`,
        `10`
      ],
      answer: "A",
      solution: `<img src="/images/quiz/pw-algo/q_img20.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Consider an array of 64 elements. Assume that a Quick sort algorithm in the Best case takes 0.5 minutes to sort this array in ascending order.</p> <p>What are the maximum number of elements that can be sorted in 6 minutes in the above setting? (Select the closest possible answer)</p>`,
      image: "",
      options: [
        `128`,
        `2048`,
        `512`,
        `1024`
      ],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img22.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p>Consider a following graph</p> <div style="text-align: center; margin: 20px 0;"> <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"> <defs> <marker id="arrow12" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"> <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" /> </marker> </defs> <g stroke="#000" stroke-width="2"> <line x1="50" y1="50" x2="150" y2="50" marker-end="url(#arrow12)" /> <line x1="150" y1="50" x2="250" y2="50" marker-end="url(#arrow12)" /> <line x1="50" y1="150" x2="150" y2="150" marker-end="url(#arrow12)" /> <line x1="150" y1="150" x2="250" y2="150" marker-end="url(#arrow12)" /> <line x1="50" y1="50" x2="50" y2="150" marker-end="url(#arrow12)" /> <line x1="150" y1="50" x2="150" y2="150" marker-end="url(#arrow12)" /> <line x1="250" y1="50" x2="250" y2="150" marker-end="url(#arrow12)" /> </g> <g fill="#fff" stroke="#000" stroke-width="2"> <circle cx="50" cy="50" r="18" /> <circle cx="150" cy="50" r="18" /> <circle cx="250" cy="50" r="18" /> <circle cx="50" cy="150" r="18" /> <circle cx="150" cy="150" r="18" /> <circle cx="250" cy="150" r="18" /> </g> <g fill="#000" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" dominant-baseline="central"> <text x="50" y="52">A</text> <text x="150" y="52">C</text> <text x="250" y="52">D</text> <text x="50" y="152">B</text> <text x="150" y="152">E</text> <text x="250" y="152">F</text> </g> </svg> </div> <p>Which of the following represents the valid Topological ordering for the given graph G?</p>`,
      image: "",
      options: [
        `ACBDEF`,
        `ABCDEF`,
        `AEBCDF`,
        `ABCEDF`
      ],
      answer: ["A", "B", "D"],
      solution: `<img src="/images/quiz/pw-algo/q_img24.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p>Consider the following graph.</p> <div style="text-align: center; margin: 20px 0;"> <svg width="400" height="500" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"> <!-- Undirected edges --> <g stroke="#000" stroke-width="2" fill="none"> <path d="M 280,150 C 350,200 350,350 200,300" /> <line x1="150" y1="50" x2="250" y2="100" /> <line x1="150" y1="50" x2="150" y2="120" /> <line x1="150" y1="50" x2="90" y2="130" /> <line x1="250" y1="100" x2="280" y2="150" /> <line x1="150" y1="120" x2="280" y2="150" /> <line x1="150" y1="120" x2="90" y2="130" /> <line x1="150" y1="120" x2="250" y2="280" /> <line x1="150" y1="120" x2="200" y2="300" /> <line x1="280" y1="150" x2="250" y2="280" /> <line x1="90" y1="130" x2="90" y2="280" /> <line x1="90" y1="280" x2="90" y2="400" /> <line x1="90" y1="280" x2="200" y2="300" /> <line x1="90" y1="400" x2="200" y2="300" /> <line x1="200" y1="300" x2="250" y2="280" /> </g> <!-- Nodes --> <g fill="#000" stroke="#000" stroke-width="2"> <circle cx="150" cy="50" r="6" /> <circle cx="250" cy="100" r="6" /> <circle cx="280" cy="150" r="6" /> <circle cx="150" cy="120" r="6" /> <circle cx="90" cy="130" r="6" /> <circle cx="90" cy="280" r="6" /> <circle cx="90" cy="400" r="6" /> <circle cx="200" cy="300" r="6" /> <circle cx="250" cy="280" r="6" /> </g> <!-- Labels --> <g font-size="22" fill="#000" font-family="serif" text-anchor="middle" dominant-baseline="central"> <text x="150" y="30">P</text> <text x="270" y="90">Q</text> <text x="305" y="150">R</text> <text x="130" y="110">S</text> <text x="70" y="130">T</text> <text x="65" y="280">U</text> <text x="90" y="425">V</text> <text x="200" y="325">W</text> <text x="250" y="255">X</text> </g> </svg> </div> <p>Which of the following represents the valid DFS traversal?</p>`,
      image: "",
      options: [
        `XSPTQRWVU`,
        `PSWUTVXRQ`,
        `VWXRQPSTU`,
        `TUWVXRQPS`
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/pw-algo/q_img26.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p>Assume that, quick sort implementation is used to sort an array in ascending order.</p> <p>After the first partition step has been completed, the contents of the array are in the following order.</p> <p>500, 300, 400, 200, 800, 900, 1200, 1000, 1400, 1100, 1600</p> <p>Which of the following elements could be selected as a pivot element in first partition?</p>`,
      image: "",
      options: [
        `400`,
        `300`,
        `800`,
        `1600`
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/pw-algo/q_img28.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Suppose P, Q, R, S, T, U, V, W are sorted sequences having lengths 100, 45, 10, 26, 50, 30, 35, 60 respectively. They are to be merged into a single sequence by merging together two sequences at a time.</p> <p>The number of comparisons that will be needed in the worst case by the optimal algorithm for doing this is ______.</p>`,
      image: "",
      options: [],
      answer: "997",
      solution: `<img src="/images/quiz/pw-algo/q_img30.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Given the following set of functions,</p> <p>Sort the functions in descending order of asymptotic(big-O) complexity.</p> <p>\\(f_1(n) = 2n, f_2(n) = (0.7)^n, f_3(n) = n^{\\log n}, f_4(n) = 10, f_5(n) = (\\log n)^n\\)</p>`,
      image: "",
      options: [
        `\\(f_4(n), f_2(n), f_1(n), f_5(n), f_3(n)\\)`,
        `\\(f_5(n), f_3(n), f_1(n), f_4(n), f_2(n)\\)`,
        `\\(f_2(n), f_4(n), f_1(n), f_5(n), f_3(n)\\)`,
        `\\(f_1(n), f_5(n), f_4(n), f_3(n), f_2(n)\\)`
      ],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img32.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the following array</p> <div style="margin: 20px 0;"> <table style="border-collapse: collapse; text-align: center; font-size: 20px;" border="1"> <tr> <td style="padding: 8px; border: 1px solid #ced4da; border: 2px solid #000; padding: 10px 20px; width: 60px;">20</td> <td style="padding: 8px; border: 1px solid #ced4da; border: 2px solid #000; padding: 10px 20px; width: 60px;">92</td> <td style="padding: 8px; border: 1px solid #ced4da; border: 2px solid #000; padding: 10px 20px; width: 60px;">55</td> <td style="padding: 8px; border: 1px solid #ced4da; border: 2px solid #000; padding: 10px 20px; width: 60px;">32</td> <td style="padding: 8px; border: 1px solid #ced4da; border: 2px solid #000; padding: 10px 20px; width: 60px;">48</td> <td style="padding: 8px; border: 1px solid #ced4da; border: 2px solid #000; padding: 10px 20px; width: 60px;">25</td> <td style="padding: 8px; border: 1px solid #ced4da; border: 2px solid #000; padding: 10px 20px; width: 60px;">61</td> <td style="padding: 8px; border: 1px solid #ced4da; border: 2px solid #000; padding: 10px 20px; width: 60px;">5</td> </tr> </table> </div> <p>If Bubble sort is applied to sort the above array in ascending order, and if in doing this, the number of swaps required are &lsquo;p&rsquo; and number of comparisons required are &lsquo;q&rsquo; then the value of p + q is______?</p>`,
      image: "",
      options: [],
      answer: "45",
      solution: `<img src="/images/quiz/pw-algo/q_img34.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>The number of distinct MCSTs of the following graph is &lsquo;a&rsquo; and the cost of the MCST reported by Kruskal Algorithm is &lsquo;b&rsquo;, then the value of a * b is?</p> <div style="text-align: center; margin: 20px 0;"> <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"> <g stroke="#000" stroke-width="2"> <!-- Outer edges --> <line x1="50" y1="150" x2="120" y2="80" /> <line x1="120" y1="80" x2="280" y2="80" /> <line x1="280" y1="80" x2="350" y2="150" /> <line x1="350" y1="150" x2="280" y2="220" /> <line x1="280" y1="220" x2="120" y2="220" /> <line x1="120" y1="220" x2="50" y2="150" /> <!-- Inner edges to center (g) --> <line x1="50" y1="150" x2="200" y2="150" /> <line x1="120" y1="80" x2="200" y2="150" /> <line x1="280" y1="80" x2="200" y2="150" /> <line x1="350" y1="150" x2="200" y2="150" /> <line x1="280" y1="220" x2="200" y2="150" /> <line x1="120" y1="220" x2="200" y2="150" /> </g> <g fill="#fff" stroke="#000" stroke-width="2"> <circle cx="50" cy="150" r="16" /> <circle cx="120" cy="80" r="16" /> <circle cx="280" cy="80" r="16" /> <circle cx="350" cy="150" r="16" /> <circle cx="280" cy="220" r="16" /> <circle cx="120" cy="220" r="16" /> <circle cx="200" cy="150" r="16" /> </g> <g font-size="18" fill="#000" font-family="serif" text-anchor="middle" dominant-baseline="central"> <text x="50" y="152">a</text> <text x="120" y="82">b</text> <text x="280" y="82">c</text> <text x="350" y="152">d</text> <text x="280" y="222">e</text> <text x="120" y="222">f</text> <text x="200" y="152">g</text> </g> <g font-size="16" fill="#000" font-family="serif" text-anchor="middle"> <!-- Edge weights --> <text x="75" y="105">10</text> <text x="200" y="65">30</text> <text x="325" y="105">10</text> <text x="325" y="205">10</text> <text x="200" y="210">30</text> <text x="75" y="205">10</text> <text x="125" y="140">20</text> <text x="160" y="110">20</text> <text x="240" y="110">20</text> <text x="275" y="140">20</text> <text x="240" y="185">20</text> <text x="160" y="185">20</text> </g> </svg> </div>`,
      image: "",
      options: [
        `725`,
        `720`,
        `730`,
        `719`
      ],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img36.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the matrices A, B, C and D with dimensions 2 &times; 10, 10 &times; 5, 5 &times; 4 and 4 &times; 20 respectively.</p> <p>These 4 matrices are to be multiplied into a single resultant matrix.</p> <p>In doing this, if the minimum number of scalar multiplications required are &lsquo;m&rsquo; and the maximum number of scalar multiplications required are &lsquo;n&rsquo;, then the value of n-m is________?</p>`,
      image: "",
      options: [],
      answer: "1500",
      solution: `<img src="/images/quiz/pw-algo/q_img38.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the given characters M, N, O, P and Q each occurring with the probability of 0.2, 0.35, 0.1, 0.15, 0.2 respectively.</p> <p>If we need to encode a given text of 200 characters.</p> <p>Two encoding techniques are used to encode this message as below:</p> <p>The first is simple Uniform Binary encoding which requires &lsquo;a&rsquo; bits.</p> <p>The second encoding is the optimal encoding technique which requires &lsquo;b&rsquo; bits to do this.</p> <p>Then the value of a-b is_________?</p>`,
      image: "",
      options: [],
      answer: "150",
      solution: `<img src="/images/quiz/pw-algo/q_img40.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the following instances of the job-sequencing with deadline problem:</p> <div style="margin: 20px 0; overflow-x: auto;"> <table style="border-collapse: collapse; text-align: center; font-size: 18px; width: 100%; max-width: 600px;" border="1"> <tr> <td style="border: 1px solid #000; padding: 10px;">Job</td> <td style="border: 1px solid #000; padding: 10px;">\\(J_1\\)</td> <td style="border: 1px solid #000; padding: 10px;">\\(J_2\\)</td> <td style="border: 1px solid #000; padding: 10px;">\\(J_3\\)</td> <td style="border: 1px solid #000; padding: 10px;">\\(J_4\\)</td> <td style="border: 1px solid #000; padding: 10px;">\\(J_5\\)</td> <td style="border: 1px solid #000; padding: 10px;">\\(J_6\\)</td> <td style="border: 1px solid #000; padding: 10px;">\\(J_7\\)</td> </tr> <tr> <td style="border: 1px solid #000; padding: 10px;">Deadline</td> <td style="border: 1px solid #000; padding: 10px;">5</td> <td style="border: 1px solid #000; padding: 10px;">4</td> <td style="border: 1px solid #000; padding: 10px;">3</td> <td style="border: 1px solid #000; padding: 10px;">2</td> <td style="border: 1px solid #000; padding: 10px;">1</td> <td style="border: 1px solid #000; padding: 10px;">2</td> <td style="border: 1px solid #000; padding: 10px;">4</td> </tr> <tr> <td style="border: 1px solid #000; padding: 10px;">Profit</td> <td style="border: 1px solid #000; padding: 10px;">20</td> <td style="border: 1px solid #000; padding: 10px;">15</td> <td style="border: 1px solid #000; padding: 10px;">30</td> <td style="border: 1px solid #000; padding: 10px;">25</td> <td style="border: 1px solid #000; padding: 10px;">35</td> <td style="border: 1px solid #000; padding: 10px;">40</td> <td style="border: 1px solid #000; padding: 10px;">10</td> </tr> </table> </div> <p>If the optimal technique is used to solve this problem, let the maximum profit be denoted by 'x' and the number of jobs included in the optimal solution be denoted by 'y'.</p> <p>then the value of x+y is ______?</p>`,
      image: "",
      options: [],
      answer: "145",
      solution: `<img src="/images/quiz/pw-algo/q_img42.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Consider is the weighted graph G given by</p> <div style="margin: 20px 0;"> <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"> <g stroke="#000" stroke-width="2"> <!-- Rectangle BCDE --> <line x1="50" y1="100" x2="250" y2="100" /> <!-- B-E --> <line x1="250" y1="100" x2="250" y2="250" /> <!-- E-D --> <line x1="250" y1="250" x2="50" y2="250" /> <!-- D-C --> <line x1="50" y1="250" x2="50" y2="100" /> <!-- C-B --> <!-- Triangle ABE and edge AC, CE --> <line x1="150" y1="20" x2="50" y2="100" /> <!-- A-B --> <line x1="150" y1="20" x2="250" y2="100" /> <!-- A-E --> <line x1="150" y1="20" x2="50" y2="250" /> <!-- A-C --> <line x1="50" y1="250" x2="250" y2="100" /> <!-- C-E --> </g> <g font-size="20" fill="#000" font-family="serif" text-anchor="middle"> <!-- Edge weights --> <text x="90" y="55">30</text> <!-- A-B --> <text x="210" y="55">40</text> <!-- A-E --> <text x="120" y="70">30</text> <!-- A-C --> <text x="150" y="90">30</text> <!-- B-E --> <text x="270" y="175">30</text> <!-- E-D --> <text x="150" y="275">40</text> <!-- C-D --> <text x="30" y="175">20</text> <!-- B-C --> <text x="160" y="190">30</text> <!-- C-E --> </g> </svg> </div> <p>If the total number of distinct MCSTs for the above given Graph are 'x' and the cost of the MCST is 'y' then the value of y - x is?</p>`,
      image: "",
      options: [
        `109`,
        `107`,
        `106`,
        `105`
      ],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img44.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Assume that there are \\(10n^2\\) sorted lists each of size n/5.</p> <p>If all of these lists are to be merged into a single sorted list by merging 2 lists at a time, then what is the time complexity of merging them into single sorted list by using the most optimal merging technique?</p>`,
      image: "",
      options: [
        `\\(\\theta(n^2 \\log n)\\)`,
        `\\(\\theta(n \\log n)\\)`,
        `\\(\\theta(n^3 \\log n)\\)`,
        `\\(\\theta(n^2)\\)`
      ],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img46.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the following undirected graph with edge weights as shown below:</p> <div style="margin: 20px 0;"> <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"> <g stroke="#000" stroke-width="2"> <!-- Horizontal --> <line x1="50" y1="50" x2="150" y2="50" /> <line x1="150" y1="50" x2="250" y2="50" /> <line x1="50" y1="150" x2="150" y2="150" /> <line x1="150" y1="150" x2="250" y2="150" /> <line x1="50" y1="250" x2="150" y2="250" /> <line x1="150" y1="250" x2="250" y2="250" /> <!-- Vertical --> <line x1="50" y1="50" x2="50" y2="150" /> <line x1="50" y1="150" x2="50" y2="250" /> <line x1="150" y1="50" x2="150" y2="150" /> <line x1="150" y1="150" x2="150" y2="250" /> <line x1="250" y1="50" x2="250" y2="150" /> <line x1="250" y1="150" x2="250" y2="250" /> </g> <g fill="#000"> <circle cx="50" cy="50" r="8" /> <circle cx="150" cy="50" r="8" /> <circle cx="250" cy="50" r="8" /> <circle cx="50" cy="150" r="8" /> <circle cx="150" cy="150" r="8" /> <circle cx="250" cy="150" r="8" /> <circle cx="50" cy="250" r="8" /> <circle cx="150" cy="250" r="8" /> <circle cx="250" cy="250" r="8" /> </g> <g font-size="20" fill="#000" font-family="serif" text-anchor="middle"> <!-- Horiz labels --> <text x="100" y="75">1</text> <text x="200" y="75">1</text> <text x="100" y="175">1</text> <text x="200" y="175">9</text> <text x="100" y="275">9</text> <text x="200" y="275">1</text> <!-- Vert labels --> <text x="35" y="105">9</text> <text x="35" y="205">1</text> <text x="135" y="105">9</text> <text x="135" y="205">1</text> <text x="235" y="105">9</text> <text x="235" y="205">1</text> </g> </svg> </div> <p>The difference between the maximum possible cost and the minimum possible cost for a spanning tree for the above graph is______?</p>`,
      image: "",
      options: [],
      answer: "32",
      solution: `<img src="/images/quiz/pw-algo/q_img48.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img49.png" style="display: block; max-width: 40%; margin: 10px 0;">`,
      image: "",
      options: ["(logn)²", "√(logn)", "((log n) * log(log n))", "log logn"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img50.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img51.png" style="display: block; max-width: 40%; margin: 10px 0;">`,
      image: "",
      options: ["2n - 3", "(7/4)n - 3", "(9/4)n - 3", "(6/4)n - 3"],
      answer: "A",
      solution: `<img src="/images/quiz/pw-algo/q_img52.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img53.png" style="display: block; max-width: 40%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "41",
      solution: `<img src="/images/quiz/pw-algo/q_img54.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img55.png" style="display: block; max-width: 40%; margin: 10px 0;">`,
      image: "",
      options: ["In an undirected graph, the shortest path between two nodes always lies on some minimum spanning tree", "If every edge of the graph has distinct weight, then Maximum weight spanning tree is unique.", "In Huffman coding,if all the items are of distinct probabilities, then the item with the second lowest probability is always at the leaf that is farthest from the root", "In Huffman coding,if all the items are of distinct probabilities, then the item with the highest probability is always at a leaf that is the child of the root."],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img56.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img57.png" style="display: block; max-width: 40%; margin: 10px 0;">`,
      image: "",
      options: ["20", "23", "25", "27"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img58.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img59.png" style="display: block; max-width: 40%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "3",
      solution: `<img src="/images/quiz/pw-algo/q_img60.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img61.png" style="display: block; max-width: 40%; margin: 10px 0;">`,
      image: "",
      options: ["1, 3 and 4", "2, 3 and 4", "1, 2 and 3", "1, 2 and 4"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img62.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img63.png" style="display: block; max-width: 40%; margin: 10px 0;">`,
      image: "",
      options: ["((x₁x₂)x₃)x₄", "(x₁(x₂x₃))x₄", "x₁((x₂x₃)x₄)", "x₁(x₂(x₃x₄))"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-algo/q_img64.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },



  ]
});


registerTest({
  series: "pw-cs-gate-2026",
  name: "Swt-OS",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: ` <p data-start="4387" data-end="4494">Consider a system using a <strong data-start="4413" data-end="4437">two-level page table</strong>. Assume the required page is present in physical memory.</p> <p data-start="4496" data-end="4591">How many main-memory accesses are required for a virtual-address access when a TLB miss occurs?</p> <p data-start="4593" data-end="4655">Include the final access to the requested instruction or data. </p> `,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>3</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/test_img/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: ` <p data-start="2523" data-end="2712">If an instruction takes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>p</mi> </math> microseconds and a page fault takes an additional <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>q</mi> </math> microseconds, the effective instruction time if, on average, a page fault occurs every <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>r</mi> </math> instructions is: </p> `,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mstyle displaystyle="true" scriptlevel="0"> <mfrac> <mrow> <mi>p</mi> <mo>+</mo> <mi>q</mi> </mrow> <mi>r</mi> </mfrac> </mstyle> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>p</mi> <mo>+</mo> <mo stretchy="false">(</mo> <mi>q</mi> <mo>×</mo> <mi>r</mi> <mo stretchy="false">)</mo> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>p</mi> <mo>+</mo> <mstyle displaystyle="true" scriptlevel="0"> <mfrac> <mi>q</mi> <mi>r</mi> </mfrac> </mstyle> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>p</mi> <mo>+</mo> <mi>q</mi> <mo stretchy="false">)</mo> <mo>×</mo> <mi>r</mi> </math>`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/test_img/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: ` <p data-start="277" data-end="499">Consider a three level paging scheme with a TLB. Assume no page fault occurs. It takes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math> to search the TLB and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>100</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math> to access the physical memory. If the TLB hit ratio is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>90</mn> <mi mathvariant="normal">%</mi> </math>, what is the effective memory access time?</p> `,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>101</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>111</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>121</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>131</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math>`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/test_img/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: ` <p data-start="1159" data-end="1247">Which of the following statements about small <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mn>4</mn> <mtext>&nbsp;</mtext> <mtext>KB</mtext> <mo stretchy="false">)</mo> </math> and large <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mn>4</mn> <mtext>&nbsp;</mtext> <mtext>MB</mtext> <mo stretchy="false">)</mo> </math> pages are correct?</p> `,
      image: "",
      options: [
        `Large pages allow for a more efficient use of the TLB.`,
        `Accessing a large page, in the case of a TLB miss, would be slower than accessing a small page.`,
        `Large pages suffer from internal fragmentation.`,
        `Large pages suffer from external fragmentation.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/test_img/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: ` <p data-start="3354" data-end="3386">What caching is done in the TLB?</p> `,
      image: "",
      options: [
        `Virtual Address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Physical Address`,
        `Virtual Page Number <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Physical Address`,
        `Virtual Page Number <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Physical Page Number`,
        `Physical Page Number <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Virtual Page Number`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/test_img/5.png" style="max-width: 75%;">`
    },



  ]
});


registerTest({
  series: "pw-cs-gate-2026",
  name: "Swt-OS-Part2",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: ` <p data-start="4708" data-end="4851">A <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>3</mn> </math>2-bit system uses <math xmlns="http://www.w3.org/1998/Math/MathML"> <mrow data-mjx-texclass="ORD"> <mn mathvariant="bold">4</mn> </mrow> </math><strong data-start="4729" data-end="4743">&nbsp;KB pages</strong> and a two-level page table with a <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math>-bit Level-<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math> index, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math>-bit Level-<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math> index, and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>12</mn> </math>-bit page offset. </p> <p data-start="4853" data-end="4920">The current Level-<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math> page table begins at physical address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x2000</mtext> </math>. </p> <p data-start="4922" data-end="4943">Relevant entries are:</p> <p><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" border="1"> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="bold">Page-table location </mtext></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="bold">Entry</mtext></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>L1[0]</mtext></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="monospace">0x1007</mtext></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>L1[3]</mtext></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="monospace">0x3007</mtext></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>table at&nbsp;</mtext> <mtext mathvariant="monospace">0x1000</mtext> <mo>,</mo> <mtext>&nbsp;</mtext> <mtext>entry&nbsp;</mtext> <mn>0</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="monospace">0x7007</mtext></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>table at&nbsp;</mtext> <mtext mathvariant="monospace">0x1000</mtext> <mo>,</mo> <mtext>&nbsp;</mtext> <mtext>entry&nbsp;</mtext> <mn>1</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="monospace">0x8007</mtext></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>table at&nbsp;</mtext> <mtext mathvariant="monospace">0x3000</mtext> <mo>,</mo> <mtext>&nbsp;</mtext> <mtext>entry&nbsp;</mtext> <mn>128</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="monospace">0xA007</mtext></math></td> </tr> </table> </p> <p data-start="5159" data-end="5296">All unspecified entries are zero and therefore not present. The low permission bits are removed when obtaining the physical page address.</p> <p data-start="5298" data-end="5329">Which translations are correct?</p> `,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00000FFF</mtext> <mo stretchy="false">→</mo> <mtext mathvariant="monospace">0x00007FFF</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00001000</mtext> <mo stretchy="false">→</mo> <mtext mathvariant="monospace">0x00008000</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00C08003</mtext> <mo stretchy="false">→</mo> <mtext mathvariant="monospace">0x0000A003</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00C80003</mtext> <mo stretchy="false">→</mo> <mtext mathvariant="monospace">0x0000A003</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 1 Explanation:</strong><br>  <a href="https://gateoverflow.in/544045" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: ` <p data-start="6572" data-end="6586">A system uses:</p> <ul data-start="6588" data-end="6652"> <li data-start="6588" data-end="6600" data-section-id="ba4al1"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> KB pages</li> <li data-start="6601" data-end="6634" data-section-id="1e243y7">A <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math>-entry fully associative TLB</li> <li data-start="6635" data-end="6652" data-section-id="mkkkf1">LRU replacement</li> </ul> <p data-start="6654" data-end="6666"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"> <mtext mathvariant="bold">Initial TLB:</mtext> </math><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" border="1"> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Valid</mtext></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>VPN</mtext></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Physical Page</mtext></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>LRU</mtext></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>11</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>12</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>7</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>4</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>3</mn></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>3</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>6</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>4</mn></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>4</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>9</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td> </tr> </table> </p> <p data-start="6654" data-end="6666"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"> <mtext mathvariant="bold">Relevant initial page-table entries:</mtext> </math> <table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" border="1"> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>VPN</mtext></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Valid</mtext></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Location</mtext></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Physical page&nbsp;</mtext> <mn>5</mn></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Disk</mtext></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Disk</mtext></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>3</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Physical page&nbsp;</mtext> <mn>6</mn></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>7</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Physical page&nbsp;</mtext> <mn>4</mn></math></td> </tr> <tr> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>11</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td> <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Physical page&nbsp;</mtext> <mn>12</mn></math></td> </tr> </table> </p> <p data-start="7034" data-end="7125">When a page fault occurs, new physical pages are allocated beginning with physical page <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>13</mn> </math>. </p> <p data-start="7127" data-end="7181">The following virtual addresses are accessed in order:</p> <p data-start="7183" data-end="7257"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x0FFF</mtext> </math><br data-start="7191" data-end="7194"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x7A28</mtext> </math><br data-start="7202" data-end="7205"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x3DAD</mtext> </math><br data-start="7213" data-end="7216"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x3A98</mtext> </math><br data-start="7224" data-end="7227"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1C19</mtext> </math><br data-start="7235" data-end="7238"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1000</mtext> </math><br data-start="7246" data-end="7249"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x22D0</mtext> </math> </p> <p data-start="7259" data-end="7288">Which statements are correct?</p> `,
      image: "",
      options: [
        `The access to <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x0FFF</mtext> </math> produces a TLB miss but not a page fault.`,
        `The accesses to <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x7A28</mtext> <mo>,</mo> <mtext mathvariant="monospace">0x3DAD</mtext> <mo>,</mo> <mtext mathvariant="monospace">0x3A98</mtext> <mo>,</mo> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1000</mtext> </math> are all TLB hits.`,
        `Accessing <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1C19</mtext> </math> causes a page fault, after which VPN <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math> is mapped to physical page <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>13</mn> </math>.`,
        `After all seven accesses have completed, VPN <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math> is still present in the TLB.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 2 Explanation:</strong><br>  <a href="https://gateoverflow.in/544070" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: ` <p data-start="3492" data-end="3589">A machine uses a <strong data-start="3509" data-end="3533">two-level page table</strong>. The page-directory base address is held in a register.</p> <p data-start="3591" data-end="3598">Assume:</p> <ul data-start="3600" data-end="4000"> <li data-start="3600" data-end="3643" data-section-id="wldsgl">One physical-memory access takes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>100</mn> </math> ns<br>&nbsp; </li> <li data-start="3644" data-end="3708" data-section-id="xn04k6">Page directories and page tables are always resident in memory</li> <li data-start="3709" data-end="3763" data-section-id="18o38ap"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0.001</mn> </math> of user-memory accesses cause a page fault</li> <li data-start="3764" data-end="3802" data-section-id="jh3ccf">Servicing a page fault takes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math> ms<br>&nbsp; </li> <li data-start="3803" data-end="3832" data-section-id="dnqgpm">Initially there is no cache</li> <li data-start="3833" data-end="3903" data-section-id="gfhikj">A TLB is added such that <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>75</mn> <mi mathvariant="normal">%</mi> </math> of translations are found in the TLB<br>&nbsp; </li> <li data-start="3904" data-end="3936" data-section-id="3ggvmz">TLB lookup time may be ignored</li> <li data-start="3937" data-end="4000" data-section-id="1kph9xv">A translation found in the TLB corresponds to a resident page</li> </ul> <p data-start="4002" data-end="4059">What is the effective memory access time, in nanoseconds?</p> `,
      image: "",
      options: [],
      answer: "250",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 3 Explanation:</strong><br>  <a href="https://gateoverflow.in/544043" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: ` <p data-start="2131" data-end="2145">A machine has:</p> <ul data-start="2147" data-end="2336"> <li data-section-id="so52nt" data-start="2147" data-end="2173"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>64</mn> </math>-bit virtual addresses</li> <li data-section-id="1g8nfh5" data-start="2174" data-end="2186"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> </math> KB pages</li> <li data-section-id="6yzgst" data-start="2187" data-end="2209"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> GB physical memory</li> <li data-section-id="1aq8t4m" data-start="2210" data-end="2227"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>512</mn> </math> TLB entries</li> <li data-section-id="1u38p5w" data-start="2228" data-end="2286">An inverted page table with one entry per physical frame</li> <li data-section-id="14pwy50" data-start="2287" data-end="2336">Each inverted page-table entry occupies <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> </math> bytes</li> </ul> <p data-start="2338" data-end="2367">Which statements are correct?</p> `,
      image: "",
      options: [
        `The virtual page number requires <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>51</mn> </math> bits.`,
        `If all <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>512</mn> </math> TLB entries contain distinct valid translations, the TLB reach is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> MB.`,
        `The TLB can simultaneously cover <math xmlns="http://www.w3.org/1998/Math/MathML"> <mfrac> <mn>1</mn> <mn>512</mn> </mfrac> </math> of physical memory.`,
        `The inverted page table occupies <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> MB.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 4 Explanation:</strong><br>  <a href="https://gateoverflow.in/544041" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: ` <p data-start="766" data-end="794">A virtual-memory system has:</p> <ul data-start="796" data-end="1117"> <li data-section-id="5oc60n" data-start="796" data-end="822"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>48</mn> </math>-bit virtual addresses</li> <li data-section-id="1krryg0" data-start="823" data-end="836"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>32</mn> </math> KB pages</li> <li data-section-id="1h12m6j" data-start="837" data-end="860"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>32</mn> </math> TB physical memory</li> <li data-section-id="uta0n5" data-start="861" data-end="884">Two-level page tables<br>&nbsp; </li> <li data-section-id="3unho4" data-start="885" data-end="924">Both levels stored in physical memory</li> <li data-section-id="da1671" data-start="925" data-end="998">Every second-level page table must fit completely inside one page frame</li> <li data-section-id="1jsrf5l" data-start="999" data-end="1117">Page-table entries are stored using the minimum whole number of bytes sufficient to contain the physical page number</li> </ul> <p data-start="1119" data-end="1174">Which of the following correctly gives the bit division</p> <p data-start="1176" data-end="1243"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"> <mo stretchy="false">(</mo> <mtext>Level-1 index</mtext> <mo>,</mo> <mtext>&nbsp;Level-2 index</mtext> <mo>,</mo> <mtext>&nbsp;page offset</mtext> <mo stretchy="false">)</mo> <mo>?</mo> </math> </p> `,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mn>20</mn> <mo>,</mo> <mn>13</mn> <mo>,</mo> <mn>15</mn> <mo stretchy="false">)</mo> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mn>18</mn> <mo>,</mo> <mn>15</mn> <mo>,</mo> <mn>15</mn> <mo stretchy="false">)</mo> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mn>21</mn> <mo>,</mo> <mn>12</mn> <mo>,</mo> <mn>15</mn> <mo stretchy="false">)</mo> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mn>13</mn> <mo>,</mo> <mn>20</mn> <mo>,</mo> <mn>15</mn> <mo stretchy="false">)</mo> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 5 Explanation:</strong><br>  <a href="https://gateoverflow.in/544038" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="4651" data-start="4590">A demand-paging system has <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> physical frames <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>P</mi> <mn>1</mn> <mo>,</mo> <mi>P</mi> <mn>2</mn> <mo>,</mo> <mi>P</mi> <mn>3</mn> <mo>,</mo> <mi>P</mi> <mn>4</mn> </math>. </p> <p data-end="4684" data-start="4653">The page-reference sequence is:</p> <p data-end="4725" data-start="4686"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>A</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>C</mi> <mo>,</mo> <mtext> </mtext> <mi>D</mi> <mo>,</mo> <mtext> </mtext> <mi>E</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>A</mi> <mo>,</mo> <mtext> </mtext> <mi>D</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>C</mi> </math> </p> <p data-end="4759" data-start="4727">Initially, all frames are empty.</p> <p data-end="4801" data-start="4761">Two replacement policies are considered:</p> <ol data-end="4818" data-start="4803"> <li data-end="4809" data-section-id="1qxtfrl" data-start="4803">LRU</li> <li data-end="4818" data-section-id="ghxwup" data-start="4810">Clock</li> </ol> <p data-end="4948" data-start="4820">For Clock, on a page fault, <strong data-end="4909" data-start="4848">advance the clock hand first and then inspect the use bit.</strong></p> <p data-end="5022" data-start="4950">Which option correctly gives the final contents of frames <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>P</mi> <mn>1</mn> <mo>,</mo> <mi>P</mi> <mn>2</mn> <mo>,</mo> <mi>P</mi> <mn>3</mn> <mo>,</mo> <mi>P</mi> <mn>4</mn> </math>? </p> </span>`,
      image: "",
      options: [
        `LRU: <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>C</mi> <mo>,</mo> <mi>B</mi> <mo>,</mo> <mi>A</mi> <mo>,</mo> <mi>D</mi> <mo stretchy="false">)</mo> </math><br/>Clock: <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>E</mi> <mo>,</mo> <mi>B</mi> <mo>,</mo> <mi>A</mi> <mo>,</mo> <mi>C</mi> <mo stretchy="false">)</mo> </math><br/>`,
        `LRU: <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>E</mi> <mo>,</mo> <mi>B</mi> <mo>,</mo> <mi>C</mi> <mo>,</mo> <mi>D</mi> <mo stretchy="false">)</mo> </math><br/>Clock: <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>C</mi> <mo>,</mo> <mi>B</mi> <mo>,</mo> <mi>A</mi> <mo>,</mo> <mi>D</mi> <mo stretchy="false">)</mo> </math><br/>`,
        `LRU: <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>C</mi> <mo>,</mo> <mi>A</mi> <mo>,</mo> <mi>B</mi> <mo>,</mo> <mi>D</mi> <mo stretchy="false">)</mo> </math><br/>Clock: <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>E</mi> <mo>,</mo> <mi>C</mi> <mo>,</mo> <mi>A</mi> <mo>,</mo> <mi>B</mi> <mo stretchy="false">)</mo> </math><br/>`,
        `LRU: <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>E</mi> <mo>,</mo> <mi>B</mi> <mo>,</mo> <mi>A</mi> <mo>,</mo> <mi>C</mi> <mo stretchy="false">)</mo> </math><br/>Clock: <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>C</mi> <mo>,</mo> <mi>B</mi> <mo>,</mo> <mi>A</mi> <mo>,</mo> <mi>D</mi> <mo stretchy="false">)</mo> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 6 Explanation:</strong><br>  <a href="https://gateoverflow.in/543900" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="8701" data-start="8633">A paged virtual-memory system has the following measured parameters:</p> <p>\[<br/>\begin{array}{|l|l|}<br/>\hline<br/>\textbf{Measurement} &amp; \textbf{Value} <span>\</span><br/>\hline<br/>P_t = \text{probability of a TLB miss} <br/>&amp; 0.1 <span>\</span><br/>\hline </p> <p>P_p = \text{probability of a page fault when a TLB miss occurs} <br/>&amp; 0.0002 <span>\</span><br/>\hline </p> <p>T_t = \text{time to access TLB} <br/>&amp; 0 <span>\</span><br/>\hline</p> <p>T_m = \text{time to access memory} <br/>&amp; 1\ \text{microsecond} <span>\</span><br/>\hline </p> <p>T_d = \text{time to transfer a page to/from disk} <br/>&amp; <table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" cellpadding="5" border="1"> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>10</mn> <mtext> </mtext> <mtext>milliseconds</mtext> <mo>=</mo> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>10000</mn> <mtext> </mtext> <mtext>microseconds</mtext> </td> </tr> </table> <span>\</span><br/>\hline </p> <p>P_d = \text{probability page is dirty when replaced} <br/>&amp; 0.5 <span>\</span><br/>\hline<br/>\end{array}<br/>\] </p> <p data-end="8701" data-start="8633">Additional assumptions:</p> <ul data-end="9513" data-start="9172"> <li data-end="9220" data-section-id="11ya5mu" data-start="9172">The TLB is refilled automatically by hardware.</li> <li data-end="9297" data-section-id="7iz1r6" data-start="9221">On a TLB miss, one memory access is required to read the page-table entry.</li> <li data-end="9365" data-section-id="1yae5t8" data-start="9298">If a page fault occurs, the required page must be read from disk.</li> <li data-end="9433" data-section-id="eo6pxo" data-start="9366">If the selected victim is dirty, it must also be written to disk.</li> <li data-end="9513" data-section-id="hhwht2" data-start="9434">Other page-replacement and page-table-update overheads are included in <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mi>d</mi> </msub> </math>.</li> </ul> <p data-end="9575" data-start="9515">What is the <strong data-end="9557" data-start="9527">average memory access time</strong>, in microseconds?</p> </span>`,
      image: "",
      options: [],
      answer: "1.4",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 7 Explanation:</strong><br>  <a href="https://gateoverflow.in/543902" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="1215" data-start="1108">Suppose a <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>32</mn> <mi>K</mi> <mo>×</mo> <mn>8</mn> <mi>K</mi> </math> matrix <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>A</mi> </math> with <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>-byte elements is stored in row-major order in virtual memory.</p> <p data-end="1224" data-start="1217">Assume:</p> <ul data-end="1379" data-start="1226"> <li data-end="1271" data-section-id="l8ds9t" data-start="1226">Only this program occupies physical memory.</li> <li data-end="1319" data-section-id="4vl7ht" data-start="1272">The matrix begins exactly at a page boundary.</li> <li data-end="1354" data-section-id="ihajdt" data-start="1320">The matrix is initially on disk.</li> <li data-end="1379" data-section-id="xl9fyi" data-start="1355">Demand paging is used.</li> </ul> <p data-end="1412" data-start="1381">The following code is executed:</p> <pre class="prettyprint linenums lang-c_cpp" data-end="1521" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="for (i = 0; i &lt; 32768; i++)     for (j = 0; j &lt; 8192; j++)          A[i][j] = A[i][j] * A[i][j];" data-start="1414">for (i = 0; i &lt; 32768; i++)
    for (j = 0; j &lt; 8192; j++)
         A[i][j] = A[i][j] * A[i][j];</pre> <p data-end="1606" data-start="1523">If execution of this code produces exactly <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> <mi>K</mi> </math> page faults, what is the page size?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> KB`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> </math> KB`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>16</mn> </math> KB`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>32</mn> </math> KB`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 8 Explanation:</strong><br>  <a href="https://gateoverflow.in/543897" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="2714" data-start="2646">A virtual-memory system uses the <strong data-end="2686" data-start="2679">LRU</strong> page-replacement algorithm.</p> <p data-end="2777" data-start="2716">There are four physical page frames at hexadecimal addresses: </p> <p data-end="2806" data-start="2779"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4000</mn> <mo>,</mo> <mtext> </mtext> <mn>5000</mn> <mo>,</mo> <mtext> </mtext> <mn>6000</mn> <mo>,</mo> <mtext> </mtext> <mn>7000</mn> </math> </p> <p data-end="2839" data-start="2808">The page-reference sequence is:</p> <p data-end="2984" data-start="2841"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mo stretchy="false">→</mo> <mn>2</mn> <mo stretchy="false">→</mo> <mn>3</mn> <mo stretchy="false">→</mo> <mn>4</mn> <mo stretchy="false">→</mo> <mn>2</mn> <mo stretchy="false">→</mo> <mn>5</mn> <mo stretchy="false">→</mo> <mn>3</mn> <mo stretchy="false">→</mo> <mn>1</mn> <mo stretchy="false">→</mo> <mn>6</mn> <mo stretchy="false">→</mo> <mn>5</mn> <mo stretchy="false">→</mo> <mn>4</mn> </math> </p> <p data-end="3056" data-start="2986">For the initial references <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mo>,</mo> <mn>2</mn> <mo>,</mo> <mn>3</mn> <mo>,</mo> <mn>4</mn> </math>, the pages are loaded as follows:</p> <p data-end="3056" data-start="2986"><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" cellpadding="5" border="1"> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Page</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Frame Address</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>4000</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>2</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>5000</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>3</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>6000</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>4</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>7000</mn> </td> </tr> </table> </p> <p data-end="3244" data-start="3164">At which address is page <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> loaded when it is referenced for the <strong data-end="3243" data-start="3230">last time</strong>?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4000</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5000</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>6000</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>7000</mn> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 9 Explanation:</strong><br>  <a href="https://gateoverflow.in/543899" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="897" data-start="819">Which of the following statements about page-replacement policies are correct?</p> </span>`,
      image: "",
      options: [
        `LRU always produces fewer page faults than FIFO.`,
        `OPT always performs at least as well as LRU.`,
        `For any replacement policy, increasing the number of available frames can never decrease the hit percentage.`,
        `With LRU, increasing the number of available frames cannot decrease the hit percentage.`,
        `Random replacement is always worse than LRU.`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 10 Explanation:</strong><br>  <a href="https://gateoverflow.in/543884" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },

    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="7139" data-start="7104">Consider the page-reference string:</p> <p data-end="7188" data-start="7141"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> <mo>,</mo> <mtext> </mtext> <mn>4</mn> <mo>,</mo> <mtext> </mtext> <mn>3</mn> <mo>,</mo> <mtext> </mtext> <mn>2</mn> <mo>,</mo> <mtext> </mtext> <mn>5</mn> <mo>,</mo> <mtext> </mtext> <mn>4</mn> <mo>,</mo> <mtext> </mtext> <mn>6</mn> <mo>,</mo> <mtext> </mtext> <mn>5</mn> <mo>,</mo> <mtext> </mtext> <mn>4</mn> <mo>,</mo> <mtext> </mtext> <mn>3</mn> <mo>,</mo> <mtext> </mtext> <mn>2</mn> <mo>,</mo> <mtext> </mtext> <mn>6</mn> </math> </p> <p data-end="7248" data-start="7190">Initially, memory is empty and contains <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="bold">4</mtext> </math><strong data-end="7247" data-start="7230"> page frames</strong>.</p> <p data-end="7338" data-start="7250">If the <strong data-end="7274" data-start="7257">Optimal (OPT)</strong> page-replacement algorithm is used, how many page faults occur?</p> </span>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 11 Explanation:</strong><br>  <a href="https://gateoverflow.in/543744" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="2282" data-start="2216">Which of the following statements about virtual memory is correct?</p> </span>`,
      image: "",
      options: [
        `The LRU algorithm selects for replacement the page for which the longest time has elapsed since its last use.`,
        `When indexed address translation is used, a page table is required only for pages currently present in main memory.`,
        `Whenever a page fault occurs, garbage collection must be performed.`,
        `The creation of many small free-memory regions as paging is repeatedly performed is called fragmentation.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 12 Explanation:</strong><br>  <a href="https://gateoverflow.in/543737" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="3950" data-start="3880">A system makes an average of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math> main-memory accesses per instruction.</p> <p data-end="4007" data-start="3952">Whenever a page fault occurs, it causes an overhead of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>40</mn> </math> milliseconds </p> <p data-end="4145" data-start="4028">What is the maximum allowable page-fault rate if the average instruction delay caused by page faults must not exceed <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0.4</mn> </math> microseconds per instruction? (<em>Ignore all other overheads.)</em></p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> <mo>×</mo> <msup> <mn>10</mn> <mrow data-mjx-texclass="ORD"> <mo>−</mo> <mn>6</mn> </mrow> </msup> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mo>×</mo> <msup> <mn>10</mn> <mrow data-mjx-texclass="ORD"> <mo>−</mo> <mn>5</mn> </mrow> </msup> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> <mo>×</mo> <msup> <mn>10</mn> <mrow data-mjx-texclass="ORD"> <mo>−</mo> <mn>5</mn> </mrow> </msup> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mo>×</mo> <msup> <mn>10</mn> <mrow data-mjx-texclass="ORD"> <mo>−</mo> <mn>4</mn> </mrow> </msup> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 13 Explanation:</strong><br>  <a href="https://gateoverflow.in/543739" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="5587" data-start="5542">Consider the following page-reference string:</p> <p data-end="5636" data-start="5589"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mn>2</mn> <mo>,</mo> <mtext> </mtext> <mn>3</mn> <mo>,</mo> <mtext> </mtext> <mn>4</mn> <mo>,</mo> <mtext> </mtext> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mn>2</mn> <mo>,</mo> <mtext> </mtext> <mn>5</mn> <mo>,</mo> <mtext> </mtext> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mn>2</mn> <mo>,</mo> <mtext> </mtext> <mn>3</mn> <mo>,</mo> <mtext> </mtext> <mn>4</mn> <mo>,</mo> <mtext> </mtext> <mn>5</mn> </math> </p> <p data-end="5705" data-start="5638">The FIFO page-replacement algorithm is used with <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="bold">4</mtext> </math><strong data-end="5704" data-start="5687"> page frames</strong>.</p> <p data-end="5739" data-start="5707">Initially, all frames are empty. How many page faults occur? </p> </span>`,
      image: "",
      options: [],
      answer: "10",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 14 Explanation:</strong><br>  <a href="https://gateoverflow.in/543741" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="863" data-start="791">In a virtual-memory system, the FIFO page-replacement algorithm is used.</p> <p data-end="902" data-start="865">The virtual-page reference string is : <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mn>4</mn> <mo>,</mo> <mtext> </mtext> <mn>2</mn> <mo>,</mo> <mtext> </mtext> <mn>4</mn> <mo>,</mo> <mtext> </mtext> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mn>3</mn> </math> </p> <p data-end="955" data-start="929">There are <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>3</mn> </math> page frames.</p> <p data-end="1010" data-start="957">After the first three references, the frames contain : <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mn>4</mn> <mo>,</mo> <mtext> </mtext> <mn>2</mn> </math> </p> <p data-end="1123" data-start="1025">What is the state of the three page frames after all the remaining references have been processed?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mn>3</mn> <mo>,</mo> <mtext> </mtext> <mn>4</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mn>4</mn> <mo>,</mo> <mtext> </mtext> <mn>3</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>3</mn> <mo>,</mo> <mtext> </mtext> <mn>4</mn> <mo>,</mo> <mtext> </mtext> <mn>2</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> <mo>,</mo> <mtext> </mtext> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mn>3</mn> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 15 Explanation:</strong><br>  <a href="https://gateoverflow.in/543602" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },



  ]
});


registerTest({
  series: "pw-cs-gate-2026",
  name: "Swt-OS-Part3",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="3507" data-start="3328">An operating system can use page tables and exceptions to perform allocation on demand, where it does not allocate physical memory for a program until the program tries to use it.</p> <p data-end="3596" data-start="3509">What happens when a program attempts to access memory that still needs to be allocated?</p> </span>`,
      image: "",
      options: [
        `The hardware detects the condition, updates the page table, and allocates memory itself.`,
        `The operating system's page fault handler allocates the memory, updates the page table, and restarts the program beginning with the instruction that attempted the access.`,
        `The operating system allocates the memory and restarts execution from the beginning of the function containing the instruction.`,
        `The operating system allocates the memory and resumes execution from the instruction after the faulting instruction.`,
        `The compiler inserts a system call before every potentially faulting memory access.`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 1 Explanation:</strong><br>  <a href="https://gateoverflow.in/543590" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="6570" data-start="6509">A process generates the following first <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>25</mn> </math> page references:</p> <p data-end="6671" data-start="6572"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>A</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>C</mi> <mo>,</mo> <mtext> </mtext> <mi>D</mi> <mo>,</mo> <mtext> </mtext> <mi>E</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>D</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>C</mi> <mo>,</mo> <mtext> </mtext> <mi>D</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>C</mi> <mo>,</mo> <mtext> </mtext> <mi>D</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>C</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>D</mi> <mo>,</mo> <mtext> </mtext> <mi>E</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>D</mi> <mo>,</mo> <mtext> </mtext> <mi>E</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>C</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>A</mi> </math> </p> <p data-end="6746" data-start="6673">There are <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> </math> unique pages, but the process has only <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> physical frames.</p> <p data-end="6790" data-start="6748">Initially, none of the pages are resident.</p> <p data-end="6855" data-start="6792">How many <strong data-end="6814" data-start="6801">page hits</strong> occur when LRU page replacement is used?</p> </span>`,
      image: "",
      options: [],
      answer: "19",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 2 Explanation:</strong><br>  <a href="https://gateoverflow.in/543594" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="2207" data-start="2101">The size of an inverted page table grows with the size of the virtual address space that it is supporting.</p> </span>`,
      image: "",
      options: [
        `True`,
        `False`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 3 Explanation:</strong><br>  <a href="https://gateoverflow.in/543587" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="5343" data-start="5300">Assume the following page-reference stream:</p> <p data-end="5392" data-start="5345"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>A</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>C</mi> <mo>,</mo> <mtext> </mtext> <mi>D</mi> <mo>,</mo> <mtext> </mtext> <mi>A</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>E</mi> <mo>,</mo> <mtext> </mtext> <mi>A</mi> <mo>,</mo> <mtext> </mtext> <mi>B</mi> <mo>,</mo> <mtext> </mtext> <mi>C</mi> <mo>,</mo> <mtext> </mtext> <mi>D</mi> <mo>,</mo> <mtext> </mtext> <mi>E</mi> </math> </p> <p data-end="5495" data-start="5394">Assuming a page cache of size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>3</mn> </math> pages and a FIFO replacement policy, how many misses will there be?</p> </span>`,
      image: "",
      options: [],
      answer: "9",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 4 Explanation:</strong><br>  <a href="https://gateoverflow.in/543592" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="953" data-start="864">Assume a task is divided into <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> </math> equal-sized segments, and page tables have <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> entries.</p> <p data-end="1017" data-start="955">Thus, the system has a combination of segmentation and paging. </p> <p data-end="1060" data-start="1019">Assume also that the page size is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math> KB.</p> <p data-end="1124" data-start="1062">What is the maximum logical address space for the task, in KB? </p> </span>`,
      image: "",
      options: [],
      answer: "64",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 5 Explanation:</strong><br>  <a href="https://gateoverflow.in/543585" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="5575" data-start="5552">Consider a system with:</p> <ul data-end="5665" data-start="5577"> <li data-end="5600" data-section-id="b7ip7f" data-start="5577"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>6</mn> </math>-level page tables</li> <li data-end="5635" data-section-id="10c3hcy" data-start="5601"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math> KB page tables at each level</li> <li data-end="5665" data-section-id="1tol9l" data-start="5636"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math>-byte page-table entries</li> </ul> <p data-end="5831" data-start="5667">How much page-table space, in KB, is required to allow a process to access <strong data-end="5830" data-start="5742">two distinct pages whose virtual addresses differ only in their most significant bit</strong>?</p> </span>`,
      image: "",
      options: [],
      answer: "11",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 6 Explanation:</strong><br>  <a href="https://gateoverflow.in/543481" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="7177" data-start="7153">Consider a machine with:</p> <ul data-end="7335" data-start="7179"> <li data-end="7204" data-section-id="17zrflo" data-start="7179">Physical memory <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>8</mn> </math> GB</li> <li data-end="7224" data-section-id="1rh3yq" data-start="7205">Page size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>8</mn> </math> KB</li> <li data-end="7259" data-section-id="j2pmzt" data-start="7225">Page-table entry size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>4</mn> </math> bytes </li> <li data-end="7293" data-section-id="1hj2ki1" data-start="7260">Virtual address size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>46</mn> </math> bits </li> <li data-end="7335" data-section-id="1ykorhz" data-start="7294">Every page table must fit into one page</li> </ul> <p data-end="7488" data-start="7337">How much physical memory is needed for a process with <strong data-end="7424" data-start="7391">three pages of virtual memory</strong>, for example, one code page, one data page, and one stack page?</p> <p data-end="7513" data-start="7490">Give your answer in KB.</p> </span>`,
      image: "",
      options: [],
      answer: "48",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 7 Explanation:</strong><br>  <a href="https://gateoverflow.in/543484" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="2286" data-start="2224">Consider a virtual-memory system that uses multi-level paging. </p> <ul data-end="2507" data-start="2288"> <li data-end="2321" data-section-id="103cxs9" data-start="2288">Virtual address size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>64</mn> </math> bits </li> <li data-end="2356" data-section-id="y8nztp" data-start="2322">Physical address size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>64</mn> </math> bits </li> <li data-end="2392" data-section-id="1vh16pd" data-start="2357">Page size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>1</mn> </math> MB <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <msup> <mn>2</mn> <mrow data-mjx-texclass="ORD"> <mn>20</mn> </mrow> </msup> </math> bytes</li> <li data-end="2441" data-section-id="1l8b45i" data-start="2393">Page-table entry size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>16</mn> </math> bytes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <msup> <mn>2</mn> <mn>4</mn> </msup> </math> bytes </li> <li data-end="2507" data-section-id="12kzauf" data-start="2442">Each individual page table at every level must fit in one frame</li> </ul> <p data-end="2632" data-start="2509">A particular process uses only <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>128</mn> </math> MB <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <msup> <mn>2</mn> <mrow data-mjx-texclass="ORD"> <mn>27</mn> </mrow> </msup> </math> bytes of virtual memory, occupying the consecutive virtual-address range:</p> <p data-end="2651" data-start="2634"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math> to <math xmlns="http://www.w3.org/1998/Math/MathML"> <msup> <mn>2</mn> <mrow data-mjx-texclass="ORD"> <mn>27</mn> </mrow> </msup> <mo>−</mo> <mn>1</mn> </math> </p> <p data-end="2759" data-start="2653">What is the <strong data-end="2707" data-start="2665">total number of individual page tables</strong> required to translate this process's address space?</p> </span>`,
      image: "",
      options: [],
      answer: "3",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 8 Explanation:</strong><br>  <a href="https://gateoverflow.in/543476" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="33" data-start="0">Consider the <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext>x86-64</mtext> </math> architecture.</p> <p data-end="42" data-start="35">Assume:</p> <ul data-end="282" data-start="44"> <li data-end="62" data-section-id="fb0pb7" data-start="44">Pages are <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> KB</li> <li data-end="99" data-section-id="15axz9k" data-start="63">Each page-table entry is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> </math> bytes</li> <li data-end="145" data-section-id="5vegmr" data-start="100">Each page-table page contains <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>512</mn> </math> entries</li> <li data-end="188" data-section-id="ru6z79" data-start="146">The page-table structure has four levels</li> <li data-end="242" data-section-id="p1xl6d" data-start="189">Any allocated memory consumes physical pages in RAM</li> <li data-end="282" data-section-id="mcpeb8" data-start="243">There is no swapping or demand paging</li> </ul> <p data-end="428" data-is-last-node="" data-is-only-node="" data-start="284">What is the minimum number of physical pages consumed by a process that allocates <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>12</mn> </math> KB, for example, one page each for code, stack, and data?</p> </span>`,
      image: "",
      options: [],
      answer: "7",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 9 Explanation:</strong><br>  <a href="https://gateoverflow.in/543474" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="4095" data-start="4043">Consider a three-level page table on a system where:</p> <ul data-end="4300" data-start="4097"> <li data-end="4121" data-section-id="tbg2i3" data-start="4097">Page size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>256</mn> </math> bytes</li> <li data-end="4156" data-section-id="1p9s5tb" data-start="4122">Page-table entry size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>2</mn> </math> bytes </li> <li data-end="4203" data-section-id="1x7t09e" data-start="4157">First-level page tables contain <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>16</mn> </math> entries </li> <li data-end="4252" data-section-id="ndw3wk" data-start="4204">Second-level page tables contain <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>128</mn> </math> entries </li> <li data-end="4300" data-section-id="5wc6pj" data-start="4253">Third-level page tables contain <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>128</mn> </math> entries </li> </ul> <p data-end="4505" data-start="4302">If the page containing address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x100</mtext> </math> and the page containing address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x10000</mtext> </math> are valid for a process, and no other pages are valid, how many bytes of space do the page tables for this process occupy?</p> </span>`,
      image: "",
      options: [],
      answer: "800",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 10 Explanation:</strong><br>  <a href="https://gateoverflow.in/543479" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider a system with:</p> <ul> <li>Two-level page tables</li> <li><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>42</mn> </math>-bit virtual addresses</li> <li><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>40</mn> </math>-bit physical addresses</li> <li> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> </math>-byte page-table entries</li> <li> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>64</mn> </math> KB pages</li> <li> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>64</mn> </math> KB page tables at each level</li> </ul> <p>Which of the following addresses use the same first-level page-table entry as:</p> <p><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00 123 456 789</mtext> </math> </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00 123 444 444</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00 0A9 876 789</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00 136 345 678</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00 000 006 789</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 11 Explanation:</strong><br>  <a href="https://gateoverflow.in/543464" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="127" data-start="0">A byte-addressable machine implements virtual memory with a <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> MB virtual address space using a three-level page-table system. </p> <p data-end="176" data-start="129">All page tables live in physical address space.</p> <p data-end="219" data-start="178">The breakdown of virtual-address bits is:</p> <p data-end="331" data-start="221"><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" cellpadding="5" border="1"> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>L1</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>L2</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>L3</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Offset</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>5</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>5</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>5</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>7</mn> </td> </tr> </table> </p> <p data-end="366" data-is-last-node="" data-is-only-node="" data-start="333">How many PTEs can fit in a frame?</p> </span>`,
      image: "",
      options: [],
      answer: "32",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 12 Explanation:</strong><br>  <a href="https://gateoverflow.in/543469" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="69" data-start="0">The following table shows some parameters of a virtual memory system:</p> <p><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" cellpadding="5" border="1"> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Parameter</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Value</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Virtual Address</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>42</mn> <mtext> </mtext> <mtext>bits</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Physical Address</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>40</mn> <mtext> </mtext> <mtext>bits</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Physical Page Size</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>64</mn> <mtext> </mtext> <mtext>KB</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Page Table Entry</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>8</mn> <mtext> </mtext> <mtext>bytes</mtext> </td> </tr> </table> In general, the virtual address space of a process is mostly empty. To reduce the size of the page table, a multilevel page table is used for address translation.</p> <p data-end="550" data-is-last-node="" data-is-only-node="" data-start="399">How many levels of page tables will be needed for address translation, given that the size of a page table at any level is the size of a physical page?</p> </span>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 13 Explanation:</strong><br>  <a href="https://gateoverflow.in/543467" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="6758" data-start="6700">Consider a virtual memory system that uses 2-level paging.</p> <p data-end="6777" data-start="6760">The page size is: <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>256</mn> <mo>=</mo> <msup> <mn>2</mn> <mn>8</mn> </msup> </math> bytes</p> <p data-end="6900" data-start="6796">Each individual page table fits exactly into one memory frame, and the size of each page-table entry is: <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> </math> bytes</p> <p data-end="6991" data-start="6913">What is the maximum size, in bytes, of a virtual address space in this system?</p> </span>`,
      image: "",
      options: [],
      answer: "262144",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 14 Explanation:</strong><br>  <a href="https://gateoverflow.in/543471" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <section data-testid="conversation-turn-6" data-turn="assistant" data-turn-id="request-WEB:906eb100-e9f7-4485-b394-7a993c56c820-2" data-turn-id-container="request-WEB:906eb100-e9f7-4485-b394-7a993c56c820-2" dir="auto"> <p data-end="482" data-is-last-node="" data-start="0">Let us assume there is a two-level page table in your system.</p> <p>The virtual address is split as:</p> <p><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">&lt;vpn part1, vpn part2, page offset&gt; </mtext> </math> </p> <p>Which of the following statements is true?</p> </section> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">vpn part 1</mtext> </math> is used to index the physical page that contains data.`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">vpn part 1</mtext> </math> is used to get the base address of the first-level table.`,
        `Page offset is used to index the TLB.`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">vpn part 2</mtext> </math> is used to index the PTE in the second-level page table.`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 15 Explanation:</strong><br>  <a href="https://gateoverflow.in/543460" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="4494" data-start="4387">Consider a system using a <strong data-end="4437" data-start="4413">two-level page table</strong>. Assume the required page is present in physical memory.</p> <p data-end="4591" data-start="4496">How many main-memory accesses are required for a virtual-address access when a TLB miss occurs?</p> <p data-end="4655" data-start="4593">Include the final access to the requested instruction or data. </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>3</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 16 Explanation:</strong><br>  <a href="https://gateoverflow.in/543437" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<span style="display: inline;"> <p data-end="2712" data-start="2523">If an instruction takes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>p</mi> </math> microseconds and a page fault takes an additional <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>q</mi> </math> microseconds, the effective instruction time if, on average, a page fault occurs every <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>r</mi> </math> instructions is: </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mstyle displaystyle="true" scriptlevel="0"> <mfrac> <mrow> <mi>p</mi> <mo>+</mo> <mi>q</mi> </mrow> <mi>r</mi> </mfrac> </mstyle> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>p</mi> <mo>+</mo> <mo stretchy="false">(</mo> <mi>q</mi> <mo>×</mo> <mi>r</mi> <mo stretchy="false">)</mo> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>p</mi> <mo>+</mo> <mstyle displaystyle="true" scriptlevel="0"> <mfrac> <mi>q</mi> <mi>r</mi> </mfrac> </mstyle> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>p</mi> <mo>+</mo> <mi>q</mi> <mo stretchy="false">)</mo> <mo>×</mo> <mi>r</mi> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 17 Explanation:</strong><br>  <a href="https://gateoverflow.in/543433" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<span style="display: inline;"> <p data-end="499" data-start="277">Consider a three level paging scheme with a TLB. Assume no page fault occurs. It takes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mtext> </mtext> <mtext>ns</mtext> </math> to search the TLB and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>100</mn> <mtext> </mtext> <mtext>ns</mtext> </math> to access the physical memory. If the TLB hit ratio is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>90</mn> <mi mathvariant="normal">%</mi> </math>, what is the effective memory access time?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>101</mn> <mtext> </mtext> <mtext>ns</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>111</mn> <mtext> </mtext> <mtext>ns</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>121</mn> <mtext> </mtext> <mtext>ns</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>131</mn> <mtext> </mtext> <mtext>ns</mtext> </math>`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 18 Explanation:</strong><br>  <a href="https://gateoverflow.in/543429" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<span style="display: inline;"> <p data-end="1247" data-start="1159">Which of the following statements about small <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mn>4</mn> <mtext> </mtext> <mtext>KB</mtext> <mo stretchy="false">)</mo> </math> and large <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mn>4</mn> <mtext> </mtext> <mtext>MB</mtext> <mo stretchy="false">)</mo> </math> pages are correct?</p> </span>`,
      image: "",
      options: [
        `Large pages allow for a more efficient use of the TLB.`,
        `Accessing a large page, in the case of a TLB miss, would be slower than accessing a small page.`,
        `Large pages suffer from internal fragmentation.`,
        `Large pages suffer from external fragmentation.`,
      ],
      answer: "A,C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 19 Explanation:</strong><br>  <a href="https://gateoverflow.in/543431" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="3386" data-start="3354">What caching is done in the TLB?</p> </span>`,
      image: "",
      options: [
        `Virtual Address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Physical Address`,
        `Virtual Page Number <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Physical Address`,
        `Virtual Page Number <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Physical Page Number`,
        `Physical Page Number <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Virtual Page Number`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 20 Explanation:</strong><br>  <a href="https://gateoverflow.in/543435" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>The following virtual-to-physical address translations are observed for a process. All addresses are <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>32</mn> </math> bits long.</p> <p><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" cellpadding="5" border="1"> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Virtual address</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Physical address</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext mathvariant="monospace">0x00080AF0 </mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext mathvariant="monospace">0x00101AF0 </mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext mathvariant="monospace">0x00002224 </mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext mathvariant="monospace">0x00083224 </mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext mathvariant="monospace">0x00073234 </mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext mathvariant="monospace">0x00183234 </mtext> </td> </tr> </table> </p> <p data-end="1394" data-start="1336">Which page size is consistent with all three translations?</p> </span>`,
      image: "",
      options: [
        `Only <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>64</mn> </math> KB`,
        `Only <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> KB`,
        `Both <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>64</mn> </math> KB and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> KB`,
        `Neither <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>64</mn> </math> KB nor <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> KB`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 21 Explanation:</strong><br>  <a href="https://gateoverflow.in/543414" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="7595" data-start="7502">A processor experiences a TLB miss while translating an address using a two-level page table.</p> <p data-end="7680" data-start="7597">What is the number of main-memory accesses required only for the page-table lookup?</p> <p data-end="7751" data-start="7682">Do not include the final access to the requested instruction or data.</p> </span>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 22 Explanation:</strong><br>  <a href="https://gateoverflow.in/543015" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<span style="display: inline;"> <p>Which of the following statements about multi-level page tables are correct?</p> </span>`,
      image: "",
      options: [
        `A multi-level page table may consume more pages than a linear page table for some address-space usage patterns.`,
        `Page-table memory is generally easier to allocate because lower-level tables are divided into separate page-sized chunks.`,
        `Without a TLB hit, a multi-level page-table lookup generally requires more lookup accesses than a linear page table.`,
        `Systems with larger virtual-address spaces commonly use more page-table levels.`,
        `A TLB reduces the amount of memory occupied by the multi-level page table.`,
      ],
      answer: "A,B,C,D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 23 Explanation:</strong><br>  <a href="https://gateoverflow.in/543017" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="4672" data-start="4659">A system has:</p> <ul data-end="4891" data-start="4674"> <li data-end="4702" data-section-id="17cy42n" data-start="4674"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>15</mn> </math>-bit virtual addresses</li> <li data-end="4726" data-section-id="3i0lbv" data-start="4703">Page size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>32</mn> </math> bytes</li> <li data-end="4751" data-section-id="11lnidv" data-start="4727">A two-level page table</li> <li data-end="4776" data-section-id="19k9fg0" data-start="4752">One-byte PDEs and PTEs</li> <li data-end="4850" data-section-id="1f7du3l" data-start="4777">Entry format: one valid bit followed by a <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>7</mn> </math>-bit physical-frame number</li> <li data-end="4891" data-section-id="1yp11a" data-start="4851">Page-directory base register <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>P</mi> <mi>D</mi> <mi>B</mi> <mi>R</mi> <mo>=</mo> <mn>73</mn> </math></li> </ul> <p data-end="4936" data-start="4893">The required physical-memory pages contain:</p> <p data-end="5053" data-start="4938">Page <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>6</mn> <mo>:</mo> </math> </p> <pre><code>0a 1c 01 14 0b 1a 19 0a
0a 1a 0c 14 02 0c 1c 0c
15 04 0e 13 17 11 08 05
08 07 04 13 0f 1d 0f 1e</code></pre> <p data-end="5171" data-start="5055">Page <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>73</mn> <mo>:</mo> </math> </p> <pre><code>a2 d2 97 96 d9 7f 87 b4
b7 f2 f4 82 bf 7f be 93
e8 9d 99 9e f1 7f 7f b0
d8 da eb b1 81 c3 c2 f6</code></pre> <p data-end="5290" data-start="5173">Page <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>114</mn> <mo>:</mo> </math> </p> <pre><code>7f 7f 7f 7f 82 7f 7f 7f
7f 7f 7f 7f 99 7f 7f 7f
7f 7f 7f 86 7f 7f 7f 7f
7f 7f 8f 7f 7f 7f 7f 7f</code></pre> <p data-end="5375" data-start="5292">What happens when the processor loads from virtual addresses <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1787</mtext> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x2665</mtext> </math>? </p> </span>`,
      image: "",
      options: [
        `Both addresses generate faults.`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1787</mtext> </math> generates a fault, while <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x2665</mtext> </math> returns <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1A</mtext> </math>.`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1787</mtext> </math> returns <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1A</mtext> </math>, while <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x2665</mtext> </math> generates a fault.`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1787</mtext> </math> generates a fault, while <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x2665</mtext> </math> returns <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x86</mtext> </math>.`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 24 Explanation:</strong><br>  <a href="https://gateoverflow.in/543011" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="2966" data-start="2879">Which statement correctly describes the purpose of the valid bit in a page-table entry?</p> </span>`,
      image: "",
      options: [
        `It indicates whether the page has been modified. An invalid-bit access causes the page to be written to disk.`,
        `It indicates whether the translation may be used by the process. Access through an invalid entry causes the MMU to generate an exception.`,
        `It indicates whether the page was recently referenced. Access through an invalid entry always produces a TLB hit.`,
        `It indicates that the page is read-only. Access through an invalid entry is silently ignored.`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 25 Explanation:</strong><br>  <a href="https://gateoverflow.in/543008" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="34" data-start="0">Consider the following page table:</p> <p data-end="203" data-start="36"><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" cellpadding="5" border="1"> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Virtual page</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Frame</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>0</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>3</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>10</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>2</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>9</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>3</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>2</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>4</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>0</mn> </td> </tr> </table> </p> <p data-end="235" data-start="205">The page size is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1024</mn> </math> bytes.</p> <p data-end="321" data-start="237">Assume that physical address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2075</mn> </math> belongs to the memory allocated to this process.</p> <p data-end="376" data-start="323">What virtual address maps to physical address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2075</mn> </math>? </p> <p data-end="409" data-is-last-node="" data-is-only-node="" data-start="378"><em>Enter the answer as an integer.</em></p> </span>`,
      image: "",
      options: [],
      answer: "3099",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 26 Explanation:</strong><br>  <a href="https://gateoverflow.in/543000" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="3445" data-start="3402">Consider a single-level paging system with:</p> <ul data-end="3534" data-start="3447"> <li data-end="3475" data-section-id="17mkb08" data-start="3447"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>12</mn> </math>-bit virtual addresses</li> <li data-end="3505" data-section-id="duz27d" data-start="3476"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>24</mn> </math>-bit physical addresses</li> <li data-end="3534" data-section-id="2heznm" data-start="3506">Page size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>256</mn> <mo>=</mo> <msup> <mn>2</mn> <mn>8</mn> </msup> </math> bytes</li> </ul> <p data-end="3605" data-start="3536">What is the maximum number of entries in the page table of a process?</p> <p data-end="3638" data-start="3607"><em>Enter the answer as an integer.</em></p> </span>`,
      image: "",
      options: [],
      answer: "16",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 27 Explanation:</strong><br>  <a href="https://gateoverflow.in/542996" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="4700" data-start="4615">A system uses paging to implement virtual memory and uses a simple linear page table.</p> <p data-end="4717" data-start="4702">The system has:</p> <ul data-end="4938" data-start="4719"> <li data-end="4770" data-section-id="9hh1bp" data-start="4719">Virtual-address space <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>1</mn> <mtext> GB</mtext> <mo>=</mo> <msup> <mn>2</mn> <mrow data-mjx-texclass="ORD"> <mn>30</mn> </mrow> </msup> </math> bytes</li> <li data-end="4810" data-section-id="tlev3n" data-start="4771">Page size <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>1</mn> <mtext> KB</mtext> <mo>=</mo> <msup> <mn>2</mn> <mrow data-mjx-texclass="ORD"> <mn>10</mn> </mrow> </msup> </math> bytes</li> <li data-end="4856" data-section-id="16ynm2q" data-start="4811">Maximum number of physical frames <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <msup> <mn>2</mn> <mrow data-mjx-texclass="ORD"> <mn>15</mn> </mrow> </msup> </math></li> <li data-end="4938" data-section-id="8l25x1" data-start="4857">Each page-table entry contains:<br/> <ul data-end="4938" data-start="4893"> <li data-end="4908" data-section-id="1yzpszp" data-start="4893">One valid bit</li> <li data-end="4938" data-section-id="83437e" data-start="4911">The physical frame number</li> </ul> </li> </ul> <p data-end="5017" data-start="4940">Assume that each page-table entry occupies the minimum whole number of bytes.</p> <p data-end="5109" data-start="5019">How many megabytes of memory are occupied by page tables when <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>100</mn> </math> processes are running? </p> <p data-end="5134" data-start="5111"><em>Enter the answer in MB.</em></p> </span>`,
      image: "",
      options: [],
      answer: "200",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 28 Explanation:</strong><br>  <a href="https://gateoverflow.in/542998" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>Consider the following page table. All numbers are expressed in base <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math>. </p> <table style="margin: 10px auto; border-collapse: collapse; text-align: center;" cellpadding="5" border="1"> <tr> <th style="padding: 8px; border: 1px solid #ced4da;">Virtual page</th> <th style="padding: 8px; border: 1px solid #ced4da;">Frame</th> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;">0</td> <td style="padding: 8px; border: 1px solid #ced4da;">3</td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;">1</td> <td style="padding: 8px; border: 1px solid #ced4da;">10</td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;">2</td> <td style="padding: 8px; border: 1px solid #ced4da;">9</td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;">3</td> <td style="padding: 8px; border: 1px solid #ced4da;">2</td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;">4</td> <td style="padding: 8px; border: 1px solid #ced4da;">0</td> </tr> </table> <p>The page size is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1024</mn> </math> bytes.</p> <p>What is the physical address corresponding to virtual address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>697</mn> </math>? </p> <p><em>Enter the answer as an integer.</em></p> </span>`,
      image: "",
      options: [],
      answer: "3769",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 29 Explanation:</strong><br>  <a href="https://gateoverflow.in/542991" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="50" data-start="0">Consider a virtual-memory system that uses paging.</p> <ul> <li data-end="111" data-start="52"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext>Virtual address length </mtext> <mo>=</mo> <mn>32</mn> <mtext> bits</mtext> </math></li> <li data-end="173" data-start="113"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext>Physical address length </mtext> <mo>=</mo> <mn>32</mn> <mtext> bits</mtext> </math></li> <li data-end="240" data-start="175"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext>Page size </mtext> <mo>=</mo> <mn>4</mn> <mtext> KB</mtext> <mo>=</mo> <msup> <mn>2</mn> <mrow data-mjx-texclass="ORD"> <mn>12</mn> </mrow> </msup> <mtext> bytes</mtext> </math></li> </ul> <p data-end="285" data-start="242">Process <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>1</mn> </msub> </math> has the following page table:</p> <p data-end="535" data-start="287"><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" cellpadding="5" border="1"> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Virtual page</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Frame number</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>0</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext mathvariant="monospace">0x00788</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext mathvariant="monospace">0x00249</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>2</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext mathvariant="monospace">0x0023f</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>3</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext mathvariant="monospace">0x00ace</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>4</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext mathvariant="monospace">0x00bcd</mtext> </td> </tr> </table> </p> <p data-end="621" data-start="537">What is the physical address corresponding to virtual address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00001a60</mtext> </math>? </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00249a60</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00788a60</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00249001</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x00001a60</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 30 Explanation:</strong><br>  <a href="https://gateoverflow.in/542994" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },



  ]
});

registerTest({
  series: "pw-cs-gate-2026",
  name: "Swt-OS-Part4",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="6357" data-start="6248">Consider the following C program executing on a computer that supports virtual memory and paged segmentation:</p> <pre class="prettyprint linenums lang-c_cpp" data-end="6461" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main(void) {     int w;     printf("%p", (void *)&amp;w);     return 0; }' data-start="6359">#include &lt;stdio.h&gt;

int main(void)
{
    int w;
    printf("%p", (void *)&amp;w);
    return 0;
}</pre> <p data-end="6551" data-start="6463">When the <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">printf</mtext> </math> statement is executed, the value printed on the screen corresponds to:</p> </span>`,
      image: "",
      options: [
        `The physical address representing the segment, page, and offset where variable <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">w</mtext> </math> is stored.`,
        `The virtual address associated with the physical location where variable <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">w</mtext> </math> is stored.`,
        `The result produced after the MMU translates the address.`,
        `The address of variable <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">w</mtext> </math> in the physical address space of the process.`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 1 Explanation:</strong><br>  <a href="https://gateoverflow.in/542808" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="49" data-start="0">Consider the following table of active processes:</p> <p data-end="185" data-start="51"><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" cellpadding="5" border="1"> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Process</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Base</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Bound</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mi>A</mi> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>100</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>10</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mi>B</mi> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1000</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>20</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mi>C</mi> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>500</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>50</mn> </td> </tr> </table> </p> <p data-end="375" data-start="187">Process <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>A</mi> </math> is initially running on the CPU. The operating system performs a context switch from process <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>A</mi> </math> to process <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>B</mi> </math> and correctly loads the base and bound registers of process <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>B</mi> </math>. </p> <p data-end="450" data-start="377">Which of the following physical addresses can process <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>B</mi> </math> legally access? </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>20</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>500</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1015</mn> </math>`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 2 Explanation:</strong><br>  <a href="https://gateoverflow.in/542802" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="37" data-start="0">Consider the following segment table:</p> <p data-end="209" data-start="39"><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" cellpadding="5" border="1"> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Segment</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Base</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Limit</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>0</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>219</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>600</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>2300</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>14</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>2</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>90</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>100</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>3</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1327</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>580</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>4</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1952</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>96</mn> </td> </tr> </table> </p> <p data-end="304" data-start="211">In the process’s logical address space, the segments are arranged consecutively in the order:</p> <p data-end="321" data-start="306"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> <mo>,</mo> <mn>1</mn> <mo>,</mo> <mn>2</mn> <mo>,</mo> <mn>3</mn> <mo>,</mo> <mn>4</mn> </math> </p> <p data-end="383" data-start="323">What physical address corresponds to logical address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1000</mn> </math>? </p> <p data-end="426" data-is-last-node="" data-is-only-node="" data-start="385"><em>(Enter the physical address as an integer.)</em></p> </span>`,
      image: "",
      options: [],
      answer: "1613",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 3 Explanation:</strong><br>  <a href="https://gateoverflow.in/542799" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="16" data-start="0">The instruction:</p> <p data-end="43" data-start="18"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">LOAD GR, B, AD</mtext> </math> </p> <p data-end="240" data-start="45">adds the contents of base register <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>B</mi> </math> to the address field <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>A</mi> <mi>D</mi> </math>. The resulting effective address is used to access main memory, and the data stored at that location is loaded into register <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>G</mi> <mi>R</mi> </math>. </p> <p data-end="269" data-start="242">Base register <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math> contains : <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>100</mn> </math> </p> <p data-end="316" data-start="278">The relevant main-memory contents are:</p> <p data-end="545" data-start="318"><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" cellpadding="5" border="1"> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Memory address</mtext> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mtext>Stored value</mtext> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>100</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1100</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>101</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1101</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>200</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1200</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>201</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1201</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>300</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1300</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>301</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1301</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1200</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>2200</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1201</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>2201</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1300</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>2300</mn> </td> </tr> <tr> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>1301</mn> </td> <td style="padding: 8px; border: 1px solid #ced4da;"> <mn>2301</mn> </td> </tr> </table> </p> <p data-end="630" data-start="547">What value is loaded into register <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>G</mi> <mi>R</mi> </math> when the following instruction is executed?</p> <p data-end="658" data-start="632"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">LOAD GR, 1, 200</mtext> </math></p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1201</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1300</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2200</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2300</mn> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 4 Explanation:</strong><br>  <a href="https://gateoverflow.in/542805" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="49" data-start="0">A system uses base-and-bound address translation.</p> <p data-end="73" data-start="51">The registers contain:</p> <p data-end="97" data-start="75"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">base</mtext> <mo>=</mo> <mn>1000</mn> </math> </p> <p data-end="121" data-start="99"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">bound</mtext> <mo>=</mo> <mn>100</mn> </math> </p> <p data-end="178" data-start="123">The CPU fetches and executes the following instruction:</p> <p data-end="202" data-start="180"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">load 10, r1</mtext> </math> </p> <p data-end="276" data-start="204">Assume that the instruction itself is stored at a valid logical address.</p> <p data-end="368" data-start="278">How many main-memory accesses are generated while fetching and executing this instruction?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>3</mn> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 5 Explanation:</strong><br>  <a href="https://gateoverflow.in/542797" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="1252" data-start="1195">Four processes arrive at time <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math> in the following order:</p> <p data-end="1277" data-start="1254"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>1</mn> </msub> <mo>,</mo> <mtext> </mtext> <msub> <mi>P</mi> <mn>2</mn> </msub> <mo>,</mo> <mtext> </mtext> <msub> <mi>P</mi> <mn>3</mn> </msub> <mo>,</mo> <mtext> </mtext> <msub> <mi>P</mi> <mn>4</mn> </msub> </math> </p> <p data-end="1305" data-start="1279">Their CPU burst times are:</p> <p data-end="1314" data-start="1307"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>1</mn> </msub> <mo>=</mo> <mn>8</mn> </math> </p> <p data-end="1323" data-start="1316"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>2</mn> </msub> <mo>=</mo> <mn>4</mn> </math> </p> <p data-end="1332" data-start="1325"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>3</mn> </msub> <mo>=</mo> <mn>2</mn> </math> </p> <p data-end="1341" data-start="1334"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>4</mn> </msub> <mo>=</mo> <mn>1</mn> </math> </p> <p data-end="1488" data-start="1343">Calculate the difference between the average waiting time under FCFS scheduling and the average waiting time under non-preemptive SJF scheduling.</p> <p data-end="1531" data-start="1490"><em>Give the answer up to two decimal places.</em></p> </span>`,
      image: "",
      options: [],
      answer: "5.75",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 6 Explanation:</strong><br>  <a href="https://gateoverflow.in/542698" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="46" data-start="0">Which of the following statements are correct?</p> </span>`,
      image: "",
      options: [
        `A successful <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">exec()</mtext> </math> call replaces the current program image but does not change the process ID.`,
        `After a successful <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">fork()</mtext> </math>, the parent and child initially have separate logical address spaces.`,
        `All threads belonging to the same process share one common stack and one common program counter.`,
        `Kernel-level threads belonging to the same process may execute simultaneously on different processor cores.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 7 Explanation:</strong><br>  <a href="https://gateoverflow.in/542694" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="57" data-start="0">A bounded buffer has capacity <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>6</mn> </math> and is initially empty.</p> <p data-end="94" data-start="59">The semaphore values are initially:</p> <p data-end="116" data-start="96"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty</mtext> <mo>=</mo> <mn>6</mn> </math> </p> <p data-end="137" data-start="118"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">full</mtext> <mo>=</mo> <mn>0</mn> </math> </p> <p data-end="159" data-start="139"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex</mtext> <mo>=</mo> <mn>1</mn> </math> </p> <p data-end="178" data-start="161">During execution:</p> <p data-end="226" data-start="180"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>9</mn> </math> producer insertions complete successfully.</p> <p data-end="272" data-start="228"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> consumer removals complete successfully.</p> <p data-end="345" data-start="274">Assume that no producer or consumer operation is currently in progress.</p> <p data-end="383" data-start="347">What are the final semaphore values?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty</mtext> <mo>=</mo> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mtext mathvariant="monospace">full</mtext> <mo>=</mo> <mn>5</mn> <mo>,</mo> <mtext> </mtext> <mtext mathvariant="monospace">mutex</mtext> <mo>=</mo> <mn>1</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty</mtext> <mo>=</mo> <mn>5</mn> <mo>,</mo> <mtext> </mtext> <mtext mathvariant="monospace">full</mtext> <mo>=</mo> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mtext mathvariant="monospace">mutex</mtext> <mo>=</mo> <mn>1</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty</mtext> <mo>=</mo> <mn>1</mn> <mo>,</mo> <mtext> </mtext> <mtext mathvariant="monospace">full</mtext> <mo>=</mo> <mn>5</mn> <mo>,</mo> <mtext> </mtext> <mtext mathvariant="monospace">mutex</mtext> <mo>=</mo> <mn>0</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty</mtext> <mo>=</mo> <mn>0</mn> <mo>,</mo> <mtext> </mtext> <mtext mathvariant="monospace">full</mtext> <mo>=</mo> <mn>6</mn> <mo>,</mo> <mtext> </mtext> <mtext mathvariant="monospace">mutex</mtext> <mo>=</mo> <mn>1</mn> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 8 Explanation:</strong><br>  <a href="https://gateoverflow.in/542700" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="46" data-start="0">Which of the following statements are correct?</p> </span>`,
      image: "",
      options: [
        `In the standard reader-preference solution, the first reader executes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(wrt)</mtext> </math>.`,
        `In the standard reader-preference solution, the last reader executes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(wrt)</mtext> </math>.`,
        `Continuous arrival of readers may cause a waiting writer to starve.`,
        `In the dining-philosophers problem with five philosophers, allowing all five philosophers to acquire their left chopsticks first prevents deadlock.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 9 Explanation:</strong><br>  <a href="https://gateoverflow.in/542701" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="49" data-start="0">A shared variable <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> is initially equal to <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math>. </p> <p data-end="133" data-start="51">Two threads execute the following operations exactly once without synchronization:</p> <p data-end="157" data-start="135">Thread <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>1</mn> </msub> </math> </p> <p data-end="170" data-start="159"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> <mo>=</mo> <mi>x</mi> <mo>+</mo> <mn>1</mn> </math> </p> <p data-end="194" data-start="172">Thread <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>2</mn> </msub> </math> </p> <p data-end="207" data-start="196"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> <mo>=</mo> <mi>x</mi> <mo>−</mo> <mn>2</mn> </math> </p> <p data-end="292" data-start="209">Assume that each statement consists of separate read, modify, and write operations.</p> <p data-end="347" data-start="294">Which of the following can be the final value of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math>? </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>9</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>11</mn> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 10 Explanation:</strong><br>  <a href="https://gateoverflow.in/542699" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="43" data-start="0">In the standard reader-preference solution:</p> <ul data-end="147" data-start="45"> <li data-end="94" data-section-id="1xaiiqm" data-start="45"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex</mtext> </math> protects <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">readcount</mtext> </math>.</li> <li data-end="147" data-section-id="vznpx7" data-start="95"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wrt</mtext> </math> controls access to the shared data.</li> </ul> <p data-end="195" data-start="149">Which of the following statements are correct?</p> </span>`,
      image: "",
      options: [
        `The first reader executes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(wrt)</mtext> </math>.`,
        `Every reader individually executes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(wrt)</mtext> </math> before reading.`,
        `The last reader executes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(wrt)</mtext> </math>.`,
        `Updates to <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">readcount</mtext> </math> must be protected by <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex</mtext> </math>.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 11 Explanation:</strong><br>  <a href="https://gateoverflow.in/542688" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="85" data-start="0">In a reader-preference solution, a writer is waiting while readers continue arriving.</p> <p data-end="120" data-start="87">Which of the following may occur?</p> </span>`,
      image: "",
      options: [
        `Reader starvation`,
        `Writer starvation`,
        `Immediate deadlock among all readers`,
        `Two writers enter simultaneously`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 12 Explanation:</strong><br>  <a href="https://gateoverflow.in/542691" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="37" data-start="0">Consider a modified reader algorithm:</p> <p data-end="62" data-start="39"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(mutex);</mtext> </math> </p> <p data-end="87" data-start="64"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">readcount++;</mtext> </math> </p> <p data-end="114" data-start="89"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(mutex);</mtext> </math> </p> <p data-end="146" data-start="116"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">if(readcount == 1)</mtext> </math> </p> <p data-end="169" data-start="148"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(wrt);</mtext> </math> </p> <p data-end="269" data-start="171">Two readers may increment <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">readcount</mtext> </math> before either executes the <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">if</mtext> </math> statement.</p> <p data-end="294" data-start="271">What problem can occur?</p> </span>`,
      image: "",
      options: [
        `Both readers must deadlock.`,
        `No reader may acquire <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wrt</mtext> </math>, allowing a writer and readers to access the shared data simultaneously.`,
        `The writer permanently owns <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex</mtext> </math>.`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">readcount</mtext> </math> can never become greater than <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>.`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 13 Explanation:</strong><br>  <a href="https://gateoverflow.in/542689" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <section data-testid="conversation-turn-10" data-turn="assistant" data-turn-id="request-WEB:c072c26a-a164-48e0-9280-778d9121035d-4" data-turn-id-container="request-WEB:c072c26a-a164-48e0-9280-778d9121035d-4" dir="auto"> <p data-end="90" data-start="0">Which of the following techniques can prevent deadlock in the dining-philosophers problem?</p> </section> </span>`,
      image: "",
      options: [
        `Allow at most four of five philosophers to attempt to acquire chopsticks simultaneously.`,
        `Require some philosophers to acquire the left chopstick first and others to acquire the right chopstick first.`,
        `Allow a philosopher to acquire both required chopsticks atomically.`,
        `Require every philosopher to acquire the left chopstick first and then wait for the right chopstick.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 14 Explanation:</strong><br>  <a href="https://gateoverflow.in/542692" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="10866" data-start="10820">Five philosophers sit around a circular table.</p> <p data-end="10994" data-start="10868">There is one chopstick between each pair of adjacent philosophers, and a philosopher requires both adjacent chopsticks to eat.</p> <p data-end="11066" data-is-last-node="" data-is-only-node="" data-start="10996">What is the maximum number of philosophers who can eat simultaneously?</p> </span>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 15 Explanation:</strong><br>  <a href="https://gateoverflow.in/542693" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="97" data-start="0">Which of the following statements are correct for a correctly synchronized bounded-buffer system?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty</mtext> </math> prevents producers from inserting into a full buffer.`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">full</mtext> </math> prevents consumers from removing from an empty buffer.`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex</mtext> </math> protects shared buffer data and shared buffer indices.`,
        `Different producers may update the same insertion index simultaneously without synchronization.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 16 Explanation:</strong><br>  <a href="https://gateoverflow.in/542156" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="7848" data-start="7791">A bounded buffer has capacity <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> </math> and is initially empty.</p> <p data-end="7870" data-start="7850">During an execution:</p> <ul data-end="7941" data-start="7872"> <li data-end="7907" data-section-id="j12rub" data-start="7872"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> </math> producer insertions complete.</li> <li data-end="7941" data-section-id="fj613t" data-start="7908"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> </math> consumer removals complete.</li> </ul> <p data-end="7980" data-start="7943">Assume no insertion or removal fails.</p> <p data-end="8042" data-start="7982">What is the number of items currently present in the buffer? </p> </span>`,
      image: "",
      options: [],
      answer: "3",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 17 Explanation:</strong><br>  <a href="https://gateoverflow.in/542155" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="62" data-start="0">A producer-consumer system uses a buffer containing <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>N</mi> </math> slots.</p> <p data-end="83" data-start="64">The semaphores are:</p> <ul data-end="219" data-start="85"> <li data-end="129" data-section-id="1cb9ts8" data-start="85"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty</mtext> </math>, representing empty slots</li> <li data-end="174" data-section-id="1adus51" data-start="130"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">full</mtext> </math>, representing filled slots</li> <li data-end="219" data-section-id="79ewf1" data-start="175"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex</mtext> </math>, protecting buffer access</li> </ul> <p data-end="288" data-start="221">Which initialization is correct when the buffer is initially empty?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty = 0</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">full = N</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex = 1</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty = N</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">full = 0</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex = 1</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty = N</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">full = 1</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex = 0</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty = 1</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">full = N</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex = 0</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 18 Explanation:</strong><br>  <a href="https://gateoverflow.in/542152" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="20" data-start="0">A producer executes:</p> <p data-end="45" data-start="22"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(mutex);</mtext> </math> </p> <p data-end="72" data-start="49"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(empty);</mtext> </math> </p> <p data-end="102" data-start="76"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">insert_item();</mtext> </math> </p> <p data-end="130" data-start="106"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(full);</mtext> </math> </p> <p data-end="159" data-start="134"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(mutex);</mtext> </math> </p> <p data-end="228" data-start="163">A consumer must acquire <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex</mtext> </math> before removing an item.</p> <p data-end="276" data-start="230">Which of the following statements are correct?</p> </span>`,
      image: "",
      options: [
        `If the buffer is full, the producer may block on <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">empty</mtext> </math> while holding <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex</mtext> </math>.`,
        `The consumer may be unable to acquire <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">mutex</mtext> </math> to remove an item.`,
        `The system can enter deadlock.`,
        `The ordering guarantees that producers never block.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 19 Explanation:</strong><br>  <a href="https://gateoverflow.in/542154" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="83" data-start="0">Which of the following is the correct order of semaphore operations for a producer?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(mutex)</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(empty)</mtext> </math>, insert item, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(full)</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(mutex)</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(empty)</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(mutex)</mtext> </math>, insert item, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(mutex)</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(full)</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(full)</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(mutex)</mtext> </math>, insert item, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(mutex)</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(empty)</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(empty)</mtext> </math>, insert item, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(mutex)</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(full)</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(mutex)</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 20 Explanation:</strong><br>  <a href="https://gateoverflow.in/542153" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="46" data-start="0">Which of the following statements are correct?</p> </span>`,
      image: "",
      options: [
        `Semaphore <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait()</mtext> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal()</mtext> </math> operations must be atomic.`,
        `A counting semaphore can represent the number of available instances of a resource.`,
        `In a blocking semaphore implementation, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait()</mtext> </math> may block the calling process.`,
        `The <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal()</mtext> </math> operation always blocks the process that executes it.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 21 Explanation:</strong><br>  <a href="https://gateoverflow.in/542151" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="38" data-start="0">A semaphore <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> </math> is initialized to <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>. </p> <p data-end="80" data-start="40">The following operations occur in order:</p> <p data-end="100" data-start="82"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(S)</mtext> </math> </p> <p data-end="120" data-start="102"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(S)</mtext> </math> </p> <p data-end="142" data-start="122"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(S)</mtext> </math> </p> <p data-end="162" data-start="144"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(S)</mtext> </math> </p> <p data-end="184" data-start="164"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(S)</mtext> </math> </p> <p data-end="206" data-start="186"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(S)</mtext> </math> </p> <p data-end="324" data-start="208">Assume the blocking implementation where <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(S)</mtext> </math> decrements <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> </math>, and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(S)</mtext> </math> increments <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> </math>. </p> <p data-end="394" data-start="326">What are the final value of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> </math> and the number of blocked processes?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> <mo>=</mo> <mn>1</mn> </math>, blocked processes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>0</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> <mo>=</mo> <mn>0</mn> </math>, blocked processes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>1</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> <mo>=</mo> <mo>−</mo> <mn>1</mn> </math>, blocked processes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>1</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> <mo>=</mo> <mn>2</mn> </math>, blocked processes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>0</mn> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 22 Explanation:</strong><br>  <a href="https://gateoverflow.in/542150" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="34" data-start="0">Two semaphores are initialized as:</p> <p data-end="43" data-start="36"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> <mo>=</mo> <mn>1</mn> </math> </p> <p data-end="52" data-start="45"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>T</mi> <mo>=</mo> <mn>0</mn> </math> </p> <p data-end="87" data-start="54">Two processes execute repeatedly:</p> <p data-end="102" data-start="89"><strong data-end="102" data-start="89">Process P</strong></p> <p data-end="123" data-start="104"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(S);</mtext> </math> </p> <p data-end="149" data-start="127"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">print("A");</mtext> </math> </p> <p data-end="174" data-start="153"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(T);</mtext> </math> </p> <p data-end="191" data-start="178"><strong data-end="191" data-start="178">Process Q</strong></p> <p data-end="212" data-start="193"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(T);</mtext> </math> </p> <p data-end="238" data-start="216"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">print("B");</mtext> </math> </p> <p data-end="263" data-is-last-node="" data-is-only-node="" data-start="242"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(S);</mtext> </math> </p> <p data-end="4835" data-start="4772">Which of the following can be the first six characters printed? </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">AAABBB</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">ABABAB</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">BABABA</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">AABBAB</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 23 Explanation:</strong><br>  <a href="https://gateoverflow.in/542149" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <section data-testid="conversation-turn-2" data-turn="assistant" data-turn-id="request-WEB:7f62bf49-98bf-43e8-9b83-41f14fde5617-0" data-turn-id-container="request-WEB:7f62bf49-98bf-43e8-9b83-41f14fde5617-0" dir="auto"> <p data-end="47" data-start="0">A counting semaphore <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> </math> is initialized to <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math>. </p> <p data-end="169" data-start="49">Three processes execute <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(S)</mtext> </math> one after another. No process executes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(S)</mtext> </math> during this time.</p> <p data-end="281" data-start="171">Assume that <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(S)</mtext> </math> first decrements <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> </math> and blocks the process if the resulting value is negative.</p> <p data-end="372" data-start="283">What are the value of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> </math> and the number of blocked processes after the three operations?</p> </section> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> <mo>=</mo> <mn>0</mn> </math>, blocked processes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>1</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> <mo>=</mo> <mo>−</mo> <mn>1</mn> </math>, blocked processes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>1</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> <mo>=</mo> <mo>−</mo> <mn>1</mn> </math>, blocked processes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>2</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> <mo>=</mo> <mn>0</mn> </math>, blocked processes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>0</mn> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 24 Explanation:</strong><br>  <a href="https://gateoverflow.in/542147" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="4020" data-start="3987">Two concurrent processes execute:</p> <p data-end="4035" data-start="4022"><strong data-end="4035" data-start="4022">Process A</strong> </p> <p data-end="4042" data-start="4037"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>A</mi> <mn>1</mn> </msub> </math> </p> <p data-end="4049" data-start="4044"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>A</mi> <mn>2</mn> </msub> </math> </p> <p data-end="4056" data-start="4051"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>A</mi> <mn>3</mn> </msub> </math> </p> <p data-end="4063" data-start="4058"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>A</mi> <mn>4</mn> </msub> </math> </p> <p data-end="4078" data-start="4065"><strong data-end="4078" data-start="4065">Process B</strong> </p> <p data-end="4085" data-start="4080"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>B</mi> <mn>1</mn> </msub> </math> </p> <p data-end="4092" data-start="4087"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>B</mi> <mn>2</mn> </msub> </math> </p> <p data-end="4099" data-start="4094"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>B</mi> <mn>3</mn> </msub> </math> </p> <p data-end="4106" data-start="4101"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>B</mi> <mn>4</mn> </msub> </math> </p> <p data-end="4146" data-start="4108">A semaphore <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> </math> is initialized to <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math>. </p> <p data-end="4212" data-start="4148">The requirement is that <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>A</mi> <mn>2</mn> </msub> </math> must complete before <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>B</mi> <mn>4</mn> </msub> </math> begins.</p> <p data-end="4262" data-start="4214">Where should the semaphore operations be placed?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(S)</mtext> </math> after <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>A</mi> <mn>2</mn> </msub> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(S)</mtext> </math> before <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>B</mi> <mn>4</mn> </msub> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(S)</mtext> </math> after <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>A</mi> <mn>2</mn> </msub> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(S)</mtext> </math> before <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>B</mi> <mn>4</mn> </msub> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(S)</mtext> </math> before <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>A</mi> <mn>2</mn> </msub> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(S)</mtext> </math> after <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>B</mi> <mn>4</mn> </msub> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">signal(S)</mtext> </math> before <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>A</mi> <mn>2</mn> </msub> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wait(S)</mtext> </math> after <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>B</mi> <mn>4</mn> </msub> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 25 Explanation:</strong><br>  <a href="https://gateoverflow.in/542148" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="2215" data-start="2102">The atomic operation <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">compare_and_swap(x, old, new)</mtext> </math> changes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> to <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">new</mtext> </math> only if its current value equals <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">old</mtext> </math>. </p> <p data-end="2227" data-start="2217">Initially,</p> <p data-end="2234" data-start="2229"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> <mo>=</mo> <mn>5</mn> </math> </p> <p data-end="2276" data-start="2236">The following operations occur in order:</p> <p data-end="2312" data-start="2278"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>2</mn> </msub> <mo>:</mo> </math> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">compare_and_swap(x, 5, 7)</mtext> </math> </p> <p data-end="2348" data-start="2314"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>1</mn> </msub> <mo>:</mo> </math> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">compare_and_swap(x, 5, 9)</mtext> </math></p> <p data-end="2384" data-start="2350">Which of the following is correct?</p> </span>`,
      image: "",
      options: [
        `Both operations succeed, and the final value of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>9</mn> </math>`,
        `Only <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>1</mn> </msub> </math> succeeds, and the final value of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>9</mn> </math>`,
        `Only <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>2</mn> </msub> </math> succeeds, and the final value of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>7</mn> </math>`,
        `Both operations fail, and the final value of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 26 Explanation:</strong><br>  <a href="https://gateoverflow.in/542144" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="970" data-start="930">Consider the following atomic operation:</p> <p data-end="1037" data-start="972"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">test_and_set(x)</mtext> </math> sets <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> to <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math> and returns its previous value.</p> <p data-end="1049" data-start="1039">Initially,</p> <p data-end="1056" data-start="1051"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> <mo>=</mo> <mn>0</mn> </math> </p> <p data-end="1154" data-start="1058">Process <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>1</mn> </msub> </math> executes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">test_and_set(x)</mtext> </math>, followed by process <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>2</mn> </msub> </math> executing <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">test_and_set(x)</mtext> </math>. </p> <p data-end="1190" data-start="1156"><br/>Which of the following is correct?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>1</mn> </msub> </math> returns <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>2</mn> </msub> </math> returns <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>, and the final value of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>1</mn> </msub> </math> returns <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mn>2</mn> </msub> </math> returns <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math>, and the final value of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math>`,
        `Both processes return <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math>, and the final value of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>`,
        `Both processes return <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>, and the final value of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 27 Explanation:</strong><br>  <a href="https://gateoverflow.in/542140" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="2775" data-start="2723">Two processors <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>C</mi> <mi>P</mi> <msub> <mi>U</mi> <mn>0</mn> </msub> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>C</mi> <mi>P</mi> <msub> <mi>U</mi> <mn>1</mn> </msub> </math> share a variable.</p> <p data-end="2888" data-start="2777"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>C</mi> <mi>P</mi> <msub> <mi>U</mi> <mn>0</mn> </msub> </math> disables its local interrupts and enters a critical section without acquiring any shared hardware lock.</p> <p data-end="2949" data-start="2890">At the same time, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>C</mi> <mi>P</mi> <msub> <mi>U</mi> <mn>1</mn> </msub> </math> enters the same critical section.</p> <p data-end="2998" data-start="2951">Which critical-section requirement is violated?</p> </span>`,
      image: "",
      options: [
        `Mutual exclusion`,
        `Progress`,
        `Bounded waiting`,
        `No requirement is violated`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 28 Explanation:</strong><br>  <a href="https://gateoverflow.in/542145" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="1580" data-start="1552">Consider the following lock:</p> <p data-end="1604" data-start="1582">Initially, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">lock = 0.</mtext> </math> </p> <p data-end="1636" data-start="1606"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">while(test_and_set(\&amp;lock));</mtext> </math> </p> <p data-end="1656" data-start="1638"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Critical Section</mtext> </math> </p> <p data-end="1669" data-start="1658"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">lock = 0;</mtext> </math> </p> <p data-end="1717" data-start="1671">Which of the following statements are correct?</p> </span>`,
      image: "",
      options: [
        `At most one process can execute inside the critical section at a time.`,
        `A waiting process repeatedly consumes CPU time while checking the lock.`,
        `The solution guarantees bounded waiting for every process.`,
        `A process may starve if other processes repeatedly acquire the lock before it.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 29 Explanation:</strong><br>  <a href="https://gateoverflow.in/542143" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="388" data-start="315">Which of the following statements about disabling interrupts are correct?</p> </span>`,
      image: "",
      options: [
        `On a uniprocessor system, disabling interrupts can prevent the running process from being preempted while executing its critical section.`,
        `Disabling interrupts on one processor is sufficient to prevent all other processors from accessing shared memory in a multiprocessor system.`,
        `Allowing ordinary user processes to disable interrupts can be dangerous.`,
        `Keeping interrupts disabled for a long duration may affect timer and I/O services.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 30 Explanation:</strong><br>  <a href="https://gateoverflow.in/542139" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },



  ]
});

registerTest({
  series: "pw-cs-gate-2026",
  name: "Swt-OS-Part5",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="2057" data-start="1993">Consider the following alternative entry code for process <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mi>i</mi> </msub> </math>: </p> <p data-end="2074" data-start="2059"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wants[i] = 1</mtext> </math>; </p> <p data-end="2097" data-start="2076"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">while(wants[1 - i]);</mtext> </math> </p> <p data-end="2137" data-start="2099">The shared array <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wants</mtext> </math> is initially:</p> <p data-end="2160" data-start="2139"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">wants[0] = wants[1] = 0</mtext> </math> </p> <p data-end="2241" data-start="2162"><br/>What can happen if both processes request entry at approximately the same time?</p> </span>`,
      image: "",
      options: [
        `Both processes enter the critical section simultaneously.`,
        `Both processes spin forever, violating progress.`,
        `The process with the smaller process number always enters first.`,
        `Both processes enter one after another with bounded waiting.`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 31 Explanation:</strong><br>  <a href="https://gateoverflow.in/541987" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="4620" data-start="4545">Consider the following variation of Peterson’s algorithm for process <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>P</mi> <mi>i</mi> </msub> </math>: </p> <p data-end="4639" data-start="4622"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">flag[i] = TRUE;</mtext> </math> </p> <p data-end="4652" data-start="4641"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">turn = i;</mtext> </math> </p> <p data-end="4685" data-start="4654"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">while(flag[j] \&amp;\&amp; turn == j); </mtext> </math> </p> <p data-end="4705" data-start="4687"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Critical Section</mtext> </math> </p> <p data-end="4725" data-start="4707"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">flag[i] = FALSE;</mtext> </math> </p> <p data-end="4778" data-start="4727">Which critical-section requirement can be violated?</p> </span>`,
      image: "",
      options: [
        `Mutual exclusion`,
        `Progress only`,
        `Bounded waiting only`,
        `None of the requirements`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 32 Explanation:</strong><br>  <a href="https://gateoverflow.in/541983" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="5895" data-start="5849">Which of the following statements are correct?</p> </span>`,
      image: "",
      options: [
        `Both strict alternation and Peterson’s solution use busy waiting.`,
        `Both strict alternation and Peterson’s solution satisfy the progress requirement.`,
        `Peterson’s solution uses intent flags to indicate whether a process wants to enter its critical section.`,
        `Under strict alternation, a process can be forced to wait even when the other process is executing only its remainder section.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 33 Explanation:</strong><br>  <a href="https://gateoverflow.in/541979" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="687" data-start="615">Which of the following statements about Peterson’s solution are correct?</p> </span>`,
      image: "",
      options: [
        `Peterson’s solution uses atomic load and store operations.`,
        `Peterson’s solution directly supports any number of processes without modification.`,
        `Peterson’s solution uses busy waiting.`,
        `For two processes, it satisfies mutual exclusion, progress, and bounded waiting under the assumed memory model.`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 34 Explanation:</strong><br>  <a href="https://gateoverflow.in/541976" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="3413" data-start="3317">Two threads execute Peterson’s entry code. The following statements execute in this exact order:</p> <p data-end="3438" data-start="3415"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>0</mn> </msub> <mo>:</mo> </math> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">flag[0] = true</mtext> </math> </p> <p data-end="3457" data-start="3440"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>0</mn> </msub> <mo>:</mo> </math> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">turn = 1</mtext> </math> </p> <p data-end="3482" data-start="3459"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>1</mn> </msub> <mo>:</mo> </math> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">flag[1] = true</mtext> </math> </p> <p data-end="3501" data-start="3484"><math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>1</mn> </msub> <mo>:</mo> </math> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">turn = 0</mtext> </math> </p> <p data-end="3554" data-start="3503">Both threads now evaluate their <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">while</mtext> </math> conditions:</p> <p data-end="3566" data-start="3556">For <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>0</mn> </msub> </math>: </p> <p data-end="3599" data-start="3568"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">while(flag[1] \&amp;\&amp; turn == 1); </mtext> </math> </p> <p data-end="3611" data-start="3601">For <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>1</mn> </msub> </math>: </p> <p data-end="3644" data-start="3613"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">while(flag[0] \&amp;\&amp; turn == 0); </mtext> </math> </p> <p data-end="3693" data-start="3646"><br/>Which thread enters the critical section first?</p> </span>`,
      image: "",
      options: [
        `Only <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>0</mn> </msub> </math>`,
        `Only <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>1</mn> </msub> </math>`,
        `Both <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>0</mn> </msub> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>T</mi> <mn>1</mn> </msub> </math>`,
        `Neither thread`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 35 Explanation:</strong><br>  <a href="https://gateoverflow.in/541985" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include &lt;stdio.h&gt;
struct Point {
    int x, y;
};
int main() {
    struct Point p1 = {10, 20};
    struct Point *ptr = &amp;p1;
    ptr-&gt;x += 5;
    (*ptr).y -= 10;
    printf("%d %d\n", p1.x, p1.y);
    return 0;
}</pre> <p>What is the output?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1510</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1010</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>530</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1520</mn> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 36 Explanation:</strong><br>  <a href="https://gateoverflow.in/478603" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include &lt;stdio.h&gt;
void fun() {
    static int count = 0;
    count++;
    printf("%d ", count);
}
int main() {
    for (int i = 0; i &lt; 3; i++)
        fun();
    return 0;
}
</pre> <p>What is the output of the above C program?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>111</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>012</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>123</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>321</mn> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 37 Explanation:</strong><br>  <a href="https://gateoverflow.in/478601" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider the following psuedocode fragment, where <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>y</mi> </math> is an integer that has been initialized.</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">int i=1
int j=1
while (i&lt;10):
    j=j*i
    i=i+1
    if (i==y):
        break
    end if
end while</pre> <p>Consider the following statements:<br/>i. <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>i</mi> <mo>==</mo> <mn>10</mn> <mo stretchy="false">)</mo> </math> or <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>i</mi> <mo>==</mo> <mi>y</mi> <mo stretchy="false">)</mo> </math><br/>ii. If <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>y</mi> <mo>&gt;</mo> <mn>10</mn> </math>, then <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>i</mi> <mo>==</mo> <mn>10</mn> </math><br/>iii. If <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>j</mi> <mo>=</mo> <mn>6</mn> </math>, then <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>y</mi> <mo>==</mo> <mn>4</mn> </math> </p> <p>Which of the above statements is/are TRUE at the end of the while loop? Choose from the following options.</p> </span>`,
      image: "",
      options: [
        `i only`,
        `iii only`,
        `ii and iii only`,
        `i, ii, and iii`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 38 Explanation:</strong><br>  <a href="https://gateoverflow.in/478599" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Given the pseudocode below for the function remains(), which of the following statements is true about the output, if we pass it a positive integer <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>n</mi> <mo>&gt;</mo> <mn>2</mn> </math> ?</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">int remains(int n)
{
        int x = n;
        for (i=(n-1);i&gt;1;i-) {
            x = x % i ;
    }
        return x i
}</pre> </span>`,
      image: "",
      options: [
        `Output is always <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math>`,
        `Output is always <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>`,
        `Output is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math> only if <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>n</mi> </math> is NOT a prime number`,
        `Output is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math> only if <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>n</mi> </math> is a prime number`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 39 Explanation:</strong><br>  <a href="https://gateoverflow.in/478597" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Which of the following expressions is NOT equivalent to <math xmlns="http://www.w3.org/1998/Math/MathML"> <msup> <mrow data-mjx-texclass="ORD"></mrow> <mo>∗</mo> </msup> <mo stretchy="false">(</mo> <mi>arr</mi> <mo>+</mo> <mn>3</mn> <mo stretchy="false">)</mo> </math> where arr is an integer array?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>arr</mi> <mo stretchy="false">[</mo> <mn>3</mn> <mo stretchy="false">]</mo> </math>`,
        `*(&arr <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">[</mo> <mn>0</mn> <mo stretchy="false">]</mo> <mo>+</mo> <mn>3</mn> <mo stretchy="false">)</mo> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>∗</mo> <mi>a</mi> <mi>r</mi> <mi>r</mi> <mo>+</mo> <mn>3</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>∗</mo> <mo stretchy="false">(</mo> <mn>3</mn> <mo>+</mo> <mi>a</mi> <mi>r</mi> <mi>r</mi> <mo stretchy="false">)</mo> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 40 Explanation:</strong><br>  <a href="https://gateoverflow.in/478595" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">int arr[ ]={1, 2, 3, 4}
int count;
incr( ) {return ++count;}
main( )
{
arr[count++]=incr( );
printf("arr[count]=%d\n", arr[count]);
}

</pre> <p>The value printed by the above program is :</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>3</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 41 Explanation:</strong><br>  <a href="https://gateoverflow.in/477408" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p><b id="docs-internal-guid-6511b545-7fff-de04-5b24-5c935f9b04b3">Consider the following C code:</b></p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">int arr[] = {10, 20, 30, 40, 50};
int *p = arr + 2;
printf("%d", *(p - 1));
</pre> <p>What is the output of this code? </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>20</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>30</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>40</mn> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 42 Explanation:</strong><br>  <a href="https://gateoverflow.in/477400" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider the following structure on a <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>32</mn> </math> -bit machine ( <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> -byte alignment for int, char alignment is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math> byte):</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">struct test {
    char a;
    int b;
    char c;
};
</pre> <p>What is the size (in bytes) of this structure? </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>6</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>9</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>12</mn> </math>`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 43 Explanation:</strong><br>  <a href="https://gateoverflow.in/477402" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following program: (Assume that the appropriate preprocessor directives are included and there is not syntax error)</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">main( )
    { char S[]="ABCDEFGH";
        printf("%C", *(&amp;S[3]));
        printf("%s", S+4);
        printf("%u", S);
    /*Base address of S is 1000 */
    }

</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>A</mi> <mi>B</mi> <mi>C</mi> <mi>D</mi> <mi>E</mi> <mi>F</mi> <mi>G</mi> <mi>H</mi> <mn>1000</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>C</mi> <mi>D</mi> <mi>E</mi> <mi>F</mi> <mi>G</mi> <mi>H</mi> <mn>1000</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>D</mi> <mi>D</mi> <mi>E</mi> <mi>F</mi> <mi>G</mi> <mi>H</mi> <mi>H</mi> <mn>1000</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>D</mi> <mi>E</mi> <mi>F</mi> <mi>G</mi> <mi>H</mi> <mn>1000</mn> </math>`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 44 Explanation:</strong><br>  <a href="https://gateoverflow.in/477406" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the value returned by the function <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>f</mi> </math> given below when <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>n</mi> <mo>=</mo> <mn>100</mn> </math> ?</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">let f(int n)
{ if (n==0) then return n;
else
return n+f(n-2);
}

</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2550</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2556</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5220</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5520</mn> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 45 Explanation:</strong><br>  <a href="https://gateoverflow.in/477404" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>A function <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> <mo stretchy="false">(</mo> <mi>A</mi> <mo>,</mo> <mi>B</mi> <mo>,</mo> <mi>C</mi> <mo stretchy="false">)</mo> </math> defined by three Boolean variables <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>A</mi> <mo>,</mo> <mi>B</mi> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>C</mi> </math> when expressed as sum of products is given by</p> <p><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> <mo>=</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>A</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>⋅</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>B</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>⋅</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>A</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>⋅</mo> <mi>B</mi> <mo>⋅</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mi>A</mi> <mo>⋅</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>B</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>⋅</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> </math> </p> <p>where, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mrow data-mjx-texclass="ORD"> <mover> <mi>A</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>,</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>B</mi> <mo stretchy="false">¯</mo> </mover> </mrow> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> </math> are complements of the respective variable. The product of sums (POS) form of the function <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> </math> is </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> <mo>=</mo> <mo stretchy="false">(</mo> <mi>A</mi> <mo>+</mo> <mi>B</mi> <mo>+</mo> <mi>C</mi> <mo stretchy="false">)</mo> <mo>⋅</mo> <mo stretchy="false">(</mo> <mi>A</mi> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>B</mi> <mo stretchy="false">~</mo> </mover> </mrow> <mo>+</mo> <mi>C</mi> <mo stretchy="false">)</mo> <mo>⋅</mo> <mo stretchy="false">(</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>A</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mi>B</mi> <mo>+</mo> <mi>C</mi> <mo stretchy="false">)</mo> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> <mo>=</mo> <mo stretchy="false">(</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>A</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>B</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo stretchy="false">)</mo> <mo>⋅</mo> <mo stretchy="false">(</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>A</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mi>B</mi> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo stretchy="false">)</mo> <mo>⋅</mo> <mo stretchy="false">(</mo> <mi>A</mi> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>B</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo stretchy="false">)</mo> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> <mo>=</mo> <mo stretchy="false">(</mo> <mi>A</mi> <mo>+</mo> <mi>B</mi> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo stretchy="false">)</mo> <mo>⋅</mo> <mo stretchy="false">(</mo> <mi>A</mi> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>B</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo stretchy="false">)</mo> <mo>⋅</mo> <mo stretchy="false">(</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>A</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mi>B</mi> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo stretchy="false">)</mo> <mo>⋅</mo> <mo stretchy="false">(</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>A</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>B</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mi>C</mi> <mo stretchy="false">)</mo> <mo>⋅</mo> <mo stretchy="false">(</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>A</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>B</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo stretchy="false">)</mo> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> <mo>=</mo> <mo stretchy="false">(</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>A</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>B</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mi>C</mi> <mo stretchy="false">)</mo> <mo>⋅</mo> <mo stretchy="false">(</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>A</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mi>B</mi> <mo>+</mo> <mi>C</mi> <mo stretchy="false">)</mo> <mo>⋅</mo> <mo stretchy="false">(</mo> <mi>A</mi> <mo>+</mo> <mi>B</mi> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>C</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo stretchy="false">)</mo> <mo>⋅</mo> <mo stretchy="false">(</mo> <mi>A</mi> <mo>+</mo> <mi>B</mi> <mo>+</mo> <mi>C</mi> <mo stretchy="false">)</mo> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 46 Explanation:</strong><br>  <a href="https://gateoverflow.in/474349" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Select the Boolean function(s) equivalent to <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> <mo>+</mo> <mi>y</mi> <mi>z</mi> </math>, where <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> <mo>,</mo> <mi>y</mi> </math>, and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>z</mi> </math> are Boolean variables, and + denotes logical OR operation.</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> <mo>+</mo> <mi>z</mi> <mo>+</mo> <mi>x</mi> <mi>y</mi> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>x</mi> <mo>+</mo> <mi>y</mi> <mo stretchy="false">)</mo> <mo stretchy="false">(</mo> <mi>x</mi> <mo>+</mo> <mi>z</mi> <mo stretchy="false">)</mo> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> <mo>+</mo> <mi>x</mi> <mi>y</mi> <mo>+</mo> <mi>y</mi> <mi>z</mi> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> <mo>+</mo> <mi>x</mi> <mi>z</mi> <mo>+</mo> <mi>x</mi> <mi>y</mi> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 47 Explanation:</strong><br>  <a href="https://gateoverflow.in/474347" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>In the circuit shown, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>W</mi> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>Y</mi> </math> are MSBs of the control inputs. The output <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> </math> is given by</p> <p><img alt="" src="./images_godpp/dpp_img_b64_15.png"/></p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> <mo>=</mo> <mi>W</mi> <mrow data-mjx-texclass="ORD"> <mover> <mi>X</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>W</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mi>X</mi> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>Y</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mrow data-mjx-texclass="ORD"> <mover> <mi>Z</mi> <mo stretchy="false">¯</mo> </mover> </mrow> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> <mo>=</mo> <mi>W</mi> <mrow data-mjx-texclass="ORD"> <mover> <mi>X</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>W</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mi>X</mi> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>Y</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mi>Z</mi> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> <mo>=</mo> <mi>W</mi> <mrow data-mjx-texclass="ORD"> <mover> <mi>X</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mrow data-mjx-texclass="ORD"> <mover> <mi>Y</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>W</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mi>X</mi> <mrow data-mjx-texclass="ORD"> <mover> <mi>Y</mi> <mo stretchy="false">¯</mo> </mover> </mrow> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> <mo>=</mo> <mo stretchy="false">(</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>W</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo>+</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>X</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mo stretchy="false">)</mo> <mrow data-mjx-texclass="ORD"> <mover> <mi>Y</mi> <mo stretchy="false">¯</mo> </mover> </mrow> <mrow data-mjx-texclass="ORD"> <mover> <mi>Z</mi> <mo stretchy="false">¯</mo> </mover> </mrow> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 48 Explanation:</strong><br>  <a href="https://gateoverflow.in/474345" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>The circuit shown consists of j-K flip-flops, each with an active low asynchronous reset ( <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mrow data-mjx-texclass="ORD"> <mover> <mi>R</mi> <mo stretchy="false">^</mo> </mover> </mrow> <mi>i</mi> </msub> </math> input). The counter corresponding to this circuit is</p> <p><img alt="" height="124" src="./images_godpp/dpp_img_b64_55.png" width="407"/></p> </span>`,
      image: "",
      options: [
        `a modulo- <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> </math> binary up counter`,
        `a modulo -<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>6</mn> </math> binary down counter`,
        `a modulo- <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> </math> binary down counter`,
        `a modulo- <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>6</mn> </math> binary up counter`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 49 Explanation:</strong><br>  <a href="https://gateoverflow.in/474343" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>A 4-bit shift register circuit configured for right-shift operation, i.e, <math xmlns="http://www.w3.org/1998/Math/MathML"> <msub> <mi>D</mi> <mrow data-mjx-texclass="ORD"> <mtext>in </mtext> </mrow> </msub> <mo stretchy="false">→</mo> <mi>A</mi> <mo>,</mo> <mi>A</mi> <mo stretchy="false">→</mo> <mi>B</mi> <mo>,</mo> <mi>B</mi> <mo stretchy="false">→</mo> <mi>C</mi> <mo>,</mo> <mi>C</mi> <mo stretchy="false">→</mo> <mi>D</mi> </math>, as shown. If the present state of the shift register is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mrow data-mjx-texclass="ORD"> <mi data-mjx-auto-op="false">ABCD</mi> </mrow> <mo>=</mo> <mn>1101</mn> </math>, the number of clock cycles required to reach the state <math xmlns="http://www.w3.org/1998/Math/MathML"> <mrow data-mjx-texclass="ORD"> <mi data-mjx-auto-op="false">ABCD</mi> </mrow> <mo>=</mo> <mn>1111</mn> </math> is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mstyle scriptlevel="0"> <mspace width="2em"></mspace> </mstyle> </math> ,<br/><img alt="" src="./images_godpp/dpp_img_b64_33.png"/></p> </span>`,
      image: "",
      options: [],
      answer: "10",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 50 Explanation:</strong><br>  <a href="https://gateoverflow.in/474340" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include &lt;stdio.h&gt;
int main() {
    int val[] = {5, 10, 15};
    int *ptr = val;
    *ptr++ = 20;
    printf("%d %d %d\n", val[0], ptr[2], val[2]);
    return 0;
}

</pre> </span>`,
      image: "",
      options: [
        `5 10 15`,
        `20 15 15`,
        `20 10 15`,
        `None of the above`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 51 Explanation:</strong><br>  <a href="https://gateoverflow.in/474336" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the code given below?</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include&lt;stdio.h&gt;
int main()
{
    char name[] = "satellites";
    int len;
    int size;
    len = strlen(name);
    size = sizeof(name);
    printf("%d", len * size);
    return 0;
}
</pre> <p> </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>100</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>110</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>40</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>44</mn> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 52 Explanation:</strong><br>  <a href="https://gateoverflow.in/474334" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>Consider the following recursive C function.</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">unsigned int f(unsigned int n)
{
    if (n &lt; 10) printf("%d",n);
    else {
        printf("%d", n%10);
        f(n/10);
        printf("%d", n%10);
    }
}

</pre> <p>What does the call <math xmlns="http://www.w3.org/1998/Math/MathML"> <mrow data-mjx-texclass="ORD"> <mo>£</mo> </mrow> <mo stretchy="false">(</mo> <mn>351274</mn> <mo stretchy="false">)</mo> </math> print?</p> </span>`,
      image: "",
      options: [],
      answer: "47215351274",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 53 Explanation:</strong><br>  <a href="https://gateoverflow.in/474332" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What string does the following program print?</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
void strFunc2 (char A[], int n)
{
    char t;
    if (n &lt;= 1) return;
            t = A[0]; A[0] = A[n-1]; A[n-1] = t;
            strFunc2(&amp;A[1],n-2);
}
int main ()
{
    char A[10] = "PDS 2005";
    strFunc2(A,strlen(A));
    printf("%s", A);
}
</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5002</mn> </math> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>S</mi> <mi>D</mi> <mi>P</mi> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> <mi>D</mi> <mi>S</mi> </math> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>200</mn> <mi>P</mi> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>P</mi> <mi>D</mi> <mi>S</mi> </math> <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2005</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>SDP</mi> <mn>2005</mn> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 54 Explanation:</strong><br>  <a href="https://gateoverflow.in/474330" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Let the function g be defined as follows:</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">int g ( int n )
{
if (n &lt; 2) return n;
return g(n/2);
}

</pre> <p>What is the value returned by the call <math xmlns="http://www.w3.org/1998/Math/MathML"> <mrow data-mjx-texclass="ORD"> <mi mathvariant="normal">g</mi> </mrow> <mo stretchy="false">(</mo> <mn>142857</mn> <mo stretchy="false">)</mo> </math> ?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>0</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>71428</mn> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 55 Explanation:</strong><br>  <a href="https://gateoverflow.in/474328" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include &lt;stdio.h&gt;
int x = 180;
void func() {
    static int x = 10;
    x += 5;
    printf("%d ", x);
}
int main() {
    int x = 1;
    printf("%d ", x);
    func();
    {
        int x = 50;
        x++;
        printf("%d ", x);
        func();
    }
    printf("%d", x);
    return 0;
}</pre> <p>What will be the output of the above program?<br/>A 1 15 51 20 1<br/>B 1 10 51 15 1<br/>C 1 15 51 15 100<br/>D 1 15 51 20 100</p> </span>`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 56 Explanation:</strong><br>  <a href="https://gateoverflow.in/473730" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider the following recursive function definition:</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">function FOO(n)
    if (n=0) then
        return 0
    else if ( n = 1) then
        return 1
    else if ( n = 2) then
        return 3
    else
        return n + FOO(n-1) + FOO(n-2)
    end if
end function</pre> <p>What is the value returned by <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>F</mi> <mi>O</mi> <mi>O</mi> <mo stretchy="false">(</mo> <mn>5</mn> <mo stretchy="false">)</mo> </math> ?<br/>A. <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math><br/>B. <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>14</mn> </math><br/>C. <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>26</mn> </math><br/>D. <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>35</mn> </math> </p> </span>`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 57 Explanation:</strong><br>  <a href="https://gateoverflow.in/473728" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider the following C program executed on a little-endian system:</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include &lt;stdio.h&gt;
int main() {
    int a = 320;
    char *ptr;
    ptr = (char *)&amp;a;
    printf("%d ", "ptr);
    return 0;
}
</pre> <p>What will be the output of the program?<br/>A. <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math><br/>B. <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>320</mn> </math><br/>C. <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>64</mn> </math><br/>D. Compilation error </p> </span>`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 58 Explanation:</strong><br>  <a href="https://gateoverflow.in/473726" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider the following C program:</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include &lt;stdio.h&gt;
#include &lt;conio.h&gt;
void main()
{
    int *ptr, i;
    i = 12;
    *ptr = i * i;
    ++i;
    printf("%d %d", i, *ptr);
}</pre> <p>What will be the output of the above program?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>12</mn> <mo>,</mo> <mn>144</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>13</mn> <mo>,</mo> <mn>144</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>13</mn> <mo>,</mo> <mn>0</mn> </math>`,
        `None of these`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 59 Explanation:</strong><br>  <a href="https://gateoverflow.in/473724" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Study the following program:</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include&lt;stdio.h&gt;
#include&lt;conio.h&gt;
void main()
{
int i, n=2;
    for(i=0; i&lt;2 ; i++ )
    {
        if(!(i&lt;=n) &amp;&amp; (++n==i))
            n=n+2;
        else
            n=n-2;
    }
}</pre> <p>What will be the output of this program?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>3</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math>`,
        `None of these`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 60 Explanation:</strong><br>  <a href="https://gateoverflow.in/473722" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What will be the output the following:</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include&lt;stdio.h&gt;
#include&lt;conio.h&gt;
void main()
{
    int *i, *j, a=12, b=2, c ;
    c= (a=a+b, b=a/b, a=a*b, b=a-b);
    i= &amp;c;
    printf ("%d",--(*i));
}
</pre> <p> </p> </span>`,
      image: "",
      options: [
        `93`,
        `91`,
        `92`,
        `90`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 61 Explanation:</strong><br>  <a href="https://gateoverflow.in/473036" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider the following C code:</p> <p>What will be the final values of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>y</mi> </math> after the if statement is executed?</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">int x = 4, y = 0;
if ((x = 0) &amp;&amp; (y = 10)) {
    // some code
}
</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>x</mi> </math> is 4 and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>y</mi> </math> is 0`,
        `x is 0 and y is 10`,
        `x is 0 and y is 0`,
        `Syntax Error`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 62 Explanation:</strong><br>  <a href="https://gateoverflow.in/473034" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider the following C program:</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include &lt;stdio.h&gt;
void main()
{
int a, b, c;
a = 2;
b = 2 * (a++);
c = 2 * (++a);
printf("b = %d \n c = %d", b, c);
}
</pre> <p> </p> <p> </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>b</mi> <mo>=</mo> <mn>4</mn> <mo>,</mo> <mi>c</mi> <mo>=</mo> <mn>6</mn> </math>`,
        `b <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo>=</mo> <mn>3</mn> <mo>,</mo> <mi>c</mi> <mo>=</mo> <mn>8</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>b</mi> <mo>=</mo> <mn>3</mn> <mo>,</mo> <mi>c</mi> <mo>=</mo> <mn>6</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>b</mi> <mo>=</mo> <mn>4</mn> <mo>,</mo> <mi>c</mi> <mo>=</mo> <mn>8</mn> </math>`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 63 Explanation:</strong><br>  <a href="https://gateoverflow.in/473032" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What will be the output of following program?</p> <pre class="prettyprint linenums lang-c_cpp" data-pbcklang="c_cpp" data-pbcktabsize="4">#include&lt;stdio.h&gt;
#include&lt;conio.h&gt;
void main()
{
    int i, j, k;

    j=5;

    i= 2*j/2;

    k=2*(j/2);

    printf("i=%d \n k=%d", i, k);
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>i</mi> <mo>=</mo> <mn>5</mn> <mo>,</mo> <mi>k</mi> <mo>=</mo> <mn>5</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>i</mi> <mo>=</mo> <mn>5</mn> <mo>,</mo> <mi>k</mi> <mo>=</mo> <mn>4</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>i</mi> <mo>=</mo> <mn>4</mn> <mo>,</mo> <mi>k</mi> <mo>=</mo> <mn>4</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>i</mi> <mo>=</mo> <mn>4</mn> <mo>,</mo> <mi>k</mi> <mo>=</mo> <mn>5</mn> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 64 Explanation:</strong><br>  <a href="https://gateoverflow.in/473030" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Which of the following operators has the lowest precedence in C?</p> </span>`,
      image: "",
      options: [
        `++ (post-increment)`,
        `% (modulus)`,
        `II (logical OR)`,
        `() (parentheses)`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 65 Explanation:</strong><br>  <a href="https://gateoverflow.in/473028" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void fun(int n) {     if (n == 0)         return;      fun(n - 1);     printf("%d ", n); }  int main() {     fun(4);     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void fun(int n) {
    if (n == 0)
        return;

    fun(n - 1);
    printf("%d ", n);
}

int main() {
    fun(4);
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 3\ 2\ 1</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1\ 2\ 3\ 4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0\ 1\ 2\ 3\ 4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 3\ 2\ 1\ 0</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 66 Explanation:</strong><br>  <a href="https://gateoverflow.in/535182" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int sum(int n) {     if (n == 1)         return 1;      return n + sum(n - 1); }  int main() {     printf("%d", sum(5));     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int sum(int n) {
    if (n == 1)
        return 1;

    return n + sum(n - 1);
}

int main() {
    printf("%d", sum(5));
    return 0;
}
</pre> </span>`,
      image: "",
      options: [],
      answer: "15",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 67 Explanation:</strong><br>  <a href="https://gateoverflow.in/535184" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int fact(int n) {     if (n == 0)         return 1;      return n * fact(n - 1); }  int main() {     printf("%d", fact(4));     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int fact(int n) {
    if (n == 0)
        return 1;

    return n * fact(n - 1);
}

int main() {
    printf("%d", fact(4));
    return 0;
}
</pre> </span>`,
      image: "",
      options: [],
      answer: "24",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 68 Explanation:</strong><br>  <a href="https://gateoverflow.in/535187" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void fun(int n) {     if (n == 0)         return;      printf("%d ", n);     fun(n - 1); }  int main() {     fun(4);     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void fun(int n) {
    if (n == 0)
        return;

    printf("%d ", n);
    fun(n - 1);
}

int main() {
    fun(4);
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1\ 2\ 3\ 4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 3\ 2\ 1</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 3\ 2\ 1\ 0</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0\ 1\ 2\ 3\ 4</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 69 Explanation:</strong><br>  <a href="https://gateoverflow.in/535180" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What will happen when the following code is compiled?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int x = 5;  int main() {     extern int x;     int x = 10;      printf("%d", x);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int x = 5;

int main() {
    extern int x;
    int x = 10;

    printf("%d", x);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10</mtext> </math>`,
        `Compilation error`,
        `Linker error`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 70 Explanation:</strong><br>  <a href="https://gateoverflow.in/535114" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-" data-linenums="true" data-pbcklang="" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int a = 1;  void fun() {     static int a = 2;     a++;     printf("%d ", a); }  int main() {     auto int b = 5;      fun();      {         extern int a;         printf("%d ", a);     }      fun();      printf("%d", b);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int a = 1;

void fun() {
    static int a = 2;
    a++;
    printf("%d ", a);
}

int main() {
    auto int b = 5;

    fun();

    {
        extern int a;
        printf("%d ", a);
    }

    fun();

    printf("%d", b);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3\ 1\ 4\ 5</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3\ 2\ 4\ 5</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2\ 1\ 3\ 5</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 71 Explanation:</strong><br>  <a href="https://gateoverflow.in/535121" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Which of the following statements is correct in C?</p> </span>`,
      image: "",
      options: [
        `An automatic local variable has block scope and lifetime throughout the program execution`,
        `A static local variable has block scope and lifetime throughout the program execution`,
        `A static global variable has external linkage`,
        `A register variable must always be stored in a CPU register`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 72 Explanation:</strong><br>  <a href="https://gateoverflow.in/535111" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void f() {     static int x = 0;     x = x + 2;     printf("%d ", x); }  void g() {     static int x = 5;     x = x + 3;     printf("%d ", x); }  int main() {     f();     g();     f();     g();      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void f() {
    static int x = 0;
    x = x + 2;
    printf("%d ", x);
}

void g() {
    static int x = 5;
    x = x + 3;
    printf("%d ", x);
}

int main() {
    f();
    g();
    f();
    g();

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2\ 8\ 4\ 11</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2\ 5\ 4\ 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2\ 8\ 2\ 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0\ 5\ 2\ 8</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 73 Explanation:</strong><br>  <a href="https://gateoverflow.in/535119" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int fun(int n) {     static int count = 0;      if (n == 0)         return count;      count = count + n;     return fun(n - 1); }  int main() {     printf("%d", fun(3));     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int fun(int n) {
    static int count = 0;

    if (n == 0)
        return count;

    count = count + n;
    return fun(n - 1);
}

int main() {
    printf("%d", fun(3));
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 74 Explanation:</strong><br>  <a href="https://gateoverflow.in/535190" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Which of the following correctly explains the use of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">static</mtext> </math> in C?</p> </span>`,
      image: "",
      options: [
        `A static local variable is created again every time the function is called`,
        `A static global variable can be directly accessed from any other file`,
        `A static function can be called directly from any other file`,
        `A static local variable retains its value between function calls`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 75 Explanation:</strong><br>  <a href="https://gateoverflow.in/535117" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int x; int x;  int main() {     printf("%d", x);     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int x;
int x;

int main() {
    printf("%d", x);
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0</mtext> </math>`,
        `Garbage value`,
        `Compilation error`,
        `Linker error`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 76 Explanation:</strong><br>  <a href="https://gateoverflow.in/534935" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="4054" data-start="3939">Given the following three files, what will be the output after compiling and linking them together?</p> <p data-end="4067" data-start="4056"><strong>file1.c</strong></p> <pre class="prettyprint linenums lang-c_cpp" data-end="4114" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="extern int i;  void f() {     i++; }" data-start="4069">extern int i;

void f() {
    i++;
}</pre> <p data-end="4127" data-start="4116"><strong>file2.c</strong></p> <pre class="prettyprint linenums lang-c_cpp" data-end="4182" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="2" data-rawcode="int i = 0;  void f();  void g() {     f(); }" data-start="4129">int i = 0;

void f();

void g() {
    f();
}</pre> <p data-end="4194" data-start="4184"><strong>main.c</strong></p> <pre class="prettyprint linenums lang-c_cpp" data-end="4330" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  extern int i;  void f(); void g();  int main() {     f();     g();      printf("%d", i);      return 0; }' data-start="4196">#include &lt;stdio.h&gt;

extern int i;

void f();
void g();

int main() {
    f();
    g();

    printf("%d", i);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2</mtext> </math>`,
        `Linker error`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 77 Explanation:</strong><br>  <a href="https://gateoverflow.in/534931" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int x = 10;  int main() {     int x = 20;      {         extern int x;         printf("%d", x);     }      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int x = 10;

int main() {
    int x = 20;

    {
        extern int x;
        printf("%d", x);
    }

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">20</mtext> </math>`,
        `Garbage value`,
        `Compilation error`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 78 Explanation:</strong><br>  <a href="https://gateoverflow.in/534939" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int add(int n) {     static int total = 1;      total = total + n;      return total; }  int main() {     int i, ans = 0;      for (i = 1; i &lt;= 3; i++) {         ans = add(i);     }      printf("%d", ans);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int add(int n) {
    static int total = 1;

    total = total + n;

    return total;
}

int main() {
    int i, ans = 0;

    for (i = 1; i &lt;= 3; i++) {
        ans = add(i);
    }

    printf("%d", ans);

    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "7",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 79 Explanation:</strong><br>  <a href="https://gateoverflow.in/534937" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Given the following two files, what will happen when they are compiled and linked together?</p> <p><strong>file1.c</strong></p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  static void show() {     printf("Hello"); }' dir="ltr">#include &lt;stdio.h&gt;

static void show() {
    printf("Hello");
}</pre> <p><strong>main.c</strong></p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="void show();  int main() {     show();     return 0; }" dir="ltr">void show();

int main() {
    show();
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Hello</mtext> </math>`,
        `Compilation error`,
        `Linker error`,
        `Runtime error`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 80 Explanation:</strong><br>  <a href="https://gateoverflow.in/534941" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="1039" data-start="959">What will happen when the following code is compiled and linked? </p> <pre class="prettyprint linenums lang-c_cpp" data-end="1139" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     extern int a;      printf("%d", a);      return 0; }' data-start="1041">#include &lt;stdio.h&gt;

int main() {
    extern int a;

    printf("%d", a);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0</mtext> </math>`,
        `Garbage value`,
        `Compilation error`,
        `Linker error`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 81 Explanation:</strong><br>  <a href="https://gateoverflow.in/534831" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="249" data-start="140">In which stage is the following code</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="4" data-rawcode="#include &lt;stdio.h&gt;">#include &lt;stdio.h&gt;</pre> <p class="prettyprint linenums lang-c_cpp" data-end="278" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#include &lt;stdio.h&gt;" data-start="251">is replaced by the contents of the file <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">stdio.h</mtext> </math>? </p> </span>`,
      image: "",
      options: [
        `During editing`,
        `During linking`,
        `During execution`,
        `During preprocessing`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 82 Explanation:</strong><br>  <a href="https://gateoverflow.in/534826" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="1920" data-start="1863">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="2034" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     extern int i;      printf("%d", i);      return 0; }  int i = 100;' data-start="1922">#include &lt;stdio.h&gt;

int main() {
    extern int i;

    printf("%d", i);

    return 0;
}

int i = 100;</pre> </span>`,
      image: "",
      options: [
        `Garbage value`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">100</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 83 Explanation:</strong><br>  <a href="https://gateoverflow.in/534828" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="996" data-start="939">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="1166" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void fun() {     static int x = 1;      x = x + 2;      printf("%d ", x); }  int main() {     fun();     fun();     fun();      return 0; }' data-start="998">#include &lt;stdio.h&gt;

void fun() {
    static int x = 1;

    x = x + 2;

    printf("%d ", x);
}

int main() {
    fun();
    fun();
    fun();

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3\ 3\ 3</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3\ 5\ 7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1\ 3\ 5</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2\ 4\ 6</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 84 Explanation:</strong><br>  <a href="https://gateoverflow.in/534615" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="2697" data-start="2625">What can be said about the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="2795" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     auto int x;      printf("%d", x);      return 0; }' data-start="2699">#include &lt;stdio.h&gt;

int main() {
    auto int x;

    printf("%d", x);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `Output is always <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0</mtext> </math>`,
        `Output is always <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1</mtext> </math>`,
        `Output cannot be predicted`,
        `Compilation error`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 85 Explanation:</strong><br>  <a href="https://gateoverflow.in/534619" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="1981" data-start="1924">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="2090" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int a; static int b;  int main() {     printf("%d %d", a, b);      return 0; }' data-start="1983">#include &lt;stdio.h&gt;

int a;
static int b;

int main() {
    printf("%d %d", a, b);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0\ 0</mtext> </math>`,
        `Garbage values`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1\ 1</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 86 Explanation:</strong><br>  <a href="https://gateoverflow.in/534617" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="3415" data-start="3358">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="3540" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     register int x = 10;     int *p = &amp;x;      printf("%d", *p);      return 0; }' data-start="3417">#include &lt;stdio.h&gt;

int main() {
    register int x = 10;
    int *p = &amp;x;

    printf("%d", *p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0</mtext> </math>`,
        `Garbage value`,
        `Compilation error`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 87 Explanation:</strong><br>  <a href="https://gateoverflow.in/534621" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="2907" data-start="2800">Given the following two files, what will happen when they are compiled and linked together?</p> <p data-end="2920" data-start="2909"><strong>file1.c</strong></p> <pre class="prettyprint linenums lang-c_cpp" data-end="2994" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="static int count = 3;  void update() {     count = count + 1; }" data-start="2922">static int count = 3;

void update() {
    count = count + 1;
}</pre> <p data-end="3006" data-start="2996"><strong>main.c</strong></p> <pre class="prettyprint linenums lang-c_cpp" data-end="3140" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  extern int count; void update();  int main() {     update();      printf("%d", count);      return 0; }' data-start="3008">#include &lt;stdio.h&gt;

extern int count;
void update();

int main() {
    update();

    printf("%d", count);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4</mtext> </math>`,
        `Compilation error`,
        `Linker error`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 88 Explanation:</strong><br>  <a href="https://gateoverflow.in/534833" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="338" data-start="263">Is there any difference between the following declarations?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="377" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="extern int fun(); int fun();" data-start="340">extern int fun();
int fun();</pre> </span>`,
      image: "",
      options: [
        `Both are identical`,
        `No difference, except <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">extern int fun();</mtext> </math> is probably in another file`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">int fun();</mtext> </math> is overridden with <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">extern int fun();</mtext> </math>`,
        `None of these`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 89 Explanation:</strong><br>  <a href="https://gateoverflow.in/534823" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="206" data-start="149">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="317" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int x = 10;  int main() {     int x = 20;      printf("%d", x);      return 0; }' data-start="208">#include &lt;stdio.h&gt;

int x = 10;

int main() {
    int x = 20;

    printf("%d", x);

    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "20",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 90 Explanation:</strong><br>  <a href="https://gateoverflow.in/534613" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="155" data-start="98">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  struct Student {     int roll;     int marks; };  int main() {     struct Student s1;      s1.roll = 10;     s1.marks = 85;      printf("%d %d", s1.roll, s1.marks);      return 0; }'>#include &lt;stdio.h&gt;

struct Student {
    int roll;
    int marks;
};

int main() {
    struct Student s1;

    s1.roll = 10;
    s1.marks = 85;

    printf("%d %d", s1.roll, s1.marks);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10\ 85</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">85\ 10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10\ 10</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 91 Explanation:</strong><br>  <a href="https://gateoverflow.in/534514" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="1061" data-start="1004">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="1264" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  struct Point {     int x;     int y; };  int main() {     struct Point p = {4, 7};      p.x = p.x + 3;     p.y = p.x + p.y;      printf("%d %d", p.x, p.y);      return 0; }' data-start="1063">#include &lt;stdio.h&gt;

struct Point {
    int x;
    int y;
};

int main() {
    struct Point p = {4, 7};

    p.x = p.x + 3;
    p.y = p.x + p.y;

    printf("%d %d", p.x, p.y);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7\ 14</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7\ 11</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 11</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 92 Explanation:</strong><br>  <a href="https://gateoverflow.in/534516" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="1296" data-start="1239">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="1472" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int fun(int n) {     if (n &lt;= 1)         return n;      return fun(n - 1) + fun(n - 3); }  int main() {     printf("%d", fun(5));     return 0; }' data-start="1298">#include &lt;stdio.h&gt;

int fun(int n) {
    if (n &lt;= 1)
        return n;

    return fun(n - 1) + fun(n - 3);
}

int main() {
    printf("%d", fun(5));
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 93 Explanation:</strong><br>  <a href="https://gateoverflow.in/534510" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="3250" data-start="3193">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="3408" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  #define SQUARE(x) x * x  int main() {     int a = 3;     int result = SQUARE(a + 1);      printf("%d", result);     return 0; }' data-start="3252">#include &lt;stdio.h&gt;

#define SQUARE(x) x * x

int main() {
    int a = 3;
    int result = SQUARE(a + 1);

    printf("%d", result);
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">16</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">13</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 94 Explanation:</strong><br>  <a href="https://gateoverflow.in/534512" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="338" data-start="281">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="538" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void update(int *p, int *q) {     *p = *p + 2;     *q = *q + 3;     *p = *p + *q; }  int main() {     int a = 5;     update(&amp;a, &amp;a);     printf("%d", a);     return 0; }' data-start="340">#include &lt;stdio.h&gt;

void update(int *p, int *q) {
    *p = *p + 2;
    *q = *q + 3;
    *p = *p + *q;
}

int main() {
    int a = 5;
    update(&amp;a, &amp;a);
    printf("%d", a);
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "20",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 95 Explanation:</strong><br>  <a href="https://gateoverflow.in/534508" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="1316" data-start="1259">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="1483" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int fun(int n) {     if (n == 0)         return 1;      return n * fun(n - 2); }  int main() {     printf("%d", fun(6));     return 0; }' data-start="1318">#include &lt;stdio.h&gt;

int fun(int n) {
    if (n == 0)
        return 1;

    return n * fun(n - 2);
}

int main() {
    printf("%d", fun(6));
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "48",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 96 Explanation:</strong><br>  <a href="https://gateoverflow.in/534193" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="2078" data-start="2021">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="2326" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  struct Student {     int marks; };  void update(struct Student s) {     s.marks = s.marks + 10; }  int main() {     struct Student st;      st.marks = 40;      update(st);      printf("%d", st.marks);      return 0; }' data-start="2080">#include &lt;stdio.h&gt;

struct Student {
    int marks;
};

void update(struct Student s) {
    s.marks = s.marks + 10;
}

int main() {
    struct Student st;

    st.marks = 40;

    update(st);

    printf("%d", st.marks);

    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "40",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 97 Explanation:</strong><br>  <a href="https://gateoverflow.in/534195" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="256" data-start="199">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="453" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a = 5, b = 10;     int *p = &amp;a;     int **q = &amp;p;      **q = **q + 3;     p = &amp;b;     **q = **q + a;      printf("%d %d", a, b);      return 0; }' data-start="258">#include &lt;stdio.h&gt;

int main() {
    int a = 5, b = 10;
    int *p = &amp;a;
    int **q = &amp;p;

    **q = **q + 3;
    p = &amp;b;
    **q = **q + a;

    printf("%d %d", a, b);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8\ 18</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5\ 15</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8\ 10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5\ 18</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 98 Explanation:</strong><br>  <a href="https://gateoverflow.in/534191" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="3005" data-start="2948">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="3243" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int solve(int n) {   static int x = 1;    if (n == 0)     return x;    x = x + n;    return solve(n - 1); }  int main() {   printf("%d ", solve(3));   printf("%d", solve(2));    return 0; }' data-start="3007">#include &lt;stdio.h&gt;

int solve(int n) {
  static int x = 1;

  if (n == 0)
    return x;

  x = x + n;

  return solve(n - 1);
}

int main() {
  printf("%d ", solve(3));
  printf("%d", solve(2));

  return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7\ 10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7\ 7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6\ 9</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10\ 7</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 99 Explanation:</strong><br>  <a href="https://gateoverflow.in/534197" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="4354" data-start="4297">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="4681" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int i, j, sum = 0;      for (i = 1; i &lt;= 4; i++) {         for (j = 1; j &lt;= 5; j++) {             if (j % i == 0)                 continue;              if (i + j &gt; 6)                 break;              sum = sum + i + j;         }     }      printf("%d", sum);      return 0; }' data-start="4356">#include &lt;stdio.h&gt;

int main() {
    int i, j, sum = 0;

    for (i = 1; i &lt;= 4; i++) {
        for (j = 1; j &lt;= 5; j++) {
            if (j % i == 0)
                continue;

            if (i + j &gt; 6)
                break;

            sum = sum + i + j;
        }
    }

    printf("%d", sum);

    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "28",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 100 Explanation:</strong><br>  <a href="https://gateoverflow.in/534199" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="3200" data-start="3143">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="3476" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int i, j, count = 0;      for (i = 1; i &lt;= 4; i++) {         for (j = 1; j &lt;= 4; j++) {             if (i * j &gt; 6)                 break;              count = count + j;         }     }      printf("%d", count);      return 0; }' data-start="3202">#include &lt;stdio.h&gt;

int main() {
    int i, j, count = 0;

    for (i = 1; i &lt;= 4; i++) {
        for (j = 1; j &lt;= 4; j++) {
            if (i * j &gt; 6)
                break;

            count = count + j;
        }
    }

    printf("%d", count);

    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "20",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 101 Explanation:</strong><br>  <a href="https://gateoverflow.in/534187" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="4922" data-start="4865">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void change(int *p, int *q) {     *p = *p + 4;     *q = *p + *q;     p = q;     *p = *p - 3; }  int main() {     int a = 6, b = 10;      change(&amp;a, &amp;b);      printf("%d %d", a, b);      return 0; }'>#include &lt;stdio.h&gt;

void change(int *p, int *q) {
    *p = *p + 4;
    *q = *p + *q;
    p = q;
    *p = *p - 3;
}

int main() {
    int a = 6, b = 10;

    change(&amp;a, &amp;b);

    printf("%d %d", a, b);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10\ 17</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10\ 20</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6\ 17</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">13\ 17</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 102 Explanation:</strong><br>  <a href="https://gateoverflow.in/534189" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="1290" data-start="1233">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="1490" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void fun() {     static int x = 3;     int y = 2;      x = x + y;     y = y + x;      printf("%d ", x); }  int main() {     fun();     fun();     fun();      return 0; }' data-start="1292">#include &lt;stdio.h&gt;

void fun() {
    static int x = 3;
    int y = 2;

    x = x + y;
    y = y + x;

    printf("%d ", x);
}

int main() {
    fun();
    fun();
    fun();

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5\ 5\ 5</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5\ 7\ 9</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3\ 5\ 7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5\ 10\ 15</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 103 Explanation:</strong><br>  <a href="https://gateoverflow.in/534183" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="255" data-start="198">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="447" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a = 8, b = 12;     int *p = &amp;a;     int *q = &amp;b;      *p = *p + *q;     q = p;     *q = *q - 5;      printf("%d %d", a, b);      return 0; }' data-start="257">#include &lt;stdio.h&gt;

int main() {
    int a = 8, b = 12;
    int *p = &amp;a;
    int *q = &amp;b;

    *p = *p + *q;
    q = p;
    *q = *q - 5;

    printf("%d %d", a, b);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">15\ 12</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">20\ 12</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">15\ 15</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8\ 12</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 104 Explanation:</strong><br>  <a href="https://gateoverflow.in/534181" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="167" data-start="110">What is the output of the following code?</p> <pre class="prettyprint linenums lang-" data-end="385" data-linenums="true" data-pbcklang="" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() { int a = 10, b = 20; int *p, *q;  p = &amp;a; q = &amp;b;  *p = *p + 5; *q = *p + *q; p = q; *p = *p - 10;  printf("%d %d", a, b);  return 0; }' data-start="169">#include &lt;stdio.h&gt;

int main() {
int a = 10, b = 20;
int *p, *q;

p = &amp;a;
q = &amp;b;

*p = *p + 5;
*q = *p + *q;
p = q;
*p = *p - 10;

printf("%d %d", a, b);

return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">15\ 25</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">15\ 35</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10\ 25</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">25\ 15</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 105 Explanation:</strong><br>  <a href="https://gateoverflow.in/534054" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="2431" data-start="2374">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="2601" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int calc(int n) {     if (n == 1)         return 2;      return n + calc(n - 1); }  int main() {     printf("%d", calc(4));     return 0; }' data-start="2433">#include &lt;stdio.h&gt;

int calc(int n) {
    if (n == 1)
        return 2;

    return n + calc(n - 1);
}

int main() {
    printf("%d", calc(4));
    return 0;
}
</pre> </span>`,
      image: "",
      options: [],
      answer: "11",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 106 Explanation:</strong><br>  <a href="https://gateoverflow.in/534185" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="2372" data-start="2315">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int i, j, count = 0;      for (i = 1; i &lt;= 4; i++) {         for (j = 1; j &lt;= 4; j++) {             if (i == j)                 continue;              if (i + j &gt; 5)                 break;              count++;         }     }      printf("%d", count);     return 0; }'>#include &lt;stdio.h&gt;

int main() {
    int i, j, count = 0;

    for (i = 1; i &lt;= 4; i++) {
        for (j = 1; j &lt;= 4; j++) {
            if (i == j)
                continue;

            if (i + j &gt; 5)
                break;

            count++;
        }
    }

    printf("%d", count);
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 107 Explanation:</strong><br>  <a href="https://gateoverflow.in/534050" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="284" data-start="227">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="620" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[5] = {2, 4, 1, 3, 5};     int i, sum = 0;      for (i = 0; i &lt; 5; i++) {         if (a[i] % 2 == 0)             sum = sum + a[i];         else {             sum = sum + i;              if (sum &gt; 8)                 break;         }     }      printf("%d %d", i, sum);     return 0; }' data-start="286">#include &lt;stdio.h&gt;

int main() {
    int a[5] = {2, 4, 1, 3, 5};
    int i, sum = 0;

    for (i = 0; i &lt; 5; i++) {
        if (a[i] % 2 == 0)
            sum = sum + a[i];
        else {
            sum = sum + i;

            if (sum &gt; 8)
                break;
        }
    }

    printf("%d %d", i, sum);
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3\ 11</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 16</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5\ 16</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2\ 8</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 108 Explanation:</strong><br>  <a href="https://gateoverflow.in/534045" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="1464" data-start="1407">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int update(int x) {     x = x + 3;     return x * 2; }  int main() {     int a = 4, b;      b = update(a);     printf("%d %d", a, b);      return 0; }'>#include &lt;stdio.h&gt;

int update(int x) {
    x = x + 3;
    return x * 2;
}

int main() {
    int a = 4, b;

    b = update(a);
    printf("%d %d", a, b);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7\ 14</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 14</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7\ 8</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 109 Explanation:</strong><br>  <a href="https://gateoverflow.in/534048" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="4050" data-start="3993">What is the output of the following code?</p> <pre class="prettyprint linenums lang-" data-end="4357" data-linenums="true" data-pbcklang="" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int x = 3, y = 1;      switch (x - 1) {         case 1:             y = y + 2;         case 2:             y = y * 3;         case 3:             y = y - 1;             break;         default:             y = y + 5;     }      printf("%d", y);     return 0; }' data-start="4052">#include &lt;stdio.h&gt;

int main() {
    int x = 3, y = 1;

    switch (x - 1) {
        case 1:
            y = y + 2;
        case 2:
            y = y * 3;
        case 3:
            y = y - 1;
            break;
        default:
            y = y + 5;
    }

    printf("%d", y);
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 110 Explanation:</strong><br>  <a href="https://gateoverflow.in/534052" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="173" data-start="116">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="488" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int x = 2, y = 0;      switch (x) {         case 1:             y = y + 1;         case 2:             y = y + 2;         case 3:             y = y + 3;             break;         default:             y = y + 4;     }      printf("%d", y);     return 0; }' data-start="175">#include &lt;stdio.h&gt;

int main() {
    int x = 2, y = 0;

    switch (x) {
        case 1:
            y = y + 1;
        case 2:
            y = y + 2;
        case 3:
            y = y + 3;
            break;
        default:
            y = y + 4;
    }

    printf("%d", y);
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "5",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 111 Explanation:</strong><br>  <a href="https://gateoverflow.in/533878" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="1465" data-start="1408">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-end="1787" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int i, j, sum = 0;      for (i = 1; i &lt;= 4; i++) {         for (j = 1; j &lt;= 4; j++) {             if (j == i)                 continue;              if (i + j &gt; 5)                 break;              sum = sum + i + j;         }     }      printf("%d", sum);     return 0; }' data-start="1467">#include &lt;stdio.h&gt;

int main() {
    int i, j, sum = 0;

    for (i = 1; i &lt;= 4; i++) {
        for (j = 1; j &lt;= 4; j++) {
            if (j == i)
                continue;

            if (i + j &gt; 5)
                break;

            sum = sum + i + j;
        }
    }

    printf("%d", sum);
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "34",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 112 Explanation:</strong><br>  <a href="https://gateoverflow.in/533889" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="177" data-start="120">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a = 1, b = 2, c = 3;      if (a++ &gt; 1 &amp;&amp; ++b &gt; 2 || c++ == 3)         printf("%d %d %d", a, b, c);     else         printf("%d %d %d", c, b, a);      return 0; }'>#include &lt;stdio.h&gt;

int main() {
    int a = 1, b = 2, c = 3;

    if (a++ &gt; 1 &amp;&amp; ++b &gt; 2 || c++ == 3)
        printf("%d %d %d", a, b, c);
    else
        printf("%d %d %d", c, b, a);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2\ 3\ 4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2\ 2\ 4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 2\ 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1\ 2\ 3</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 113 Explanation:</strong><br>  <a href="https://gateoverflow.in/533884" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="1935" data-start="1878">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int x = 3, y = 4, z;      z = x++ + ++y;      printf("%d %d %d", x, y, z);     return 0; }'>#include &lt;stdio.h&gt;

int main() {
    int x = 3, y = 4, z;

    z = x++ + ++y;

    printf("%d %d %d", x, y, z);
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 5\ 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3\ 5\ 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 4\ 7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4\ 5\ 9</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 114 Explanation:</strong><br>  <a href="https://gateoverflow.in/533882" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="1111" data-start="1054">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int i, j, count = 0;      for (i = 1; i &lt;= 3; i++) {         for (j = 1; j &lt;= i; j++) {             count = count + j;         }     }      printf("%d", count);     return 0; }'>#include &lt;stdio.h&gt;

int main() {
    int i, j, count = 0;

    for (i = 1; i &lt;= 3; i++) {
        for (j = 1; j &lt;= i; j++) {
            count = count + j;
        }
    }

    printf("%d", count);
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "10",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 115 Explanation:</strong><br>  <a href="https://gateoverflow.in/533880" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="2180" data-start="2123">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int i, sum = 0;      for (i = 1; i &lt;= 6; i++) {         if (i % 2 == 0)             continue;          sum = sum + i;          if (sum &gt; 6)             break;     }      printf("%d %d", i, sum);     return 0; }'>#include &lt;stdio.h&gt;

int main() {
    int i, sum = 0;

    for (i = 1; i &lt;= 6; i++) {
        if (i % 2 == 0)
            continue;

        sum = sum + i;

        if (sum &gt; 6)
            break;
    }

    printf("%d %d", i, sum);
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5\ 9</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6\ 9</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7\ 9</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5\ 4</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 116 Explanation:</strong><br>  <a href="https://gateoverflow.in/533722" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="4" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a = 0, b = 5, c = 10;     int ans = a++ &amp;&amp; ++b || c--;      printf("%d %d %d %d", ans, a, b, c);     return 0; }'>#include &lt;stdio.h&gt;

int main() {
    int a = 0, b = 5, c = 10;
    int ans = a++ &amp;&amp; ++b || c--;

    printf("%d %d %d %d", ans, a, b, c);
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1\ 1\ 6\ 9</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1\ 1\ 5\ 9</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0\ 1\ 5\ 10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1\ 0\ 5\ 9</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 117 Explanation:</strong><br>  <a href="https://gateoverflow.in/533720" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="4460" data-section-id="1xf6jw0" data-start="4433">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() { int x = 5; printf("%d", x++);  printf("%d", ++x); return 0; }'>#include &lt;stdio.h&gt;

int main() {
int x = 5;
printf("%d", x++);

printf("%d", ++x);
return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>56</mn> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>67</mn> </math>`,
        `Compilation error`,
        `Undefined behavior`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 118 Explanation:</strong><br>  <a href="https://gateoverflow.in/533713" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="2888" data-section-id="1u8p3py" data-start="2861">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a = 5, b = 10;     printf("%d", a &lt; b &amp;&amp; b &gt; 0);     return 0; }'>#include &lt;stdio.h&gt;

int main() {
    int a = 5, b = 10;
    printf("%d", a &lt; b &amp;&amp; b &gt; 0);
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 119 Explanation:</strong><br>  <a href="https://gateoverflow.in/533677" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="4460" data-section-id="1xf6jw0" data-start="4433">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a = 5, b = 2;     float x = a / b + 0.5;     printf("%.1f", x);     return 0; }'>#include &lt;stdio.h&gt;

int main() {
    int a = 5, b = 2;
    float x = a / b + 0.5;
    printf("%.1f", x);
    return 0;
}
</pre> </span>`,
      image: "",
      options: [],
      answer: "2.5",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 120 Explanation:</strong><br>  <a href="https://gateoverflow.in/533718" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p data-end="3074" data-section-id="x935rr" data-start="3047">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='&lt;code&gt;#include &lt;stdio.h&gt;  int main() {     int a = 5, b = 10;     printf("%d", a &gt; b || b &gt; 0);     return 0; }&lt;/code&gt;'>#include &lt;stdio.h&gt;

int main() {
    int a = 5, b = 10;
    printf("%d", a &gt; b || b &gt; 0);
    return 0;
}
</pre> </span>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 121 Explanation:</strong><br>  <a href="https://gateoverflow.in/533674" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="152" data-start="86">Which of the following is a valid identifier in C?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2sum</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">total-marks</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">_value</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">float</mtext> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 122 Explanation:</strong><br>  <a href="https://gateoverflow.in/533668" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="822" data-section-id="1vwmnko" data-start="770">Which of the following is <strong>not</strong> a keyword in C? </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">int</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">return</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">main</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">while</mtext> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 123 Explanation:</strong><br>  <a href="https://gateoverflow.in/533672" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Assume that <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">char</mtext> </math> is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>8</mn> </math> bits and signed integers are represented using <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math>'s complement. Consider the following C code:</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="4" data-rawcode='#include &lt;stdio.h&gt;  int main() {     signed char x = 0xF9;     unsigned char y = x;      printf("%d %u", x, (unsigned int)y);     return 0; }'>#include &lt;stdio.h&gt;

int main() {
    signed char x = 0xF9;
    unsigned char y = x;

    printf("%d %u", x, (unsigned int)y);
    return 0;
}</pre> <p data-end="393" data-start="369">What will be the output?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">-7\ 249</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">249\ 249</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">-7\ -7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7\ 249</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 124 Explanation:</strong><br>  <a href="https://gateoverflow.in/533670" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p data-end="4460" data-section-id="1xf6jw0" data-start="4433">What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     float x = 5 / 2;     printf("%.1f", x);     printf("\n");     float y = 5.0 / 2;     printf("%.1f", y);     return 0; }'>#include &lt;stdio.h&gt;

int main() {
    float x = 5 / 2;
    printf("%.1f", x);
    printf(" ");
    float y = 5.0 / 2;
    printf("%.1f", y);
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `$<code style="color: #c7254e; background-color: #f9f2f4; padding: 2px 4px; border-radius: 4px; font-family: monospace;">2.5 2.0</code>$`,
        `$<code style="color: #c7254e; background-color: #f9f2f4; padding: 2px 4px; border-radius: 4px; font-family: monospace;">2.0 2.5</code>$`,
        `$<code style="color: #c7254e; background-color: #f9f2f4; padding: 2px 4px; border-radius: 4px; font-family: monospace;">3.0 3.0</code>$`,
        `Compilation error`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 125 Explanation:</strong><br>  <a href="https://gateoverflow.in/533716" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Assume:</p> <p><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">short = 2 bytes</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">int = 4 bytes</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">char = 1 byte</mtext> </math> </p> <p><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">int</mtext> </math> needs <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math>-byte alignment and the final structure size is rounded to a multiple of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math>. </p> <p>Find the size of each structure in order: <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">struct X</mtext> </math>, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">struct Y</mtext> </math>, and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">struct Z</mtext> </math>. </p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="struct X {     short s;     int i;     char c; };  struct Y {     int i;     char c;     short s; };  struct Z {     int i;     short s;     char c; };" dir="ltr">struct X {
    short s;
    int i;
    char c;
};

struct Y {
    int i;
    char c;
    short s;
};

struct Z {
    int i;
    short s;
    char c;
};</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7 7 7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8 8 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">12 8 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">12 12 8</mtext> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 126 Explanation:</strong><br>  <a href="https://gateoverflow.in/538218" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Assume:</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="struct Student {     double gpa; };  struct Student alice; struct Student *sptr = &amp;alice;" dir="ltr">struct Student {
    double gpa;
};

struct Student alice;
struct Student *sptr = &amp;alice;</pre> <p>Which of the following correctly assigns <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4.0</mtext> </math> to <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">alice.gpa</mtext> </math>? </p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">*sptr.gpa = 4.0;</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">(*sptr).gpa = 4.0;</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">sptr-&gt;gpa = 4.0;</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">sptr.gpa = 4.0;</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 127 Explanation:</strong><br>  <a href="https://gateoverflow.in/538216" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider the following code idea from the source:</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='typedef struct {     double x, y; } Point;  void reset(Point p) {     p.x = p.y = 0; }  int main() {     Point a = {12.0, 42.0};     Point b = a;      reset(a);     b.x = 0;      printf("a: %.0f,%.0f\n", a.x, a.y);     printf("b: %.0f,%.0f\n", b.x, b.y); }' dir="ltr">typedef struct {
    double x, y;
} Point;

void reset(Point p) {
    p.x = p.y = 0;
}

int main() {
    Point a = {12.0, 42.0};
    Point b = a;

    reset(a);
    b.x = 0;

    printf("a: %.0f,%.0f\n", a.x, a.y);
    printf("b: %.0f,%.0f\n", b.x, b.y);
}</pre> <p>What is the output?</p> <p>A.</p> <pre dir="ltr"><code dir="ltr">a: 0,0
b: 0,42</code></pre> <p>B.</p> <pre dir="ltr"><code dir="ltr">a: 12,42
b: 0,42</code></pre> <p>C.</p> <pre dir="ltr"><code dir="ltr">a: 12,42
b: 12,42</code></pre> <p>D.</p> <pre dir="ltr"><code dir="ltr">a: 0,42
b: 0,42</code></pre> </span>`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 128 Explanation:</strong><br>  <a href="https://gateoverflow.in/538214" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is printed by the following program?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#include &lt;stdio.h&gt;  struct Student {     int id, year;     char grade; };  int main() {     struct Student s;      s.id = 10001;     s.year = 2010;     s.grade = 'B';      printf(&quot;%d %d %c\n&quot;, s.id, s.year, s.grade); }" dir="ltr">#include &lt;stdio.h&gt;

struct Student {
    int id, year;
    char grade;
};

int main() {
    struct Student s;

    s.id = 10001;
    s.year = 2010;
    s.grade = 'B';

    printf("%d %d %c\n", s.id, s.year, s.grade);
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10001 2010 B</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2010 10001 B</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10001 B 2010</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 129 Explanation:</strong><br>  <a href="https://gateoverflow.in/538212" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Which option correctly completes the given exercise?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  /* define the person struct here using the typedef syntax */  int main() {     person john;      john.name = "John";     john.age = 27;      printf("%s is %d years old.", john.name, john.age); }' dir="ltr">#include &lt;stdio.h&gt;

/* define the person struct here using the typedef syntax */

int main() {
    person john;

    john.name = "John";
    john.age = 27;

    printf("%s is %d years old.", john.name, john.age);
}</pre> <p>A.</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="struct person {    char *name;    int age; };" dir="ltr">struct person {
   char *name;
   int age;
};</pre> <p>B.</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="typedef struct { char *name; int age; } person;" dir="ltr">typedef struct {
   char *name;
   int age;
} person;</pre> <p>C.</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="typedef struct person {    char name;    int age; };" dir="ltr">typedef struct person {
   char name;
   int age;
};</pre> <p>D.</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="struct {     char *name;     int age; } person;" dir="ltr">struct {
    char *name;
    int age;
} person;</pre> </span>`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 130 Explanation:</strong><br>  <a href="https://gateoverflow.in/538210" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void func(int a, int *bptr) {     a = 42;     *bptr = 42;     return; }  int main(void) {     int x = 100, y = 100;      func(x, &amp;y);      printf("x = %d, y = %d\n", x, y);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void func(int a, int *bptr)
{
    a = 42;
    *bptr = 42;
    return;
}

int main(void)
{
    int x = 100, y = 100;

    func(x, &amp;y);

    printf("x = %d, y = %d\n", x, y);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">x = 42, y = 42</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">x = 100, y = 100</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">x = 100, y = 42</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">x = 42, y = 100</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 131 Explanation:</strong><br>  <a href="https://gateoverflow.in/538121" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider the following program:</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#include &lt;stdio.h&gt;  int main(void) {     char ch;      printf(&quot;Enter your input: &quot;);      while ((ch = getchar()) != 'C')     {         putchar(ch);     }      return 0; }" dir="ltr">#include &lt;stdio.h&gt;

int main(void)
{
    char ch;

    printf("Enter your input: ");

    while ((ch = getchar()) != 'C')
    {
        putchar(ch);
    }

    return 0;
}</pre> <p>For the input:</p> <pre dir="ltr"><code dir="ltr">In 1983, a committee was formed to standardize the C programming language.</code></pre> <p>What will be printed?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Enter your input: In 1983, a committee was formed to standardize the</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Enter your input: In 1983, a committee was formed to standardize the C</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Enter your input: C programming language. </mtext> </math>`,
        `Compilation error`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 132 Explanation:</strong><br>  <a href="https://gateoverflow.in/538107" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What does the following code do?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#include &lt;stdio.h&gt;  int main() {     char c;      while ((c = getchar()) != EOF)     {         if (c &gt;= 'A' &amp;&amp; c &lt;= 'Z')             c = c - 'A' + 'a';          putchar(c);     }      return 0; }" dir="ltr">#include &lt;stdio.h&gt;

int main()
{
    char c;

    while ((c = getchar()) != EOF)
    {
        if (c &gt;= 'A' &amp;&amp; c &lt;= 'Z')
            c = c - 'A' + 'a';

        putchar(c);
    }

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `It converts lowercase letters to uppercase`,
        `It converts uppercase letters to lowercase and prints the input`,
        `It prints only uppercase letters`,
        `It stops when newline is found`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 133 Explanation:</strong><br>  <a href="https://gateoverflow.in/538109" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Assume:</p> <ul> <li><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">char</mtext> </math> takes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math> byte</li> <li><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">int</mtext> </math> takes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> bytes</li> <li><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">int</mtext> </math> must be stored at an address divisible by <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math></li> <li>Structure size is rounded to a multiple of the largest alignment requirement</li> </ul> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  struct Test {     char c;     int x;     char d; };  int main() {     printf("%zu", sizeof(struct Test));      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

struct Test {
    char c;
    int x;
    char d;
};

int main() {
    printf("%zu", sizeof(struct Test));

    return 0;
}
</pre> </span>`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 134 Explanation:</strong><br>  <a href="https://gateoverflow.in/538021" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider the macro:</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#define square(x) (x*x)" dir="ltr">#define square(x) (x*x)</pre> <p>Now consider the statement:</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="c = square(a + b);" dir="ltr">c = square(a + b);</pre> <p>After macro expansion, which expression is produced?</p> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">c = ((a + b) * (a + b));</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">c = (a + b * a + b);</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">c = (a + b) * a + b;</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 135 Explanation:</strong><br>  <a href="https://gateoverflow.in/538119" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  struct Item {     int code;     int price; };  void f(struct Item x) {     x.code = x.code + 1;     x.price = x.price + 50; }  void g(struct Item *p) {     p-&gt;code = p-&gt;code + 2;     p-&gt;price = p-&gt;price + 20; }  int main() {     struct Item i = {10, 100};      f(i);     g(&amp;i);      printf("%d %d", i.code, i.price);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

struct Item {
    int code;
    int price;
};

void f(struct Item x) {
    x.code = x.code + 1;
    x.price = x.price + 50;
}

void g(struct Item *p) {
    p-&gt;code = p-&gt;code + 2;
    p-&gt;price = p-&gt;price + 20;
}

int main() {
    struct Item i = {10, 100};

    f(i);
    g(&amp;i);

    printf("%d %d", i.code, i.price);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 100</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">11 150</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">12 120</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">13 170</mtext> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 136 Explanation:</strong><br>  <a href="https://gateoverflow.in/538017" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#include &lt;stdio.h&gt;  struct Book {     char name[4];     int pages; };  int main() {     struct Book b1 = {&quot;CAT&quot;, 50};     struct Book b2;      b2 = b1;      b2.name[0] = 'B';     b2.pages = b2.pages + 10;      printf(&quot;%s %d %s %d&quot;, b1.name, b1.pages, b2.name, b2.pages);      return 0; }" dir="ltr">#include &lt;stdio.h&gt;

struct Book {
    char name[4];
    int pages;
};

int main() {
    struct Book b1 = {"CAT", 50};
    struct Book b2;

    b2 = b1;

    b2.name[0] = 'B';
    b2.pages = b2.pages + 10;

    printf("%s %d %s %d", b1.name, b1.pages, b2.name, b2.pages);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">BAT 60 BAT 60</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">CAT 50 BAT 60</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">CAT 60 BAT 60</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 137 Explanation:</strong><br>  <a href="https://gateoverflow.in/538019" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  struct Student {     int roll;     int marks; };  int main() {     struct Student s[3] = {         {1, 50},         {2, 60},         {3, 70}     };      struct Student *p = s;      (p + 1)-&gt;marks = (p + 1)-&gt;marks + 5;     p++;     p-&gt;roll = (p - 1)-&gt;roll + p-&gt;roll;      printf("%d %d %d", s[0].roll, s[1].roll, s[1].marks);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

struct Student {
    int roll;
    int marks;
};

int main() {
    struct Student s[3] = {
        {1, 50},
        {2, 60},
        {3, 70}
    };

    struct Student *p = s;

    (p + 1)-&gt;marks = (p + 1)-&gt;marks + 5;
    p++;
    p-&gt;roll = (p - 1)-&gt;roll + p-&gt;roll;

    printf("%d %d %d", s[0].roll, s[1].roll, s[1].marks);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1 2 65</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1 3 65</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2 3 65</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1 3 60</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 138 Explanation:</strong><br>  <a href="https://gateoverflow.in/538015" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What will happen when the following code is compiled?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  struct Node {     int data; };  int main() {     struct Node n = {25};     struct Node *p = &amp;n;      printf("%d", *p.data);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

struct Node {
    int data;
};

int main() {
    struct Node n = {25};
    struct Node *p = &amp;n;

    printf("%d", *p.data);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">25</mtext> </math>`,
        `Address of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">data</mtext> </math>`,
        `Compilation error`,
        `Undefined behavior`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 139 Explanation:</strong><br>  <a href="https://gateoverflow.in/538013" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What will happen when the following code is compiled?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  struct Point {     int x;     int y; };  int main() {     struct Point p1 = {2, 4};     struct Point p2;      p2 = p1;     p2.x = 10;      if (p1 == p2)         printf("Same");     else         printf("%d %d", p1.x, p2.x);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1 = {2, 4};
    struct Point p2;

    p2 = p1;
    p2.x = 10;

    if (p1 == p2)
        printf("Same");
    else
        printf("%d %d", p1.x, p2.x);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Same</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2 10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 10</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 140 Explanation:</strong><br>  <a href="https://gateoverflow.in/537790" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  struct Box {     int width;     int height; };  int main() {     struct Box b = {4, 6};     struct Box *p = &amp;b;      p-&gt;width = p-&gt;width + 2;     (*p).height = (*p).height + p-&gt;width;      printf("%d %d", b.width, b.height);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

struct Box {
    int width;
    int height;
};

int main() {
    struct Box b = {4, 6};
    struct Box *p = &amp;b;

    p-&gt;width = p-&gt;width + 2;
    (*p).height = (*p).height + p-&gt;width;

    printf("%d %d", b.width, b.height);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4 6</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6 10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6 12</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 141 Explanation:</strong><br>  <a href="https://gateoverflow.in/537786" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  struct Student {     int roll;     int marks; };  int main() {     struct Student s[3] = {         {1, 70},         {2, 80},         {3, 90}     };      s[1].marks = s[1].marks + 5;     s[2].roll = s[0].roll + s[1].roll;      printf("%d %d %d", s[1].marks, s[2].roll, s[2].marks);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

struct Student {
    int roll;
    int marks;
};

int main() {
    struct Student s[3] = {
        {1, 70},
        {2, 80},
        {3, 90}
    };

    s[1].marks = s[1].marks + 5;
    s[2].roll = s[0].roll + s[1].roll;

    printf("%d %d %d", s[1].marks, s[2].roll, s[2].marks);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">80 3 90</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">85 3 90</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">85 2 90</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">85 3 95</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 142 Explanation:</strong><br>  <a href="https://gateoverflow.in/537782" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  struct Item {     int code;     int price; };  void update(struct Item *p) {     p-&gt;price = p-&gt;price + 20;     (*p).code = (*p).code + 1; }  int main() {     struct Item i1 = {10, 100};      update(&amp;i1);      printf("%d %d", i1.code, i1.price);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

struct Item {
    int code;
    int price;
};

void update(struct Item *p) {
    p-&gt;price = p-&gt;price + 20;
    (*p).code = (*p).code + 1;
}

int main() {
    struct Item i1 = {10, 100};

    update(&amp;i1);

    printf("%d %d", i1.code, i1.price);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 100</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">11 120</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 120</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 143 Explanation:</strong><br>  <a href="https://gateoverflow.in/537788" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#include &lt;stdio.h&gt;  struct Book {     char name;     float price;     int pages; };  int main() {     struct Book b1 = {'C', 150.5, 300};      b1.pages = b1.pages + 50;     b1.price = b1.price + 10.5;      printf(&quot;%c %.1f %d&quot;, b1.name, b1.price, b1.pages);      return 0; }" dir="ltr">#include &lt;stdio.h&gt;

struct Book {
    char name;
    float price;
    int pages;
};

int main() {
    struct Book b1 = {'C', 150.5, 300};

    b1.pages = b1.pages + 50;
    b1.price = b1.price + 10.5;

    printf("%c %.1f %d", b1.name, b1.price, b1.pages);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">C 150.5 300</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">C 161.0 350</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">C 160.5 350</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 144 Explanation:</strong><br>  <a href="https://gateoverflow.in/537779" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the main issue in the following code? Assume both <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">malloc()</mtext> </math> calls succeed.</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt; #include &lt;stdlib.h&gt;  int main() {     int *p = (int *)malloc(sizeof(int));     *p = 5;      p = (int *)malloc(sizeof(int));     *p = 10;      printf("%d", *p);      free(p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {
    int *p = (int *)malloc(sizeof(int));
    *p = 5;

    p = (int *)malloc(sizeof(int));
    *p = 10;

    printf("%d", *p);

    free(p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `It gives compilation error`,
        `It prints <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10</mtext> </math>, but the first allocated memory block is leaked`,
        `It prints <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5</mtext> </math>, and no memory leak occurs`,
        `It gives undefined behavior because <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">p</mtext> </math> is reassigned`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 145 Explanation:</strong><br>  <a href="https://gateoverflow.in/537085" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int x = 25;     void *p = &amp;x;      printf("%d", *(int *)p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int x = 25;
    void *p = &amp;x;

    printf("%d", *(int *)p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">25</mtext> </math>`,
        `Address of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">x</mtext> </math>`,
        `Compilation error`,
        `Undefined behavior`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 146 Explanation:</strong><br>  <a href="https://gateoverflow.in/537075" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What will happen in the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt; #include &lt;stdlib.h&gt;  int main() {     int *p = (int *)malloc(sizeof(int));      *p = 10;     free(p);      printf("%d", *p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {
    int *p = (int *)malloc(sizeof(int));

    *p = 10;
    free(p);

    printf("%d", *p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `It always prints <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10</mtext> </math>`,
        `It always prints <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0</mtext> </math>`,
        `Compilation error`,
        `Undefined behavior due to dangling pointer`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 147 Explanation:</strong><br>  <a href="https://gateoverflow.in/537083" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code? Assume <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">malloc()</mtext> </math> succeeds.</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt; #include &lt;stdlib.h&gt;  int main() {     int *p = (int *)malloc(3 * sizeof(int));      p[0] = 4;     p[1] = 7;     p[2] = p[0] + p[1];      printf("%d", *(p + 2));      free(p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {
    int *p = (int *)malloc(3 * sizeof(int));

    p[0] = 4;
    p[1] = 7;
    p[2] = p[0] + p[1];

    printf("%d", *(p + 2));

    free(p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">11</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 148 Explanation:</strong><br>  <a href="https://gateoverflow.in/537077" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Which of the following correctly describes the declarations?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="int *a[10]; int (*p)[5];" dir="ltr">int *a[10];

int (*p)[5];</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">a</mtext> </math> is a pointer to an array of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math> integers, and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">p</mtext> </math> is an array of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> </math> integer pointers`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">a</mtext> </math> is an array of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math> pointers to integers, and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">p</mtext> </math> is a pointer to an array of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>5</mn> </math> integers`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">a</mtext> </math> is an array of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math> integers, and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">p</mtext> </math> is a pointer to an integer`,
        `Both <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">a</mtext> </math> and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">p</mtext> </math> are arrays of integer pointers`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 149 Explanation:</strong><br>  <a href="https://gateoverflow.in/537071" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[3][2] = {         {1, 2},         {3, 4},         {5, 6}     };      int (*p)[2] = a;      p++;      printf("%d %d %d", (*p)[0], *(*(p + 1) + 1), *(*p + 1));      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[3][2] = {
        {1, 2},
        {3, 4},
        {5, 6}
    };

    int (*p)[2] = a;

    p++;

    printf("%d %d %d", (*p)[0], *(*(p + 1) + 1), *(*p + 1));

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3 6 4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1 6 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3 4 6</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 6 4</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 150 Explanation:</strong><br>  <a href="https://gateoverflow.in/536793" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[2][3] = {         {2, 4, 6},         {8, 10, 12}     };      printf("%d %d %d", a[1][2], *(*(a + 1) + 1), *(*a + 2));      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[2][3] = {
        {2, 4, 6},
        {8, 10, 12}
    };

    printf("%d %d %d", a[1][2], *(*(a + 1) + 1), *(*a + 2));

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">12 10 6</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">12 8 6</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 12 6</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">12 10 4</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 151 Explanation:</strong><br>  <a href="https://gateoverflow.in/536792" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void update(int **q, int *r) {     **q = **q + 5;     *q = r;     **q = **q + 2; }  int main() {     int x = 3, y = 8;     int *p = &amp;x;      update(&amp;p, &amp;y);      printf("%d %d %d", x, y, *p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void update(int **q, int *r) {
    **q = **q + 5;
    *q = r;
    **q = **q + 2;
}

int main() {
    int x = 3, y = 8;
    int *p = &amp;x;

    update(&amp;p, &amp;y);

    printf("%d %d %d", x, y, *p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8 8 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8 10 10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3 10 10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8 10 8</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 152 Explanation:</strong><br>  <a href="https://gateoverflow.in/536791" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a = 5, b = 9;     int *p = &amp;a;     int **q = &amp;p;      *p = *p + 2;     *q = &amp;b;     **q = **q + 3;      printf("%d %d %d", a, b, *p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a = 5, b = 9;
    int *p = &amp;a;
    int **q = &amp;p;

    *p = *p + 2;
    *q = &amp;b;
    **q = **q + 3;

    printf("%d %d %d", a, b, *p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7 9 7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7 12 12</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 12 12</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7 12 7</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 153 Explanation:</strong><br>  <a href="https://gateoverflow.in/536790" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int x = 10;     int *p = &amp;x;     int **q = &amp;p;      **q = **q + 4;     *p = *p + 1;      printf("%d %d", x, **q);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int x = 10;
    int *p = &amp;x;
    int **q = &amp;p;

    **q = **q + 4;
    *p = *p + 1;

    printf("%d %d", x, **q);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">14 14</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">15 15</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 15</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Compilation error</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 154 Explanation:</strong><br>  <a href="https://gateoverflow.in/536789" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void fun(int *p) {     *p = *p + 1;     p++;     *p = *p + 2; }  int main() {     int arr[] = {5, 10, 15};      fun(arr + 1);      printf("%d %d %d", arr[0], arr[1], arr[2]);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void fun(int *p) {
    *p = *p + 1;
    p++;
    *p = *p + 2;
}

int main() {
    int arr[] = {5, 10, 15};

    fun(arr + 1);

    printf("%d %d %d", arr[0], arr[1], arr[2]);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 10 15</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 11 15</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 11 17</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6 12 15</mtext> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 155 Explanation:</strong><br>  <a href="https://gateoverflow.in/536645" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-" data-linenums="true" data-pbcklang="" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void update(int a[]) {     a[0] = a[0] + a[2];     *(a + 1) = *(a + 1) + 5; }  int main() {     int arr[] = {2, 4, 6};      update(arr);      printf("%d %d %d", arr[0], arr[1], arr[2]);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void update(int a[]) {
    a[0] = a[0] + a[2];
    *(a + 1) = *(a + 1) + 5;
}

int main() {
    int arr[] = {2, 4, 6};

    update(arr);

    printf("%d %d %d", arr[0], arr[1], arr[2]);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2 4 6</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8 9 6</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8 4 6</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2 9 6</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 156 Explanation:</strong><br>  <a href="https://gateoverflow.in/536641" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#include &lt;stdio.h&gt;  int main() {     char str[] = {'C', 'S', 'E', '\0', 'X'};      printf(&quot;%s %c&quot;, str, str[4]);      return 0; }" dir="ltr">#include &lt;stdio.h&gt;

int main() {
    char str[] = {'C', 'S', 'E', '\0', 'X'};

    printf("%s %c", str, str[4]);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">CSE X</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">CSEX X</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">CSE \textbackslash0</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Compilation error</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 157 Explanation:</strong><br>  <a href="https://gateoverflow.in/536626" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#include &lt;stdio.h&gt;  void change(char *p) {     p[1] = 'X';     *(p + 3) = '\0'; }  int main() {     char str[] = &quot;GATE&quot;;      change(str);      printf(&quot;%s&quot;, str);      return 0; }" dir="ltr">#include &lt;stdio.h&gt;

void change(char *p) {
    p[1] = 'X';
    *(p + 3) = '\0';
}

int main() {
    char str[] = "GATE";

    change(str);

    printf("%s", str);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">GATE</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">GXTE</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">GXT</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">GX</mtext> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 158 Explanation:</strong><br>  <a href="https://gateoverflow.in/536638" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#include &lt;stdio.h&gt;  int main() {     char str[] = &quot;HELLO&quot;;     char *p = str + 1;      *(p + 2) = 'A';      printf(&quot;%s %c&quot;, str, *p);      return 0; }" dir="ltr">#include &lt;stdio.h&gt;

int main() {
    char str[] = "HELLO";
    char *p = str + 1;

    *(p + 2) = 'A';

    printf("%s %c", str, *p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">HELLO E</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">HELAO E</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">HALLO A</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">HELAO A</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 159 Explanation:</strong><br>  <a href="https://gateoverflow.in/536631" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#include &lt;stdio.h&gt;  int main() {     char str[] = &quot;CODE&quot;;     char *p = str;      p++;     *p = 'A';      printf(&quot;%s %c&quot;, str, *(p + 2));      return 0; }" dir="ltr">#include &lt;stdio.h&gt;

int main() {
    char str[] = "CODE";
    char *p = str;

    p++;
    *p = 'A';

    printf("%s %c", str, *(p + 2));

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">CODE D</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">CADE E</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">CADE D</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">COAE E</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 160 Explanation:</strong><br>  <a href="https://gateoverflow.in/536533" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[] = {5, 10, 15, 20};     int *p = a + 1;      printf("%d %d %td", *(p + 1), p[2], (p + 2) - a);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[] = {5, 10, 15, 20};
    int *p = a + 1;

    printf("%d %d %td", *(p + 1), p[2], (p + 2) - a);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 15 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">15 20 3</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">15 20 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">20 15 3</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 161 Explanation:</strong><br>  <a href="https://gateoverflow.in/536525" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What will happen when the following code is compiled?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[] = {10, 20, 30};      a = a + 1;      printf("%d", *a);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[] = {10, 20, 30};

    a = a + 1;

    printf("%d", *a);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">20</mtext> </math>`,
        `Compilation error`,
        `Undefined behavior`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 162 Explanation:</strong><br>  <a href="https://gateoverflow.in/536529" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     char str[] = "GATE";     char *p = str;      printf("%c %c %s", str[1], *(p + 2), p + 1);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    char str[] = "GATE";
    char *p = str;

    printf("%c %c %s", str[1], *(p + 2), p + 1);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">G A GATE</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">A T ATE</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">A T TE</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">T A ATE</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 163 Explanation:</strong><br>  <a href="https://gateoverflow.in/536531" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>Consider the following declarations:</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[4] = {6, 4, 1, 2};     int b[8] = {9, 8, 11, 10, 5, 7, 0, 3};      int *p = &amp;a[1];     int *q = b;      printf("%p", p + q);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[4] = {6, 4, 1, 2};
    int b[8] = {9, 8, 11, 10, 5, 7, 0, 3};

    int *p = &amp;a[1];
    int *q = b;

    printf("%p", p + q);

    return 0;
}</pre> <p>What will happen?</p> </span>`,
      image: "",
      options: [
        `It prints the sum of two addresses`,
        `It prints the address of <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">a[1] + b[0]</mtext> </math>`,
        `Compilation error`,
        `Undefined behavior after successful compilation`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 164 Explanation:</strong><br>  <a href="https://gateoverflow.in/536527" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-" data-linenums="true" data-pbcklang="" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[] = {2, 4, 6, 8, 10};     int *p = a + 2;      printf("%d %d %td", p[-1], 1[p], p - a);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[] = {2, 4, 6, 8, 10};
    int *p = a + 2;

    printf("%d %d %td", p[-1], 1[p], p - a);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4 8 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6 8 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4 6 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4 8 1</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 165 Explanation:</strong><br>  <a href="https://gateoverflow.in/536408" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[10] = {10, 11, 12, 13, 14, 15, 16, 17, 18, 19};      int *b = a + 4;     int *c = &amp;(a[4]);      printf("%d %d %d", *b, *c, b == c);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[10] = {10, 11, 12, 13, 14, 15, 16, 17, 18, 19};

    int *b = a + 4;
    int *c = &amp;(a[4]);

    printf("%d %d %d", *b, *c, b == c);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">14 14 1</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">14 14 0</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4 4 1</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Compilation error</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 166 Explanation:</strong><br>  <a href="https://gateoverflow.in/536388" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[4] = {6, 4, 1, 2};     int b[8] = {9, 8, 11, 10, 5, 7, 0, 3};      int *p = &amp;a[1];     int *q = b;     int *r = b + 2;      printf("%d %d %td", *p, *(r + 1), r - q);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[4] = {6, 4, 1, 2};
    int b[8] = {9, 8, 11, 10, 5, 7, 0, 3};

    int *p = &amp;a[1];
    int *q = b;
    int *r = b + 2;

    printf("%d %d %td", *p, *(r + 1), r - q);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4 10 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4 11 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6 10 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4 10 3</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 167 Explanation:</strong><br>  <a href="https://gateoverflow.in/536395" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[] = {3, 6, 9, 12, 15};     int *p = a + 1;      printf("%d %d %td", *p, *(p + 2), p - a);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[] = {3, 6, 9, 12, 15};
    int *p = a + 1;

    printf("%d %d %td", *p, *(p + 2), p - a);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3 9 1</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6 12 1</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6 12 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6 9 1</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 168 Explanation:</strong><br>  <a href="https://gateoverflow.in/536389" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[] = {2, 4, 6, 8, 10};      printf("%d %d %d", *a, *(a + 3), 3[a]);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[] = {2, 4, 6, 8, 10};

    printf("%d %d %d", *a, *(a + 3), 3[a]);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2 6 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">2 8 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4 8 10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Compilation error</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 169 Explanation:</strong><br>  <a href="https://gateoverflow.in/536382" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[] = {10, 20, 30, 40};     int *p = a;     int *q = &amp;a[3];      if (p &lt; q)         p = p + 2;     else         q = q - 1;      printf("%d %td", *p, q - p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[] = {10, 20, 30, 40};
    int *p = a;
    int *q = &amp;a[3];

    if (p &lt; q)
        p = p + 2;
    else
        q = q - 1;

    printf("%d %td", *p, q - p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">20 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">30 1</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">30 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">40 1</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 170 Explanation:</strong><br>  <a href="https://gateoverflow.in/536185" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[2][3] = {         {1, 2, 3},         {4, 5, 6}     };      int (*p)[3] = a;      printf("%d %d %d", **p, *(*(p + 1) + 2), *(*p + 1));      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    int (*p)[3] = a;

    printf("%d %d %d", **p, *(*(p + 1) + 2), *(*p + 1));

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1 5 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1 6 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4 6 2</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1 6 3</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 171 Explanation:</strong><br>  <a href="https://gateoverflow.in/536183" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a = 10;     int *p = &amp;a;     int **q = &amp;p;      **q = **q + 5;     *p = *p + 2;      printf("%d %d", a, **q);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a = 10;
    int *p = &amp;a;
    int **q = &amp;p;

    **q = **q + 5;
    *p = *p + 2;

    printf("%d %d", a, **q);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">15 15</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">17 17</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">12 17</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Compilation error</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 172 Explanation:</strong><br>  <a href="https://gateoverflow.in/536175" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[] = {5, 10, 15};     int *p = a;      printf("%d ", (*p)++);     printf("%d ", *p++);     printf("%d ", ++*p);     printf("%d", *++p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[] = {5, 10, 15};
    int *p = a;

    printf("%d ", (*p)++);
    printf("%d ", *p++);
    printf("%d ", ++*p);
    printf("%d", *++p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 6 11 15</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 10 11 15</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6 6 11 15</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 6 10 15</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 173 Explanation:</strong><br>  <a href="https://gateoverflow.in/536181" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void change(int **pp, int *q) {     **pp = **pp + 3;     *pp = q;     **pp = **pp + 4; }  int main() {     int a = 5, b = 10;     int *p = &amp;a;      change(&amp;p, &amp;b);      printf("%d %d %d", a, b, *p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void change(int **pp, int *q) {
    **pp = **pp + 3;
    *pp = q;
    **pp = **pp + 4;
}

int main() {
    int a = 5, b = 10;
    int *p = &amp;a;

    change(&amp;p, &amp;b);

    printf("%d %d %d", a, b, *p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8 10 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8 14 14</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 14 14</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8 14 8</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 174 Explanation:</strong><br>  <a href="https://gateoverflow.in/536177" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void fun(int a[], int *p) {     a[1] = a[1] + 5;     *(p + 2) = *(p + 2) + 10;      p++;     *p = *p + 1; }  int main() {     int arr[] = {1, 2, 3, 4};      fun(arr, arr);      printf("%d %d %d %d", arr[0], arr[1], arr[2], arr[3]);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void fun(int a[], int *p) {
    a[1] = a[1] + 5;
    *(p + 2) = *(p + 2) + 10;

    p++;
    *p = *p + 1;
}

int main() {
    int arr[] = {1, 2, 3, 4};

    fun(arr, arr);

    printf("%d %d %d %d", arr[0], arr[1], arr[2], arr[3]);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1 7 13 4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1 8 13 4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1 8 3 4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1 7 3 4</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 175 Explanation:</strong><br>  <a href="https://gateoverflow.in/536026" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[] = {10, 20, 30};     int *p = a;      printf("%d ", *p++);     printf("%d ", *p);     printf("%d", ++*p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[] = {10, 20, 30};
    int *p = a;

    printf("%d ", *p++);
    printf("%d ", *p);
    printf("%d", ++*p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 20 21</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 20 20</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">11 20 21</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 21 21</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 176 Explanation:</strong><br>  <a href="https://gateoverflow.in/536024" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[] = {3, 5, 7, 9};      printf("%d %d %d", *(a + 1), 2[a], *(2 + a));      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[] = {3, 5, 7, 9};

    printf("%d %d %d", *(a + 1), 2[a], *(2 + a));

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 7 7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 2 7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7 7 5</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Compilation error</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 177 Explanation:</strong><br>  <a href="https://gateoverflow.in/536022" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a[] = {2, 4, 6, 8};     int *p = a;      p = p + 2;      printf("%d %d", *p, p[-1]);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a[] = {2, 4, 6, 8};
    int *p = a;

    p = p + 2;

    printf("%d %d", *p, p[-1]);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6 4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6 6</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">4 6</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">8 6</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 178 Explanation:</strong><br>  <a href="https://gateoverflow.in/536020" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int arr[] = {10, 20, 30};     int *p = arr;      printf("%d %d", *p, *(arr + 2));      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int arr[] = {10, 20, 30};
    int *p = arr;

    printf("%d %d", *p, *(arr + 2));

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 20</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 30</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">20 30</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Compilation error</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 179 Explanation:</strong><br>  <a href="https://gateoverflow.in/536016" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int *p;      printf("%d", *p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int *p;

    printf("%d", *p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Garbage value</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Compilation error</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Undefined behavior</mtext> </math>`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 180 Explanation:</strong><br>  <a href="https://gateoverflow.in/535887" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void change(int *p, int q) {     *p = *p + q;     q = q + 5;     *p = *p + q; }  int main() {     int a = 2, b = 3;      change(&amp;a, b);      printf("%d %d", a, b);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void change(int *p, int q) {
    *p = *p + q;
    q = q + 5;
    *p = *p + q;
}

int main() {
    int a = 2, b = 3;

    change(&amp;a, b);

    printf("%d %d", a, b);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 3</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">13 3</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">13 8</mtext> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 181 Explanation:</strong><br>  <a href="https://gateoverflow.in/535881" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a = 10;     int *p = &amp;a;      *p = *p + 5;     a = a + 2;      printf("%d", *p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a = 10;
    int *p = &amp;a;

    *p = *p + 5;
    a = a + 2;

    printf("%d", *p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">10</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">15</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">17</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Garbage value</mtext> </math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 182 Explanation:</strong><br>  <a href="https://gateoverflow.in/535871" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a = 5, b = 8;     int *p = &amp;a;     int *q = &amp;b;      q = p;     *q = *q + b;      printf("%d %d", a, b);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a = 5, b = 8;
    int *p = &amp;a;
    int *q = &amp;b;

    q = p;
    *q = *q + b;

    printf("%d %d", a, b);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 13</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">13 8</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">13 13</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">5 8</mtext> </math>`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 183 Explanation:</strong><br>  <a href="https://gateoverflow.in/535875" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int main() {     int a = 25;     int *p = &amp;a;      printf("%d %d", a, *p);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int main() {
    int a = 25;
    int *p = &amp;a;

    printf("%d %d", a, *p);

    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">25 25</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">25 address</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">address 25</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">Compilation error</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 184 Explanation:</strong><br>  <a href="https://gateoverflow.in/535865" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void update(int n, int *p) {     if (n &lt;= 0)         return;      *p = *p + n;      update(n - 2, p);      *p = *p + n; }  int main() {     int x = 1;      update(5, &amp;x);      printf("%d", x);      return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void update(int n, int *p) {
    if (n &lt;= 0)
        return;

    *p = *p + n;

    update(n - 2, p);

    *p = *p + n;
}

int main() {
    int x = 1;

    update(5, &amp;x);

    printf("%d", x);

    return 0;
}
</pre> </span>`,
      image: "",
      options: [],
      answer: "19",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 185 Explanation:</strong><br>  <a href="https://gateoverflow.in/535785" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int fun(int n) {     int x = n;      if (n &lt;= 0)         return 0;      x = x + 2;      return x + fun(n - 2); }  int main() {     printf("%d", fun(5));     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int fun(int n) {
    int x = n;

    if (n &lt;= 0)
        return 0;

    x = x + 2;

    return x + fun(n - 2);
}

int main() {
    printf("%d", fun(5));
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "15",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 186 Explanation:</strong><br>  <a href="https://gateoverflow.in/535779" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int fun(int n) {     if (n &lt;= 1)         return n + 1;      if (n % 2 == 0)         return fun(n - 1) + fun(n - 2);      return fun(n - 2) + n; }  int main() {     printf("%d", fun(5));     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int fun(int n) {
    if (n &lt;= 1)
        return n + 1;

    if (n % 2 == 0)
        return fun(n - 1) + fun(n - 2);

    return fun(n - 2) + n;
}

int main() {
    printf("%d", fun(5));
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "10",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 187 Explanation:</strong><br>  <a href="https://gateoverflow.in/535774" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>How many times is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">fun()</mtext> </math> called when the following code is executed? <em>(Count the first call also).</em></p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="#include &lt;stdio.h&gt;  int fun(int n) {     if (n &lt;= 1)         return 1;      return fun(n - 1) + fun(n - 2); }  int main() {     fun(4);     return 0; }" dir="ltr">#include &lt;stdio.h&gt;

int fun(int n) {
    if (n &lt;= 1)
        return 1;

    return fun(n - 1) + fun(n - 2);
}

int main() {
    fun(4);
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "9",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 188 Explanation:</strong><br>  <a href="https://gateoverflow.in/535776" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-" data-linenums="true" data-pbcklang="" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void g(int n);  void f(int n) {     if (n &lt;= 0)         return;      printf("F%d ", n);     g(n - 1);     printf("f%d ", n); }  void g(int n) {     if (n &lt;= 0)         return;      printf("G%d ", n);     f(n - 2);     printf("g%d ", n); }  int main() {     f(4);     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void g(int n);

void f(int n) {
    if (n &lt;= 0)
        return;

    printf("F%d ", n);
    g(n - 1);
    printf("f%d ", n);
}

void g(int n) {
    if (n &lt;= 0)
        return;

    printf("G%d ", n);
    f(n - 2);
    printf("g%d ", n);
}

int main() {
    f(4);
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">F4\ G3\ F1\ f1\ g3\ f4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">F4\ G3\ F1\ g3\ f1\ f4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">F4\ G3\ F2\ f2\ g3\ f4</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">F4\ G3\ f4\ F1\ f1\ g3</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 189 Explanation:</strong><br>  <a href="https://gateoverflow.in/535618" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int fun(int n) {     if (n == 0)         return 1;      return n + fun(n - 1);      printf("%d ", n); }  int main() {     printf("%d", fun(3));     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int fun(int n) {
    if (n == 0)
        return 1;

    return n + fun(n - 1);

    printf("%d ", n);
}

int main() {
    printf("%d", fun(3));
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">6</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">7</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3\ 2\ 1\ 7</mtext> </math>`,
        `Compilation error`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 190 Explanation:</strong><br>  <a href="https://gateoverflow.in/535606" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  void fun(int n) {     static int x = 0;      if (n == 0)         return;      x++;     printf("%d:%d ", n, x);      fun(n - 1);      printf("%d:%d ", n, x); }  int main() {     fun(3);     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

void fun(int n) {
    static int x = 0;

    if (n == 0)
        return;

    x++;
    printf("%d:%d ", n, x);

    fun(n - 1);

    printf("%d:%d ", n, x);
}

int main() {
    fun(3);
    return 0;
}</pre> </span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3:1\ 2:2\ 1:3\ 1:3\ 2:3\ 3:3</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3:1\ 2:2\ 1:3\ 1:1\ 2:2\ 3:3</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">1:1\ 2:2\ 3:3\ 3:3\ 2:2\ 1:1</mtext> </math>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">3:1\ 2:1\ 1:1\ 1:1\ 2:1\ 3:1</mtext> </math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 191 Explanation:</strong><br>  <a href="https://gateoverflow.in/535614" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int fun(int n) {     static int step = 1;      if (n &lt;= 1)         return n;      step++;      return n + fun(n - step); }  int main() {     printf("%d", fun(6));     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int fun(int n) {
    static int step = 1;

    if (n &lt;= 1)
        return n;

    step++;

    return n + fun(n - step);
}

int main() {
    printf("%d", fun(6));
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "11",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 192 Explanation:</strong><br>  <a href="https://gateoverflow.in/535608" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode='#include &lt;stdio.h&gt;  int fun(int n) {     static int sum = 0;     int temp;      if (n &lt;= 0)         return sum;      sum = sum + n;      temp = fun(n - 2);      return temp + sum; }  int main() {     printf("%d", fun(5));     return 0; }' dir="ltr">#include &lt;stdio.h&gt;

int fun(int n) {
    static int sum = 0;
    int temp;

    if (n &lt;= 0)
        return sum;

    sum = sum + n;

    temp = fun(n - 2);

    return temp + sum;
}

int main() {
    printf("%d", fun(5));
    return 0;
}</pre> </span>`,
      image: "",
      options: [],
      answer: "36",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 193 Explanation:</strong><br>  <a href="https://gateoverflow.in/535610" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },



  ]
});

registerTest({
  series: "pw-cs-gate-2026",
  name: "TWT-c programming",
  date: "sep 04, 2026",
  questions: [
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> Consider the following ANSI-C function.
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode=" int func(int start, int end){
  	int length=end+1-start;
  	if((length<1)||(start<0)||(end<0)){ return(0); }
  	if(length%3==0){
  		return(func(start+1, end));
  	}else if(length%3==1){
  		return(1+func(start, end-1));
  	}else {
  		return(func(start+2, end));
  	}
 } "> int func(int start, int end){
  	int length=end+1-start;
  	if((length&lt;1)||(start&lt;0)||(end&lt;0)){ return(0); }
  	if(length%3==0){
  		return(func(start+1, end));
  	}else if(length%3==1){
  		return(1+func(start, end-1));
  	}else {
  		return(func(start+2, end));
  	}
 } </pre>The maximum possible value that can be returned from this function is ________. (answer in integer)
                <br>Note: Ignore syntax errors (if any) in the function. </span>`,
      image: "",
      options: [

      ],
      answer: "1",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523095/gate-cse-2026-set-2-question-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> Consider the recursive functions represented by the following code
                segment:
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="int bar(int n) {
  if (n == 1) return 0;
  else return 1 + bar(n/2);
 }
 int foo(int n) {
  if (n == 1) return 1;
  else return 1 + foo(bar(n));
 } ">int bar(int n) {
  if (n == 1) return 0;
  else return 1 + bar(n/2);
 }
 int foo(int n) {
  if (n == 1) return 1;
  else return 1 + foo(bar(n));
 } </pre>The smallest positive integer n for which <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <semantics>
                                    <mrow>
                                        <mtext>foo(n)</mtext>
                                    </mrow>
                                    <annotation encoding="application/x-tex">\text{foo(n)}</annotation>
                                </semantics>
                            </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord text"><span class="mord">foo(n)</span></span></span></span></span></span> returns
                <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <semantics>
                                    <mrow>
                                        <mn>5</mn>
                                    </mrow>
                                    <annotation encoding="application/x-tex">5</annotation>
                                </semantics>
                            </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">5</span></span></span></span></span> is ________. (answer in integer)
                <br>Note: Ignore syntax errors (if any) in the function. </span>`,
      image: "",
      options: [

      ],
      answer: "65536",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523029/gate-cse-2026-set-1-question-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> Consider the following program in C:
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode=" #include < stdio.h >
 void func(int i, int j) {
  if(i < j) {
  	int i = 0;
  	while (i < 10) {
  		j += 2;
  		i++;
  	}
  }
  printf(&quot;%d&quot;, i);
 }
 int main() {
  	int i = 9, j = 10;
  	func(i, j);
  	return 0;
 }"> #include &lt; stdio.h &gt;
 void func(int i, int j) {
  if(i &lt; j) {
  	int i = 0;
  	while (i &lt; 10) {
  		j += 2;
  		i++;
  	}
  }
  printf("%d", i);
 }
 int main() {
  	int i = 9, j = 10;
  	func(i, j);
  	return 0;
 }</pre> The output of the program is ________. (answer in integer)<br> Note: Assume that the program compiles
                and runs successfully. </span>`,
      image: "",
      options: [

      ],
      answer: "9",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523056/gate-cse-2026-set-1-question-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> Consider the following C program:
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="
#include < stdio.h >

int g(int n) {
    return (n+10);
}

int f(int n) {
    return g(n*2);
}

int main() {
    int sum, n;
    sum=0;
    for (n=1; n<3; n++)
        sum += g(f(n));
    printf (&quot;%d&quot;, sum);
    return 0;
}
">
#include &lt; stdio.h &gt;

int g(int n) {
    return (n+10);
}

int f(int n) {
    return g(n*2);
}

int main() {
    int sum, n;
    sum=0;
    for (n=1; n&lt;3; n++)
        sum += g(f(n));
    printf ("%d", sum);
    return 0;
}
</pre>
                The output of the given C program is ________. (Answer in integer) </span>`,
      image: "",
      options: [

      ],
      answer: "46",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460840/gate-cse-2025-set-2-question-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="#include < stdio.h >  
int foo(int S[],int size){  
    if(size == 0) return 0;  
    if(size == 1) return 1;  
    if(S[0] != S[1]) return 1+foo(S+1,size-1);  
    return foo(S+1,size-1);  
}  
int main(){  
    int A[]={0,1,2,2,2,0,0,1,1};  
    printf(&quot;%d&quot;,foo(A,9));  
    return 0;  
}  
">#include &lt; stdio.h &gt;  
int foo(int S[],int size){  
    if(size == 0) return 0;  
    if(size == 1) return 1;  
    if(S[0] != S[1]) return 1+foo(S+1,size-1);  
    return foo(S+1,size-1);  
}  
int main(){  
    int A[]={0,1,2,2,2,0,0,1,1};  
    printf("%d",foo(A,9));  
    return 0;  
}  
</pre>The value printed by the given C program is _________. (Answer in integer). </span>`,
      image: "",
      options: [

      ],
      answer: "5",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460029/gate-cse-2025-set-1-question-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.66,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following C program. Assume parameters to a function
                are evaluated
                from right to left.
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="#include &lt; stdio.h &gt;
int g(int p) { printf(&quot;%d&quot;, p); return p; }
int h(int q) { printf(&quot;%d&quot;, q); return q; }
void f(int x, int y) {
g(x);
h(y);
}
int main() {
f(g(10),h(20));
}">#include &lt; stdio.h &gt;
int g(int p) { printf("%d", p); return p; }
int h(int q) { printf("%d", q); return q; }
void f(int x, int y) {
g(x);
h(y);
}
int main() {
f(g(10),h(20));
}</pre>
                Which one of the following options is the CORRECT output of the above
                C program?
            </span>`,
      image: "",
      options: [
        `<span style="display: inline;">20101020</span>`,
        `<span style="display: inline;">10202010</span>`,
        `<span style="display: inline;">20102010</span>`,
        `<span style="display: inline;">10201020</span>`
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422894/gate-cse-2024-set-2-question-3#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.66,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following C program:
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="#include &lt; stdio.h &gt;
void fX();
int main(){
fX();
return 0;}

void fX(){
char a;
if((a=getchar()) != '
')
fX();
if(a != '
')
putchar(a);}">#include &lt; stdio.h &gt;
void fX();
int main(){
fX();
return 0;}

void fX(){
char a;
if((a=getchar()) != '
')
fX();
if(a != '
')
putchar(a);}</pre>
                Assume that the input to the program from the command line is 1234 followed by
                a newline character. Which one of the following statements is CORRECT?
            </span>`,
      image: "",
      options: [
        `<span style="display: inline;">The program will not terminate</span>`,
        `<span style="display: inline;">The program will terminate with no output</span>`,
        `<span style="display: inline;">The program will terminate with 4321 as output</span>`,
        `<span style="display: inline;">The program will terminate with 1234 as output</span>`
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422833/gate-cse-2024-set-1-question-9#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following program:<br/>
<pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="int main()
{
  f1();
  f2(2);
  f3();
  return(0);
}

int f1()
{
  return(1);
}

int f2(int X)
{
  f3();
  if (X==1)
     return f1();
  else
     return (X*f2(X-1));
}

int f3()
{
  return(5);
}">int main()
{
  f1();
  f2(2);
  f3();
  return(0);
}

int f1()
{
  return(1);
}

int f2(int X)
{
  f3();
  if (X==1)
     return f1();
  else
     return (X*f2(X-1));
}

int f3()
{
  return(5);
}
</pre><br/>Which one of the following options represents the activation tree corresponding to
                the main function?<br/><img class="entered litespeed-loaded" data-lazyloaded="1" data-ll-status="loaded" data-src="images/quiz/twt-os-7/q26.jpg" decoding="async" src="images/quiz/twt-os-7/q26.jpg"/></span>`,
      image: "",
      options: [
        `<span style="display: inline;">A</span>`,
        `<span style="display: inline;">B</span>`,
        `<span style="display: inline;">C</span>`,
        `<span style="display: inline;">D</span>`
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399285/gate-cse-2023-question-26#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;">The integer value printed by the ANSI-C program given below is
                ______.<br/>
<pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="#include &lt; stdio.h &gt;
int funcp(){
   static int x = 1;
   x++;
   return x;
}
int main(){
   int x,y;
   x = funcp();
   y = funcp()+x;
   printf(&quot;%d
&quot;, (x+y));
   return 0;
}">#include &lt; stdio.h &gt;
int funcp(){
   static int x = 1;
   x++;
   return x;
}
int main(){
   int x,y;
   x = funcp();
   y = funcp()+x;
   printf("%d
", (x+y));
   return 0;
}</pre>
</span>`,
      image: "",
      options: [
      ],
      answer: "7",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399286/gate-cse-2023-question-25#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;">Consider the following ANSI C program
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="#include &lt; stdio.h &gt;
int foo(int x, int y, int q) 
    {
        if ((x &lt; = 0) &amp;&amp; (y &lt; = 0))
        return q;
        if (x &lt; = 0)
        return foo(x, y-q, q);
        if (y &lt; = 0)
        return foo(x-q, y, q);
        return foo(x, y-q, q) + foo(x-q, y, q);
    }
int main( )
{
    int r = foo(15, 15, 10);
    printf(&quot;%d&quot;, r);
    return 0;
}">#include &lt; stdio.h &gt;
int foo(int x, int y, int q) 
    {
        if ((x &lt; = 0) &amp;&amp; (y &lt; = 0))
        return q;
        if (x &lt; = 0)
        return foo(x, y-q, q);
        if (y &lt; = 0)
        return foo(x-q, y, q);
        return foo(x, y-q, q) + foo(x-q, y, q);
    }
int main( )
{
    int r = foo(15, 15, 10);
    printf("%d", r);
    return 0;
}</pre> The output of the program upon execution is ____
            </span>`,
      image: "",
      options: [
      ],
      answer: "60",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357488/gate-cse-2021-set-2-question-49#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;">Consider the following ANSI C function:
                <pre><code>int SomeFunction (int x, int y)
{
    if ((x==1) || (y==1)) return 1;
    if (x==y) return x;
    if (x &gt; y) return SomeFunction(x-y, y);
    if (y &gt; x) return SomeFunction (x, y-x);
 
} </code></pre>The value returned by SomeFunction(15, 255) is __________
            </span>`,
      image: "",
      options: [
      ],
      answer: "15",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357517/gate-cse-2021-set-2-question-23#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;">Consider the following ANSI C function:
                <pre><code> int SimpleFunction(int Y[], int n, int x)
{
int total = Y[0], loopIndex;
for (loopIndex=1; loopIndex&lt;=n-1; loopIndex++)
    total=x*total +Y[loopIndex];
return total;
}</code></pre> Let Z be an array of 10 elements with Z[i]=1, for all i such that <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow>
<mn>0</mn>
<mo>≤</mo>
<mi>i</mi>
<mo>≤</mo>
<mn>9</mn>
</mrow>
<annotation encoding="application/x-tex">0\leq i \leq 9</annotation>
</semantics>
</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span class="strut" style="height: 0.7804em; vertical-align: -0.136em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.7955em; vertical-align: -0.136em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">9</span></span></span></span></span>. The value returned by
                SimpleFunction(Z,10,2) is __________
            </span>`,
      image: "",
      options: [
      ],
      answer: "1023",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357403/gate-cse-2021-set-1-question-48#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.66,
      type: "MCQ",
      text: `<span style="display: inline;">In the following procedure<br/>
<pre><code> Integer procedure P(X,Y);
Integer X,Y;
value x;
begin
      K=5;
      L=8;
      P=x+y;
end</code></pre>X is called by value and Y is called by name. If the procedure were invoked by the following program
                fragment<br/>
<pre><code> K=0;
L=0;
Z=P(K,L);</code></pre>then the value of Z will be set equal to
            </span>`,
      image: "",
      options: [
        `<span style="display: inline;">5</span>`,
        `<span style="display: inline;">8</span>`,
        `<span style="display: inline;">13</span>`,
        `<span style="display: inline;">0</span>`
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331379/isro2020-78" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.66,
      type: "MCQ",
      text: `<span style="display: inline;">What is the output in a 32 bit machine with 32 bit compiler?<br/>
<pre><code> #include &lt; stdio.h &gt;
rer(int **ptr2, int **ptr1)
{
    int *ii;
    ii=*ptr2;
    *ptr2=*ptr1;
    *ptr1=ii;
    **ptr1*=**ptr2;
    **ptr2+=**ptr1;
}
void main(){
    int var1=5, var2=10;
    int *ptr1=&amp;var1,*ptr2=&amp;var2;
    rer(&amp;ptr1,&amp;ptr2);
    printf("%d %d",var2,var1);
}</code></pre>
</span>`,
      image: "",
      options: [
        `<span style="display: inline;">60,70</span>`,
        `<span style="display: inline;">50,50</span>`,
        `<span style="display: inline;">50,60</span>`,
        `<span style="display: inline;">60,50</span>`
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331226/isro2020-63" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.66,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following recursive C function that takes two
                arguments<br/>
<pre><code> unsigned int rer(unsigned int n, unsigned int r){
    if(n&gt;0)return(n%r + rer(n/r,r));
    else retturn 0;
}</code></pre>What is the return value of the function rer when it is called as rer(513,2)?
            </span>`,
      image: "",
      options: [
        `<span style="display: inline;">9</span>`,
        `<span style="display: inline;">8</span>`,
        `<span style="display: inline;">5</span>`,
        `<span style="display: inline;">2</span>`
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331460/isro2020-59" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
  ]
});

registerTest({
  series: "pw-cs-gate-2026",
  name: "TWT-c programming-2",
  date: "sep 04, 2026",
  questions: [
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> Consider the following C functions. <br><img src="images/twt-c-programming-2/q16.jpg"><br>The value returned by pp(3,4) is _____ </span>`,
      image: "",
      options: [

      ],
      answer: "81",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333183/gate2020-cs-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;"> Consider the following C functions. <br><img src="images/twt-c-programming-2/q17.jpg"><br>The return value of fun2(5) is ______ </span>`,
      image: "",
      options: [

      ],
      answer: "55",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333185/gate2020-cs-46#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following C program:
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;">#include &lt; stdio.h &gt;
int r(){
 int static num=7;
 return num--;
}
int main() {
 for(r();r();r()) {
  printf("%d ",r());
  };
 return 0;
}</pre>
Which one of the following values will be displayed on execution of the programs?
</span>`,
      image: "",
      options: [
        `<span style="display: inline;">41</span>`,
        `<span style="display: inline;">52</span>`,
        `<span style="display: inline;">63</span>`,
        `<span style="display: inline;">630</span>`
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302821/gate2019-cs-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following C program:
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;">void convert(int n) {
  if (n&lt;0)
    printf("%d",n);
  else {
    convert(n/2);
    printf("%d",n%2);
  }
}</pre>
Which one of the following will happen when the function convert is called with any positive integer n as argument?
</span>`,
      image: "",
      options: [
        `<span style="display: inline;">It will print the binary representation of n and terminate.</span>`,
        `<span style="display: inline;">It will print the binary representation of n in the reverse order and terminate.</span>`,
        `<span style="display: inline;">It will print the binary representation of n but will not terminate.</span>`,
        `<span style="display: inline;">It will not print anything and will not terminate.</span>`
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302822/gate2019-cs-26#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;">Consider the following C program:
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;">#include &lt;stdio.h&gt;
  int jumble(int x, int y) {
    x = 2 * x + y;
    return x;
  }
int main() {
  int x = 2, y = 5;
  y = jumble(y, x);
  x = jumble(y, x);
  printf("%d\n", x);
  return 0;
}</pre>
The value printed by program is __________ .
</span>`,
      image: "",
      options: [
      ],
      answer: "26",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302830/gate2019-cs-18#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following C code segment<br>
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int f(int x)
{
    if(x&lt;1) return 1;
    else return (f(x-1) + g(x));
}
int g(int x)
{
    if(x&lt;2) return 2;
    else return (f(x-1) + g(x/2));
}</code></pre>Of the following, which best describes the growth of f(x) as a function of x ?</span>`,
      image: "",
      options: [
        `<span style="display: inline;">Linear</span>`,
        `<span style="display: inline;">Exponential</span>`,
        `<span style="display: inline;">Quadratic</span>`,
        `<span style="display: inline;">Cubic</span>`
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213516/isro2018-72" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following C++ program<br>
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int a (int m)
{return ++m;}
int b(int&amp;m)
{return ++m;}
int{char &amp;m}
{return ++m;}
void main()
{             
       int p = 0, q=0, r = 0;
       p += a(b(p)) ;
       q+= b(a(q);)
       r+=a(c(r));
       cout &lt;&lt; p &lt;&lt; q &lt;&lt; r;
}</code></pre> Assuming the required header first are already included, the above program</span>`,
      image: "",
      options: [
        `<span style="display: inline;">results in compilation error</span>`,
        `<span style="display: inline;">print 123</span>`,
        `<span style="display: inline;">print 111</span>`,
        `<span style="display: inline;">print 322</span>`
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213545/isro2018-43" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">A language with string manipulation facilities uses the following operations.<br><br> head(s)- returns the first character of the string s<br>tails(s)- returns all but the first character of the string s<br>concat(s1,s2)- concatenates string s1 with s2.<br> <br>The output of concat(head(s), head(tail(tail(s)))), where s is acbc is:</span>`,
      image: "",
      options: [
        `<span style="display: inline;">ab</span>`,
        `<span style="display: inline;">ba</span>`,
        `<span style="display: inline;">ac</span>`,
        `<span style="display: inline;">aa</span>`
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213580/isro2018-8" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;">Consider the following program written in pseudo-code. Assume that x and y are integers.
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>Count(x,y) {
     if (y != 1){
        if (x != 1) {
                  print("*");
                  Count(x/2, y);
                  }
            else {
                     y = y-1;
                    Count(1024, y);
                  }
      }
} </code></pre>
The number of times that the print statement is executed by the call Count(1024,1024) is _____.</span>`,
      image: "",
      options: [

      ],
      answer: "10230",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204120/gate2018-45#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following C program:
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;">#include &lt; stdio.h &gt;
void fun1(char *s1, char *s2){
char *tmp;
tmp = s1;
s1 = s2;
s2 = tmp;
}
void fun2(char **s1, char **s2){
char *tmp;
tmp = *s1;
*s1 = *s2;
*s2 = tmp;
}
int main(){
char *str1 = "Hi", *str2 = "Bye";
fun1(str1, str2); 
printf("%s %s ", str1, str2); 
fun2(&amp;str1, &amp;str2); 
printf("%s %s", str1, str2);
return 0;
}</pre>
The output of the program above is</span>`,
      image: "",
      options: [
        `<span style="display: inline;">Hi Bye Bye Hi</span>`,
        `<span style="display: inline;">Hi Bye Hi Bye</span>`,
        `<span style="display: inline;">Bye Hi Hi Bye</span>`,
        `<span style="display: inline;">Bye Hi Bye Hi</span>`
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204103/gate2018-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "NAT",
      text: `<span style="display: inline;">Consider the following C program:
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>  #include &lt; stdio.h &gt;
int counter = 0;
int calc (int a, int b) {
    int c;
    counter++;
    if (b==3) return (a*a*a);
    else {
       c = calc(a, b/3);
       return (c*c*c);
           }
}
int main (){
calc(4, 81);
printf ("%d", counter);
}</code></pre> The output of this program is _____.</span>`,
      image: "",
      options: [
      ],
      answer: "None",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204095/gate2018-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">What is the output of the following program?<br>
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int tmp=20;
main()
{
  printf("%d", tmp);
  func();
  printf("%d", tmp);

}
func()
{
 static int tmp=10;
 printf("%d", tmp);
}</code></pre></span>`,
      image: "",
      options: [
        `<span style="display: inline;">20 10 10</span>`,
        `<span style="display: inline;">20 10 20</span>`,
        `<span style="display: inline;">20 20 20</span>`,
        `<span style="display: inline;">10 10 10</span>`
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128754/isro2017-64" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">What does the following C-statement declare?<br>
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int (*f) (int * );</code></pre></span>`,
      image: "",
      options: [
        `<span style="display: inline;">A function that takes an integer pointer as argument and returns an
                                integer</span>`,
        `<span style="display: inline;">A function that takes an integer as argument and returns an integer
                                pointer</span>`,
        `<span style="display: inline;">A pointer to a function that takes an integer pointer as argument
                                and returns an integer</span>`,
        `<span style="display: inline;">A function that takes an integer pointer as argument and returns a
                                function pointer</span>`
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1343/gate2005-1-isro2017-55" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following function<br>
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> void swap(int a, int b)  
{       
    int temp;
    temp = a;
    a = b;
    b = temp;  
}  </code></pre>In order to exchange the values of two variables x and y.</span>`,
      image: "",
      options: [
        `<span style="display: inline;">call swap(x,y)</span>`,
        `<span style="display: inline;">call swap(&amp;x,&amp;y)</span>`,
        `<span style="display: inline;">swap(x,y) cannot be used as it does not return any value</span>`,
        `<span style="display: inline;">swap(x,y) cannot be used as the parameters are passed by value</span>`
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/999/gate2004-2-isro2017-54" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">What is the output of the C++ program?<br>
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; iostream &gt;
using namespace std;

void square(int *x){
    *x = (*x)++ * (*x);
}

void square(int *x, int *y){
    *x = (*x) * --(*y);
}

int main()
{
  int number = 30;
  square(&amp;number, &amp;number);
  cout &lt; &lt; number;
  return 0;
}</code></pre></span>`,
      image: "",
      options: [
        `<span style="display: inline;">910</span>`,
        `<span style="display: inline;">920</span>`,
        `<span style="display: inline;">870</span>`,
        `<span style="display: inline;">900</span>`
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128615/isro2017-41" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "NAT",
      text: `<span style="display: inline;">The output of executing the following C program is ________.
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> # include <stdio.h>
int total (int v) {
while (v) {
    static int count + = v &amp; 1;
    v&gt;&gt; = 1;
 }
    return count;
 }
void main ( ) {
static int x = 0;
int i = 5;
for (; i&gt; 0; i--) {
x=x + total (i) ; 
}
printf ("%d
", x) ; } </stdio.h></code></pre></span>`,
      image: "",
      options: [
      ],
      answer: "23",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118442/gate2017-1-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the C functions foo and bar given below:
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int foo (int val ) {
    int x = 0;
    while (val &gt; 0) {
    x = x + foo(val--);
}
   return val ;
}
int bar (int val ) {
int x = 0;
while (val &gt; 0) {
    x = x + bar(val-1);}
    return val ;
}</code></pre>
                Invocations of foo(3) and bar(3) will result in:</span>`,
      image: "",
      options: [
        `<span style="display: inline;">Return of 6 and 6 respectively.</span>`,
        `<span style="display: inline;">Infinite loop and abnormal termination respectively.</span>`,
        `<span style="display: inline;">Abnormal termination and infinite loop respectively.</span>`,
        `<span style="display: inline;">Both terminating abnormally</span>`
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118319/gate2017-1-36#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following two functions.
                <br><img src="images/twt-c-programming-2/q52.jpg">
                The output printed when fun1(5) is called is</span>`,
      image: "",
      options: [
        `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math
                                                xmlns="http://www.w3.org/1998/Math/MathML">
                                                <semantics>
                                                    <mrow>
                                                        <mn>53423122233445</mn>
                                                    </mrow>
                                                    <annotation encoding="application/x-tex">53423122233445</annotation>
                                                </semantics>
                                            </math></span><span class="katex-html" aria-hidden="true"><span
                                                class="base"><span class="strut" style="height: 0.6444em;"></span><span
                                                    class="mord">53423122233445</span></span></span></span></span></span>`,
        `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math
                                                xmlns="http://www.w3.org/1998/Math/MathML">
                                                <semantics>
                                                    <mrow>
                                                        <mn>53423120112233</mn>
                                                    </mrow>
                                                    <annotation encoding="application/x-tex">53423120112233</annotation>
                                                </semantics>
                                            </math></span><span class="katex-html" aria-hidden="true"><span
                                                class="base"><span class="strut" style="height: 0.6444em;"></span><span
                                                    class="mord">53423120112233</span></span></span></span></span></span>`,
        `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math
                                                xmlns="http://www.w3.org/1998/Math/MathML">
                                                <semantics>
                                                    <mrow>
                                                        <mn>53423122132435</mn>
                                                    </mrow>
                                                    <annotation encoding="application/x-tex">53423122132435</annotation>
                                                </semantics>
                                            </math></span><span class="katex-html" aria-hidden="true"><span
                                                class="base"><span class="strut" style="height: 0.6444em;"></span><span
                                                    class="mord">53423122132435</span></span></span></span></span></span>`,
        `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math
                                                xmlns="http://www.w3.org/1998/Math/MathML">
                                                <semantics>
                                                    <mrow>
                                                        <mn>53423120213243</mn>
                                                    </mrow>
                                                    <annotation encoding="application/x-tex">53423120213243</annotation>
                                                </semantics>
                                            </math></span><span class="katex-html" aria-hidden="true"><span
                                                class="base"><span class="strut" style="height: 0.6444em;"></span><span
                                                    class="mord">53423120213243</span></span></span></span></span></span>`
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118317/gate2017-1-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">Which one of the following is correct about the statements given
                below?<br>I. All function calls are resolved at compile time in C lang<br>
                II. All function calls are resolved at compile time in C++ lang</span>`,
      image: "",
      options: [
        `<span style="display: inline;">Only II is correct</span>`,
        `<span style="display: inline;">Both I and II are correct</span>`,
        `<span style="display: inline;">Only I is correct</span>`,
        `<span style="display: inline;">Both I and II are incorrect</span>`
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55534/isro2016-79" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "NAT",
      text: `<span style="display: inline;">Consider thefollowingprogram:
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
int f(int*p, int n)
{
   if (n&lt;=1)return0;
    else returnmax(f(p+1,n-1),p[0]-p[1]);
}
int main()
{
    int a[]={3,5,2,6,4};
    printf("%d", f(a,5));
 }</code></pre>
                Note: max(x,y) returns the maxi mumof x and y.
                The value printed by this program is____________ .</span>`,
      image: "",
      options: [
      ],
      answer: "3",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39602/gate2016-2-37#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    }
    ,
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;">The value printed by the following program is .
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
void f(int*p, int m){
     m =m+5;
     *p =*p+m;
      return;
}
void main(){
     int i=5, j=10;
     f(&amp;i, j);
     printf("%d", i+j);
}</code></pre></span>`,
      image: "",
      options: [

      ],
      answer: "30",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39565/gate2016-2-12#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<span style="display: inline;">What will be the output of the following pseudo-code when
                parameters are passed by reference and dynamic scoping is assumed?
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
a=3;
void n(x){x=x*a;  print(x);}
void m(y){a=1;a=y-a;n(a);print(a);}
void main(){m(a);}</code></pre></span>`,
      image: "",
      options: [
        `<span style="display: inline;">6,2</span>`,
        `<span style="display: inline;">6,6</span>`,
        `<span style="display: inline;">4,2</span>`,
        `<span style="display: inline;">4,4</span>`
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39701/gate2016-1-36#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<span style="display: inline;">What will be the output of the following C program?
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
void count(intn){
   static intd=1;
   printf("%d ",n);
   printf("%d ",d);
   d++;
   if(n&gt;1) count(n-1);
   printf("%d ",d);
}
void main(){
    count(3);
}</code></pre></span>`,
      image: "",
      options: [
        `<span style="display: inline;">312213444</span>`,
        `<span style="display: inline;">312111222</span>`,
        `<span style="display: inline;">3122134</span>`,
        `<span style="display: inline;">3121112</span>`
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39730/gate2016-1-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;">Consider the following C program.
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;
void mystery(int *ptra,int *ptrb){
   int *temp;
   temp =ptrb; 
   ptrb =ptra;
   ptra =temp;
}
int main(){
   int a=2016,b=0,c=4,d=42;
   mystery(&amp;a, &amp;b);
   if (a &lt; c)
            mystery(&amp;c, &amp;a);
   mystery(&amp;a, &amp;d);
   printf("%d\n", a);
}</code></pre>
                The output of the program is _________.</span>`,
      image: "",
      options: [

      ],
      answer: "2016",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39642/gate2016-1-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">Consider the following C program.
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> void f(int,short);
void main()
{
int i=100;
short s=12;
short *p=&amp;s;
__________ ;//calltof()
} </code></pre> Which one of the following expressions, when placed in the blank above, will NOT result in a typec
                hecking error?</span>`,
      image: "",
      options: [
        `<span style="display: inline;">f(s,*s)</span>`,
        `<span style="display: inline;">i=f(i,s)</span>`,
        `<span style="display: inline;">f(i,*s)</span>`,
        `<span style="display: inline;">f(i,*p)</span>`
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39638/gate2016-1-12#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
  ]
});

