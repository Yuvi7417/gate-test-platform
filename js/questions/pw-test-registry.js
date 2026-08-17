
registerTest({
  series: "pw-cs-gate-2026",
  name: "SWt - C programming",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `Consider the following expression using variable
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">-p + q - r + - s % t / u;</code></pre>
Which of the following are TRUE ?`,
      image: "",
      options: ["p = 2, q = 11, r = 7, s = -9, t = 6, u = 2 the expression evaluated to 3", "p = 2, q = 11, r = 7, s = 9, t = 6, u = 2 the expression evaluated to 1", "p = 2, q = 11, r = 7, s = -9, t = 6 , u = 3 the expression evaluated to 2", "p = 2, q = 10, r = 7, s = -9, t = 6 , u = 2 the expression evaluated to 3"],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/pw-c-prog/q_img2.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `What will be output if you will execute following c code?
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;
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
      text: `Consider the following C-declaration and assignments.
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">char *a, *b, c[10], d[10];</code></pre>
Which assignments will result in error ?`,
      image: "",
      options: ["a = b; // Line 1", "b = c++; // Line", "c = d; // line 3", "*b = d[1]; // Line 4"],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/pw-c-prog/q_img6.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `What will be output if you will execute following c code?

<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

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
      text: `consider the following C-Prog

<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;
int foo(int n)
{
int j=1,i;

if (n==1) return j;

for (i=1; i&lt;n; ++i)
j = j + foo(n-i)+foo(i);

return j;
}</code></pre>

The return value of foo(6) is _________`,
      image: "",
      options: [],
      answer: "243",
      solution: `<img src="/images/quiz/pw-c-prog/q_img10.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the following C program

<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c"># include &lt;stdio.h&gt;
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
}</code></pre>

What will be the output of the program?`,
      image: "",
      options: [],
      answer: "30",
      solution: `<img src="/images/quiz/pw-c-prog/q_img12.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following program

<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

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
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;
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

}</code></pre>
The output of the program is _______`,
      image: "",
      options: ["13", "80", "20", "8"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img16.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Find the output of the following program.

<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c"># include &lt;stdio.h&gt;

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

}</code></pre>

The output of the above program is_____`,
      image: "",
      options: ["20", "25", "24", "23"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img18.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following function written in the C programming language.
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

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

}</code></pre>

What is the output of the above C program?`,
      image: "",
      options: ["abcd", "bdbd", "bddb", "bbdd"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img20.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

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
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

int main (int argc, char* argv [])
{
char a = 'R';
char b = 'j';
char c = ++a|b? (a-- &amp; b)+'*':(b^a) - '-';
char d = (c-- ^ b) + '*' ;
char e = (~c + c + 67);
printf ("%c %c %c", c,d,e);
return 0;
}</code></pre>
ASCII encoding for relevant characters is given below

<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">*  = 42
+  = 43
-  = 45</code></pre>

output of the program is ________`,
      image: "",
      options: ["Z k s", "k 0 B", "L 0 A", "N t 9"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-c-prog/q_img24.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

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
}</code></pre>
Output of the program is ________`,
      image: "",
      options: [],
      answer: "104",
      solution: `<img src="/images/quiz/pw-c-prog/q_img26.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The integer value printed by the ANSI-C program given below is.
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

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
      text: `Consider the following program.
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

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
}</code></pre>
The output of the function is________`,
      image: "",
      options: ["11", "5", "33", "4"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img30.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `consider the following c-prog.

<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int a []={61,72,18,81,64,87 };
int b []={43,89,83,91 };
int*x[]={a, a+3, b+2, b, b+3 };
int main(){
int **ptr;
ptr = x;
++ptr;
printf ("%d",*ptr[1]+3+*(ptr[1]-2));
return 0;
}</code></pre>

what will be the output of the above program?`,
      image: "",
      options: [],
      answer: "129",
      solution: `<img src="/images/quiz/pw-c-prog/q_img32.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;
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
}</code></pre>
The output of the above program is______`,
      image: "",
      options: ["11", "9", "8", "10"],
      answer: "A",
      solution: `<img src="/images/quiz/pw-c-prog/q_img34.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

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

}</code></pre>
The output of the program is ______`,
      image: "",
      options: ["66", "76", "55", "146"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-c-prog/q_img36.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

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
}</code></pre>

The value printed by the program is _____`,
      image: "",
      options: [],
      answer: "116",
      solution: `<img src="/images/quiz/pw-c-prog/q_img38.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

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

}</code></pre>
The output of the program is ______`,
      image: "",
      options: ["2740", "1715", "1035", "4445"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-c-prog/q_img40.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int main(){

char s[]={'a','b','c','\n','c','\0'};

char *p,*str,*str1;

printf("%s",s);

p=&amp;s[3];

str=p;

str1=s;

printf("%d",*++p + ++*str1-32);

return 0;

}</code></pre>
The value printed by above program is ________

<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">'\n' ASCII value is 10</code></pre>`,
      image: "",
      options: ["abcc165", "abc165", "abc\nc165", "abc\nc75"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img42.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following C program?
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

int fun(int n){

int i, j = 1, sum = 0;

for (i = 1; i &lt; n; i = i*2, j++)

sum = sum + i+ 2*j;

return sum;

}

int main(){

printf("%d",fun(100));

}</code></pre>
Which of the following is output of the above program?`,
      image: "",
      options: ["243", "183", "100", "111"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-c-prog/q_img44.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

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

}</code></pre>
The output of the program is __________`,
      image: "",
      options: ["61", "19", "40", "120"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-c-prog/q_img46.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

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

}</code></pre>
The output of the program is _______`,
      image: "",
      options: [],
      answer: "5",
      solution: `<img src="/images/quiz/pw-c-prog/q_img48.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include&lt;stdio.h&gt;

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

}</code></pre>
The output of the program is __________`,
      image: "",
      options: [],
      answer: "14",
      solution: `<img src="/images/quiz/pw-c-prog/q_img50.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following two functions.
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">void fun1 (int n){

if (n ==0 ) return;

printf ("%d" , n);

fun2 (n - 3);

}

