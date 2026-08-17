
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
      text: `Consider the number in the sequence

130, 126, 122, 115, 109, 95, 86, 72, 49, 30, 21, 15, 9, 2

Using binary search, the number of comparisons that will be required to search for the element '126' are________?`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/pw-algo/q_img2.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following code
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">void AJ(int n)
{
  for(i = 0; (i * i) &lt; n; i++)
  {
    for (j = n; j &gt;= 0; j = j/2)
    {
      printf("Aditya Jain Sir");
    }
  }
}</code></pre>
What is the worst case time complexity of above program?`,
      image: "",
      options: ["O(n*log n)", "O(log n * log n)", "O(√n)", "O(√n * log n)"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-algo/q_img4.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the following Graph G:
<img src="/images/quiz/pw-algo/q_img5.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
DFS is applied on above graph starting at P, and selection of adjacent vertex in DFS decided by the Lexicographical order in Graph G.

Then what is the number of cross edges after DFS is performed_____?

(Note: Visit adjacent vertex Q before vertex S Starting from source vertex P)`,
      image: "",
      options: [],
      answer: "2",
      solution: `<img src="/images/quiz/pw-algo/q_img6.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Given 6 sorted files having 70, 20, 25 ,15, 30 and 50 records respectively. You have to merge them into a single sorted file, by merging 2 files at a time. If the minimum number of record movements required by the most efficient algorithm are 'a' and the Best-case number of elements comparisons that are required are 'b' then the value of a + b is?`,
      image: "",
      options: ["1015", "725", "1020", "1025"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img8.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the following array
<img src="/images/quiz/pw-algo/q_img9.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
If the remaining 4 elements are to be picked from the set {10,45,30,35} in some order to be placed in the above array.
Then the minimum number of inversions that are possible in the above array are_______?`,
      image: "",
      options: [],
      answer: "18",
      solution: `<img src="/images/quiz/pw-algo/q_img10.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following array that is to be sorted in ascending order using Selection sort.
<img src="/images/quiz/pw-algo/q_img11.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
Then what will be 8th element after the 6th pass?`,
      image: "",
      options: ["55", "46", "82", "90"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-algo/q_img12.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following array
<img src="/images/quiz/pw-algo/q_img13.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
What are the total number of comparisons required to sort this array in ascending order using Insertion sort?`,
      image: "",
      options: ["20", "30", "26", "15"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img14.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following array.
<img src="/images/quiz/pw-algo/q_img15.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
If Radix sort is used to sort the above array in ascending order, then the 7th element after the 3rd pass is?`,
      image: "",
      options: ["355", "290", "177", "433"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img16.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the following directed graph G.
<img src="/images/quiz/pw-algo/q_img17.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
Suppose Dijkstra's SSSP algorithm is applied to find the minimum path cost for all the vertices with F as the source vertex.

What will be the cost of the shortest path from F to A, reported by it___?`,
      image: "",
      options: [],
      answer: "11",
      solution: `<img src="/images/quiz/pw-algo/q_img18.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following array of elements

[29, 17, 30, 27, 52, 15, 12, 5, 70, 11, 65, 29, 200].

The minimum number of interchanges needed to convert it into a max-heap are?

**Note:** It is not mandatory to insert one element at a time.`,
      image: "",
      options: ["8", "7", "9", "10"],
      answer: "A",
      solution: `<img src="/images/quiz/pw-algo/q_img20.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider an array of 64 elements. Assume that a Quick sort algorithm in the Best case takes 0.5 minutes to sort this array in ascending order.

What are the maximum number of elements that can be sorted in 6 minutes in the above setting? (Select the closest possible answer)`,
      image: "",
      options: ["128", "2048", "512", "1024"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img22.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: `Consider a following graph
<img src="/images/quiz/pw-algo/q_img23.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
Which of the following represents the valid Topological ordering for the given graph G?`,
      image: "",
      options: ["ACBDEF", "ABCDEF", "AEBCDF", "ABCEDF"],
      answer: "A",
      solution: `<img src="/images/quiz/pw-algo/q_img24.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: `Consider the following graph.
<img src="/images/quiz/pw-algo/q_img25.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
Which of the following represents the valid DFS traversal?`,
      image: "",
      options: ["XSPTQRWVU", "PSWUTVXRQ", "VWXRQPSTU", "TUWVXRQPS"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img26.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: `Assume that, quick sort implementation is used to sort an array in ascending order.

After the first partition step has been completed, the contents of the array are in the following order.

500, 300, 400, 200, 800, 900, 1200, 1000, 1400, 1100, 1600

Which of the following elements could be selected as a pivot element in first partition ?`,
      image: "",
      options: ["400", "300", "800", "1600"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img28.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Suppose P, Q, R, S, T, U, V, W are sorted sequences having lengths 100, 45, 10, 26, 50, 30, 35, 60 respectively. They are to be merged into a single sequence by merging together two sequences at a time.

The number of comparisons that will be needed in the worst case by the optimal algorithm for doing this is_______.`,
      image: "",
      options: [],
      answer: "997",
      solution: `<img src="/images/quiz/pw-algo/q_img30.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Given the following set of functions,

Sort the functions in descending order of asymptotic(big-O) complexity.

f1(n) = 2n, f2(n) = (0.7)ⁿ, f3(n) = n^(logn), f4(n) = 10, f5(n) = (log n)ⁿ`,
      image: "",
      options: ["f4(n), f2(n), f1(n), f5(n), f3(n)", "f5(n), f3(n), f1(n), f4(n), f2(n)", "f2(n), f4(n), f1(n), f5(n), f3(n)", "f1(n), f5(n), f4(n), f3(n), f2(n)"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img32.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following array
<img src="/images/quiz/pw-algo/q_img33.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
If Bubble sort is applied to sort the above array in ascending order, and if in doing this, the number of swaps required are 'p' and number of comparisons required are 'q' then the value of p + q is_____?`,
      image: "",
      options: [],
      answer: "45",
      solution: `<img src="/images/quiz/pw-algo/q_img34.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `The number of distinct MCSTs of the following graph is 'a' and the cost of the MCST reported by Kruskal Algorithm is 'b', then the value of a * b is?
<img src="/images/quiz/pw-algo/q_img35.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`,
      image: "",
      options: ["725", "720", "730", "719"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img36.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the matrices A, B, C and D with dimensions 2 x 10, 10 x 5, 5 x 4 and 4 x 20 respectively.

These 4 matrices are to be multiplied into a single resultant matrix.

In doing this, if the minimum number of scalar multiplications required are 'm' and the maximum number of scalar multiplications required are 'n', then the value of n-m is_________?`,
      image: "",
      options: [],
      answer: "1500",
      solution: `<img src="/images/quiz/pw-algo/q_img38.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the given characters M, N, O, P and Q each occurring with the probability of 0.2, 0.35, 0.1, 0.15, 0.2 respectively.

If we need to encode a given text of 200 characters.

Two encoding techniques are used to encode this message as below:

The first is simple Uniform Binary encoding which requires 'a' bits.

The second encoding is the optimal encoding technique which requires 'b' bits to do this.

Then the value of a-b is_________?`,
      image: "",
      options: [],
      answer: "150",
      solution: `<img src="/images/quiz/pw-algo/q_img40.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following instances of the job-sequencing with deadline problem:
<img src="/images/quiz/pw-algo/q_img41.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
If the optimal technique is used to solve this problem, let the maximum profit be denoted by 'x' and the number of jobs included in the optimal solution be denoted by 'y'.

then the value of x+y is _______?`,
      image: "",
      options: [],
      answer: "145",
      solution: `<img src="/images/quiz/pw-algo/q_img42.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider is the weighted graph G given by
<img src="/images/quiz/pw-algo/q_img43.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
If the total number of distinct MCSTs for the above given Graph are 'x' and the cost of the MCST is 'y' then the value of y - x is?`,
      image: "",
      options: ["109", "107", "106", "105"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img44.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Assume that there are 10n² sorted lists each of size n/5.

If all of these lists are to be merged into a single sorted list by merging 2 lists at a time, then what is the time complexity of merging them into single sorted list by using the most optimal merging technique?`,
      image: "",
      options: ["θ(n² log n)", "θ(n log n)", "θ(n³ log n)", "θ(n²)"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img46.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following undirected graph with edge weights as shown below:
<img src="/images/quiz/pw-algo/q_img47.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
The difference between the maximum possible cost and the minimum possible cost for a spanning tree for the above graph is_______?`,
      image: "",
      options: [],
      answer: "32",
      solution: `<img src="/images/quiz/pw-algo/q_img48.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following code
<pre class="line-numbers" style="margin: 15px 0; border: 1px solid #ddd; border-radius: 5px;"><code class="language-c">i = √n;
while (i &gt; 0)
{
  j = 1;
  while (j &lt; log(n))
  {
    j = 2 * j;
  }
  i = i / 2;
}</code></pre>
Time complexity of above code in terms of Big-Oh?`,
      image: "",
      options: ["(logn)²", "√(logn)", "((log n) * log(log n))", "log logn"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img50.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Assume that there are 4 sorted lists of n/4 elements each, if these lists are merged into a single sorted list of 'n' elements then how many key comparisons are required in the worst case using an efficient algorithm?`,
      image: "",
      options: ["2n - 3", "(7/4)n - 3", "(9/4)n - 3", "(6/4)n - 3"],
      answer: "A",
      solution: `<img src="/images/quiz/pw-algo/q_img52.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following Graph G.
<img src="/images/quiz/pw-algo/q_img53.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
If the cost of the MCST by Prims is 'x' and the number of distinct MCSTs reported by Kruskal are 'y', then the value of x-y is_____?`,
      image: "",
      options: [],
      answer: "41",
      solution: `<img src="/images/quiz/pw-algo/q_img54.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MCQ",
      text: `Which of the following statements is/are true?`,
      image: "",
      options: ["In an undirected graph, the shortest path between two nodes always lies on some minimum spanning tree", "If every edge of the graph has distinct weight, then Maximum weight spanning tree is unique.", "In Huffman coding,if all the items are of distinct probabilities, then the item with the second lowest probability is always at the leaf that is farthest from the root", "In Huffman coding,if all the items are of distinct probabilities, then the item with the highest probability is always at a leaf that is the child of the root."],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img56.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `A message is made up of the characters J, K, L, M and O with the probability given below.

| Character | Probability |
|---|---|
| J | 0.20 |
| K | 0.33 |
| L | 0.37 |
| M | 0.04 |
| O | 0.06 |

What are the total number of bits required to represent the following text:

“KJMOLJKM”,

Using the most optimal encoding technique.`,
      image: "",
      options: ["20", "23", "25", "27"],
      answer: "B",
      solution: `<img src="/images/quiz/pw-algo/q_img58.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following graph
<img src="/images/quiz/pw-algo/q_img59.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">
Suppose after applying DFS traversal starting from node 'A' and the nodes are visited in lexicographical order. (Note: Visit Adjacent vertex B before C from Starting vertex A)

If the number of tree edges are 't'

The number of forward edges are 'f'

And the number of back edges are 'b'

Then the value of t + f - b is _______?`,
      image: "",
      options: [],
      answer: "3",
      solution: `<img src="/images/quiz/pw-algo/q_img60.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following statements : - (Assume all the elements are distinct)
1. The largest element in a min heap is always at a leaf node.
2. The second smallest element in a min heap is always a child of the root node.
3. We can find the smallest element in a max-heap in O(n) time.
4. The third smallest element in a min heap is always a child of the root node.

Which of the above statements are TRUE?`,
      image: "",
      options: ["1, 3 and 4", "2, 3 and 4", "1, 2 and 3", "1, 2 and 4"],
      answer: "C",
      solution: `<img src="/images/quiz/pw-algo/q_img62.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following matrices with given dimensions

x₁ is 4 × 5
x₂ is 5 × 10
x₃ is 10 × 20
x₄ is 20 × 1

Which of the following multiplication order gives optimal solution to multiply this chain of matrix into a resultant matrix?`,
      image: "",
      options: ["((x₁x₂)x₃)x₄", "(x₁(x₂x₃))x₄", "x₁((x₂x₃)x₄)", "x₁(x₂(x₃x₄))"],
      answer: "D",
      solution: `<img src="/images/quiz/pw-algo/q_img64.png" style="display: block; max-width: 75%; margin: 10px 0;">`
    },
  ]
});