void fun2 (int n){

if (n == 0) return ;

fun1(++n) ;

printf ("%d" , n);

}</code></pre>
The output printed when fun1(8) is called is__________`,
      image: "",
      options: ["86420146", "86420247", "86420246", "87420246"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img52.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

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

}</code></pre>
The Output of the program is ________`,
      image: "",
      options: [],
      answer: "40",
      solution: `<img src="/images/quiz/pw-c-prog/q_img54.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following recursive definition of fib:
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">int fib(int n) {

if (n==0||n==1)

return n;

else

return fib(n-1)+fib(n-2);

}</code></pre>
The number of times '+' will be done for an evaluation of fib (8) is __________`,
      image: "",
      options: [],
      answer: "33",
      solution: `<img src="/images/quiz/pw-c-prog/q_img56.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;
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
}</code></pre>
Output of the program is __________`,
      image: "",
      options: [],
      answer: "24",
      solution: `<img src="/images/quiz/pw-c-prog/q_img58.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following structure declaration
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

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

}</code></pre>
What is the output of the following program`,
      image: "",
      options: ["10", "7", "8", "9"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-c-prog/q_img60.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

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

}</code></pre>
The output of the program is_____`,
      image: "",
      options: ["GATE 2026", "2026 2026", "GATE GATE", "2026 GATE"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-c-prog/q_img62.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following program
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">#include &lt;stdio.h&gt;

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

}</code></pre>
Output of the program is ____`,
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
      text: `<img src="/images/quiz/pw-algo/q_img1.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/pw-algo/q_img2.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img3.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-algo/q_img4.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img5.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "2",
      solution: `<img src="/images/quiz/pw-algo/q_img6.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img7.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img8.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img9.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "18",
      solution: `<img src="/images/quiz/pw-algo/q_img10.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img11.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-algo/q_img12.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img13.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img14.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img15.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img16.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img17.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "11",
      solution: `<img src="/images/quiz/pw-algo/q_img18.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img19.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "A",
      solution: `<img src="/images/quiz/pw-algo/q_img20.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img21.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img22.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img23.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "A",
      solution: `<img src="/images/quiz/pw-algo/q_img24.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img25.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img26.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img27.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img28.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img29.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "997",
      solution: `<img src="/images/quiz/pw-algo/q_img30.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img31.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img32.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img33.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "45",
      solution: `<img src="/images/quiz/pw-algo/q_img34.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img35.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img36.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img37.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "1500",
      solution: `<img src="/images/quiz/pw-algo/q_img38.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img39.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "150",
      solution: `<img src="/images/quiz/pw-algo/q_img40.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img41.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "145",
      solution: `<img src="/images/quiz/pw-algo/q_img42.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img43.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img44.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img45.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img46.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img47.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "32",
      solution: `<img src="/images/quiz/pw-algo/q_img48.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img49.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img50.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img51.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "A",
      solution: `<img src="/images/quiz/pw-algo/q_img52.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img53.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "41",
      solution: `<img src="/images/quiz/pw-algo/q_img54.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img55.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img56.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img57.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img58.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<img src="/images/quiz/pw-algo/q_img59.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: [],
      answer: "7",
      solution: `<img src="/images/quiz/pw-algo/q_img60.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img61.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img62.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<img src="/images/quiz/pw-algo/q_img63.png" style="display: block; max-width: 75%; margin: 10px 0;">`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-algo/q_img64.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
  ]
});
