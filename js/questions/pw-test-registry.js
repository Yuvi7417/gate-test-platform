
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
      text: `<p>Consider the number in the sequence</p>
<p>\\( 130, 126, 122, 115, 109, 95, 86, 72, 49, 30, 21, 15, 9, 2 \\)</p>
<p>Using binary search, the number of comparisons that will be required to search for the element '126' are_______?</p>`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/pw-algo/q_img2.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Consider the following code</p>
<pre><code class="language-c">void AJ(int n)
{
    for(i = 0; (i * i) &lt; n; i++)
    {
        for (j = n; j &gt;= 0; j = j/2)
        {
            printf("Aditya Jain Sir");
        }
    }
}</code></pre>
<p>What is the worst case time complexity of above program?</p>`,
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
      text: `<p>Consider the following Graph G:</p>
<div style="text-align: center; margin: 20px 0;">
<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
    </marker>
  </defs>
  <line x1="150" y1="30" x2="60" y2="100" stroke="#000" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="150" y1="30" x2="240" y2="100" stroke="#000" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="150" y1="100" x2="150" y2="30" stroke="#000" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="60" y1="100" x2="100" y2="180" stroke="#000" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="150" y1="100" x2="100" y2="180" stroke="#000" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="240" y1="100" x2="200" y2="180" stroke="#000" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="150" y1="100" x2="200" y2="180" stroke="#000" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="150" y1="100" x2="150" y2="260" stroke="#000" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="100" y1="180" x2="150" y2="260" stroke="#000" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="200" y1="180" x2="150" y2="260" stroke="#000" stroke-width="2" marker-end="url(#arrow)" />
  <g fill="#fff" stroke="#000" stroke-width="2">
    <circle cx="150" cy="30" r="18" />
    <circle cx="60" cy="100" r="18" />
    <circle cx="150" cy="100" r="18" />
    <circle cx="240" cy="100" r="18" />
    <circle cx="100" cy="180" r="18" />
    <circle cx="200" cy="180" r="18" />
    <circle cx="150" cy="260" r="18" />
  </g>
  <g fill="#000" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" dominant-baseline="central">
    <text x="150" y="32">P</text>
    <text x="60" y="102">Q</text>
    <text x="150" y="102">R</text>
    <text x="240" y="102">S</text>
    <text x="100" y="182">T</text>
    <text x="200" y="182">U</text>
    <text x="150" y="262">V</text>
  </g>
</svg>
</div>
<p>DFS is applied on above graph starting at P, and selection of adjacent vertex in DFS decided by the Lexicographical order in Graph G.</p>
<p>Then what is the number of cross edges after DFS is performed_______?</p>
<p>(Note: Visit adjacent vertex Q before vertex S Starting from source vertex P)</p>`,
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
      text: `<p>Consider the following array</p>
<table border="1" cellpadding="10" style="border-collapse: collapse; text-align: center; font-size: 18px; margin: 15px 0;">
    <tr>
        <td style="width: 50px;">70</td>
        <td style="width: 50px;">?</td>
        <td style="width: 50px;">?</td>
        <td style="width: 50px;">60</td>
        <td style="width: 50px;">?</td>
        <td style="width: 50px;">25</td>
        <td style="width: 50px;">?</td>
        <td style="width: 50px;">5</td>
    </tr>
</table>
<p>If the remaining 4 elements are to be picked from the set {10, 45, 30, 35} in some order to be placed in the above array.<br><br>
Then the minimum number of inversions that are possible in the above array are _______?</p>`,
      image: "",
      options: [],
      answer: "18",
      solution: `<img src="/images/quiz/pw-algo/q_img10.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Consider the following array that is to be sorted in ascending order using Selection sort.</p>
<table border="1" cellpadding="10" style="border-collapse: collapse; text-align: center; font-size: 18px; margin: 15px 0;">
    <tr>
        <td style="width: 50px;">15</td>
        <td style="width: 50px;">90</td>
        <td style="width: 50px;">82</td>
        <td style="width: 50px;">30</td>
        <td style="width: 50px;">46</td>
        <td style="width: 50px;">55</td>
        <td style="width: 50px;">39</td>
        <td style="width: 50px;">21</td>
    </tr>
</table>
<p>Then what will be 8th element after the 6th pass?</p>`,
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
      text: `<p>Consider the following array</p>
<table border="1" cellpadding="10" style="border-collapse: collapse; text-align: center; font-size: 18px; margin: 15px 0;">
    <tr>
        <td style="width: 50px;">100</td>
        <td style="width: 50px;">90</td>
        <td style="width: 50px;">50</td>
        <td style="width: 50px;">80</td>
        <td style="width: 50px;">70</td>
        <td style="width: 50px;">35</td>
        <td style="width: 50px;">49</td>
        <td style="width: 50px;">51</td>
    </tr>
</table>
<p>What are the total number of comparisons required to sort this array in ascending order using Insertion sort?</p>`,
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
      text: `<p>Consider the following array.</p>
<table border="1" cellpadding="10" style="border-collapse: collapse; text-align: center; font-size: 18px; margin: 15px 0;">
    <tr>
        <td style="width: 50px;">2122</td>
        <td style="width: 50px;">177</td>
        <td style="width: 50px;">355</td>
        <td style="width: 50px;">57</td>
        <td style="width: 50px;">290</td>
        <td style="width: 50px;">433</td>
        <td style="width: 50px;">146</td>
        <td style="width: 50px;">3520</td>
        <td style="width: 50px;">26</td>
        <td style="width: 50px;">1020</td>
    </tr>
</table>
<p>If Radix sort is used to sort the above array in ascending order, then the 7th element after the 3rd pass is?</p>`,
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
      text: `<p>Consider the following directed graph G.</p>
<div style="text-align: center; margin: 20px 0;">
<svg width="850" height="500" viewBox="0 0 850 500" xmlns="http://www.w3.org/2000/svg" style="font-family: serif; max-width: 100%; height: auto;">
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="24" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
    </marker>
  </defs>

  <g stroke="#000" stroke-width="2" fill="none">
    <!-- Top Curve A->D -->
    <path d="M 100,250 C 150,50 450,50 550,150" marker-end="url(#arrowhead)"/>
    <!-- Bottom Curve C->F -->
    <path d="M 300,350 C 400,480 650,480 750,250" marker-end="url(#arrowhead)"/>
    
    <!-- Straight Lines -->
    <line x1="750" y1="250" x2="550" y2="150" marker-end="url(#arrowhead)"/> <!-- F->D -->
    <line x1="750" y1="250" x2="550" y2="350" marker-end="url(#arrowhead)"/> <!-- F->E -->
    <line x1="550" y1="150" x2="300" y2="150" marker-end="url(#arrowhead)"/> <!-- D->B -->
    <line x1="550" y1="150" x2="550" y2="350" marker-end="url(#arrowhead)"/> <!-- D->E -->
    <line x1="300" y1="150" x2="100" y2="250" marker-end="url(#arrowhead)"/> <!-- B->A -->
    <line x1="300" y1="150" x2="300" y2="350" marker-end="url(#arrowhead)"/> <!-- B->C -->
    
    <line x1="300" y1="150" x2="750" y2="250" marker-end="url(#arrowhead)"/> <!-- B->F -->
    
    <line x1="550" y1="350" x2="300" y2="150" marker-end="url(#arrowhead)"/> <!-- E->B -->
    <line x1="550" y1="350" x2="100" y2="250" marker-end="url(#arrowhead)"/> <!-- E->A -->
    
    <line x1="550" y1="350" x2="300" y2="350" marker-end="url(#arrowhead)"/> <!-- E->C -->
    <line x1="300" y1="350" x2="100" y2="250" marker-end="url(#arrowhead)"/> <!-- C->A -->
  </g>

  <g font-size="22" fill="#000" text-anchor="middle" style="paint-order: stroke; stroke: #fff; stroke-width: 6px; stroke-linecap: round; stroke-linejoin: round;">
    <text x="325" y="90">12</text> <!-- A->D -->
    <text x="525" y="460">10</text> <!-- C->F -->
    <text x="650" y="190">4</text> <!-- F->D -->
    <text x="650" y="325">5</text> <!-- F->E -->
    <text x="425" y="140">9</text> <!-- D->B -->
    <text x="575" y="250">50</text> <!-- D->E -->
    <text x="200" y="185">4</text> <!-- B->A -->
    <text x="325" y="250">90</text> <!-- B->C -->
    <text x="475" y="200">80</text> <!-- B->F -->
    <text x="475" y="260">3</text> <!-- E->B -->
    <text x="270" y="290">6</text> <!-- E->A -->
    <text x="425" y="375">4</text> <!-- E->C -->
    <text x="200" y="325">2</text> <!-- C->A -->
  </g>

  <g fill="#fff" stroke="#000" stroke-width="2">
    <circle cx="100" cy="250" r="22" />
    <circle cx="300" cy="150" r="22" />
    <circle cx="300" cy="350" r="22" />
    <circle cx="550" cy="150" r="22" />
    <circle cx="550" cy="350" r="22" />
    <circle cx="750" cy="250" r="22" />
  </g>

  <g font-size="24" fill="#000" font-family="serif" text-anchor="middle" dominant-baseline="central">
    <text x="100" y="252">A</text>
    <text x="300" y="152">B</text>
    <text x="300" y="352">C</text>
    <text x="550" y="152">D</text>
    <text x="550" y="352">E</text>
    <text x="750" y="252">F</text>
  </g>
</svg>
</div>
<p>Suppose Dijkstra's SSSP algorithm is applied to find the minimum path cost for all the vertices with F as the source vertex.</p>
<p>What will be the cost of the shortest path from F to A, reported by it_______?</p>`,
      image: "",
      options: [],
      answer: "11",
      solution: `<img src="/images/quiz/pw-algo/q_img18.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Consider the following array of elements</p>
<p>[29, 17, 30, 27, 52, 15, 12, 5, 70, 11, 65, 29, 200].</p>
<p>The minimum number of interchanges needed to convert it into a max-heap are?</p>
<p><strong>Note:</strong> It is not mandatory to insert one element at a time.</p>`,
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
      text: `<p>Consider an array of 64 elements. Assume that a Quick sort algorithm in the Best case takes 0.5 minutes to sort this array in ascending order.</p>
<p>What are the maximum number of elements that can be sorted in 6 minutes in the above setting? (Select the closest possible answer)</p>`,
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
      text: `<p>Consider a following graph</p>
<div style="text-align: center; margin: 20px 0;">
<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow12" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
    </marker>
  </defs>
  <g stroke="#000" stroke-width="2">
    <line x1="50" y1="50" x2="150" y2="50" marker-end="url(#arrow12)" />
    <line x1="150" y1="50" x2="250" y2="50" marker-end="url(#arrow12)" />
    <line x1="50" y1="150" x2="150" y2="150" marker-end="url(#arrow12)" />
    <line x1="150" y1="150" x2="250" y2="150" marker-end="url(#arrow12)" />
    <line x1="50" y1="50" x2="50" y2="150" marker-end="url(#arrow12)" />
    <line x1="150" y1="50" x2="150" y2="150" marker-end="url(#arrow12)" />
    <line x1="250" y1="50" x2="250" y2="150" marker-end="url(#arrow12)" />
  </g>
  <g fill="#fff" stroke="#000" stroke-width="2">
    <circle cx="50" cy="50" r="18" />
    <circle cx="150" cy="50" r="18" />
    <circle cx="250" cy="50" r="18" />
    <circle cx="50" cy="150" r="18" />
    <circle cx="150" cy="150" r="18" />
    <circle cx="250" cy="150" r="18" />
  </g>
  <g fill="#000" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" dominant-baseline="central">
    <text x="50" y="52">A</text>
    <text x="150" y="52">C</text>
    <text x="250" y="52">D</text>
    <text x="50" y="152">B</text>
    <text x="150" y="152">E</text>
    <text x="250" y="152">F</text>
  </g>
</svg>
</div>
<p>Which of the following represents the valid Topological ordering for the given graph G?</p>`,
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
      text: `<p>Consider the following graph.</p>
<div style="text-align: center; margin: 20px 0;">
<svg width="400" height="500" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
  <!-- Undirected edges -->
  <g stroke="#000" stroke-width="2" fill="none">
    <path d="M 280,150 C 350,200 350,350 200,300" />
    <line x1="150" y1="50" x2="250" y2="100" />
    <line x1="150" y1="50" x2="150" y2="120" />
    <line x1="150" y1="50" x2="90" y2="130" />
    <line x1="250" y1="100" x2="280" y2="150" />
    <line x1="150" y1="120" x2="280" y2="150" />
    <line x1="150" y1="120" x2="90" y2="130" />
    <line x1="150" y1="120" x2="250" y2="280" />
    <line x1="150" y1="120" x2="200" y2="300" />
    <line x1="280" y1="150" x2="250" y2="280" />
    <line x1="90" y1="130" x2="90" y2="280" />
    <line x1="90" y1="280" x2="90" y2="400" />
    <line x1="90" y1="280" x2="200" y2="300" />
    <line x1="90" y1="400" x2="200" y2="300" />
    <line x1="200" y1="300" x2="250" y2="280" />
  </g>
  <!-- Nodes -->
  <g fill="#000" stroke="#000" stroke-width="2">
    <circle cx="150" cy="50" r="6" />
    <circle cx="250" cy="100" r="6" />
    <circle cx="280" cy="150" r="6" />
    <circle cx="150" cy="120" r="6" />
    <circle cx="90" cy="130" r="6" />
    <circle cx="90" cy="280" r="6" />
    <circle cx="90" cy="400" r="6" />
    <circle cx="200" cy="300" r="6" />
    <circle cx="250" cy="280" r="6" />
  </g>
  <!-- Labels -->
  <g font-size="22" fill="#000" font-family="serif" text-anchor="middle" dominant-baseline="central">
    <text x="150" y="30">P</text>
    <text x="270" y="90">Q</text>
    <text x="305" y="150">R</text>
    <text x="130" y="110">S</text>
    <text x="70" y="130">T</text>
    <text x="65" y="280">U</text>
    <text x="90" y="425">V</text>
    <text x="200" y="325">W</text>
    <text x="250" y="255">X</text>
  </g>
</svg>
</div>
<p>Which of the following represents the valid DFS traversal?</p>`,
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
      text: `<p>Assume that, quick sort implementation is used to sort an array in ascending order.</p>
<p>After the first partition step has been completed, the contents of the array are in the following order.</p>
<p>500, 300, 400, 200, 800, 900, 1200, 1000, 1400, 1100, 1600</p>
<p>Which of the following elements could be selected as a pivot element in first partition?</p>`,
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
      text: `<p>Suppose P, Q, R, S, T, U, V, W are sorted sequences having lengths 100, 45, 10, 26, 50, 30, 35, 60 respectively. They are to be merged into a single sequence by merging together two sequences at a time.</p>
<p>The number of comparisons that will be needed in the worst case by the optimal algorithm for doing this is ______.</p>`,
      image: "",
      options: [],
      answer: "997",
      solution: `<img src="/images/quiz/pw-algo/q_img30.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Given the following set of functions,</p>
<p>Sort the functions in descending order of asymptotic(big-O) complexity.</p>
<p>\\(f_1(n) = 2n, f_2(n) = (0.7)^n, f_3(n) = n^{\\log n}, f_4(n) = 10, f_5(n) = (\\log n)^n\\)</p>`,
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
      text: `<p>Consider the following array</p>
<div style="margin: 20px 0;">
<table style="border-collapse: collapse; text-align: center; font-size: 20px;">
  <tr>
    <td style="border: 2px solid #000; padding: 10px 20px; width: 60px;">20</td>
    <td style="border: 2px solid #000; padding: 10px 20px; width: 60px;">92</td>
    <td style="border: 2px solid #000; padding: 10px 20px; width: 60px;">55</td>
    <td style="border: 2px solid #000; padding: 10px 20px; width: 60px;">32</td>
    <td style="border: 2px solid #000; padding: 10px 20px; width: 60px;">48</td>
    <td style="border: 2px solid #000; padding: 10px 20px; width: 60px;">25</td>
    <td style="border: 2px solid #000; padding: 10px 20px; width: 60px;">61</td>
    <td style="border: 2px solid #000; padding: 10px 20px; width: 60px;">5</td>
  </tr>
</table>
</div>
<p>If Bubble sort is applied to sort the above array in ascending order, and if in doing this, the number of swaps required are &lsquo;p&rsquo; and number of comparisons required are &lsquo;q&rsquo; then the value of p + q is______?</p>`,
      image: "",
      options: [],
      answer: "45",
      solution: `<img src="/images/quiz/pw-algo/q_img34.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>The number of distinct MCSTs of the following graph is &lsquo;a&rsquo; and the cost of the MCST reported by Kruskal Algorithm is &lsquo;b&rsquo;, then the value of a * b is?</p>
<div style="text-align: center; margin: 20px 0;">
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#000" stroke-width="2">
    <!-- Outer edges -->
    <line x1="50" y1="150" x2="120" y2="80" />
    <line x1="120" y1="80" x2="280" y2="80" />
    <line x1="280" y1="80" x2="350" y2="150" />
    <line x1="350" y1="150" x2="280" y2="220" />
    <line x1="280" y1="220" x2="120" y2="220" />
    <line x1="120" y1="220" x2="50" y2="150" />
    <!-- Inner edges to center (g) -->
    <line x1="50" y1="150" x2="200" y2="150" />
    <line x1="120" y1="80" x2="200" y2="150" />
    <line x1="280" y1="80" x2="200" y2="150" />
    <line x1="350" y1="150" x2="200" y2="150" />
    <line x1="280" y1="220" x2="200" y2="150" />
    <line x1="120" y1="220" x2="200" y2="150" />
  </g>
  <g fill="#fff" stroke="#000" stroke-width="2">
    <circle cx="50" cy="150" r="16" />
    <circle cx="120" cy="80" r="16" />
    <circle cx="280" cy="80" r="16" />
    <circle cx="350" cy="150" r="16" />
    <circle cx="280" cy="220" r="16" />
    <circle cx="120" cy="220" r="16" />
    <circle cx="200" cy="150" r="16" />
  </g>
  <g font-size="18" fill="#000" font-family="serif" text-anchor="middle" dominant-baseline="central">
    <text x="50" y="152">a</text>
    <text x="120" y="82">b</text>
    <text x="280" y="82">c</text>
    <text x="350" y="152">d</text>
    <text x="280" y="222">e</text>
    <text x="120" y="222">f</text>
    <text x="200" y="152">g</text>
  </g>
  <g font-size="16" fill="#000" font-family="serif" text-anchor="middle">
    <!-- Edge weights -->
    <text x="75" y="105">10</text>
    <text x="200" y="65">30</text>
    <text x="325" y="105">10</text>
    <text x="325" y="205">10</text>
    <text x="200" y="210">30</text>
    <text x="75" y="205">10</text>
    
    <text x="125" y="140">20</text>
    <text x="160" y="110">20</text>
    <text x="240" y="110">20</text>
    <text x="275" y="140">20</text>
    <text x="240" y="185">20</text>
    <text x="160" y="185">20</text>
  </g>
</svg>
</div>`,
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
      text: `<p>Consider the matrices A, B, C and D with dimensions 2 &times; 10, 10 &times; 5, 5 &times; 4 and 4 &times; 20 respectively.</p>
<p>These 4 matrices are to be multiplied into a single resultant matrix.</p>
<p>In doing this, if the minimum number of scalar multiplications required are &lsquo;m&rsquo; and the maximum number of scalar multiplications required are &lsquo;n&rsquo;, then the value of n-m is________?</p>`,
      image: "",
      options: [],
      answer: "1500",
      solution: `<img src="/images/quiz/pw-algo/q_img38.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the given characters M, N, O, P and Q each occurring with the probability of 0.2, 0.35, 0.1, 0.15, 0.2 respectively.</p>
<p>If we need to encode a given text of 200 characters.</p>
<p>Two encoding techniques are used to encode this message as below:</p>
<p>The first is simple Uniform Binary encoding which requires &lsquo;a&rsquo; bits.</p>
<p>The second encoding is the optimal encoding technique which requires &lsquo;b&rsquo; bits to do this.</p>
<p>Then the value of a-b is_________?</p>`,
      image: "",
      options: [],
      answer: "150",
      solution: `<img src="/images/quiz/pw-algo/q_img40.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the following instances of the job-sequencing with deadline problem:</p>
<div style="margin: 20px 0; overflow-x: auto;">
<table style="border-collapse: collapse; text-align: center; font-size: 18px; width: 100%; max-width: 600px;">
  <tr>
    <td style="border: 1px solid #000; padding: 10px;">Job</td>
    <td style="border: 1px solid #000; padding: 10px;">\\(J_1\\)</td>
    <td style="border: 1px solid #000; padding: 10px;">\\(J_2\\)</td>
    <td style="border: 1px solid #000; padding: 10px;">\\(J_3\\)</td>
    <td style="border: 1px solid #000; padding: 10px;">\\(J_4\\)</td>
    <td style="border: 1px solid #000; padding: 10px;">\\(J_5\\)</td>
    <td style="border: 1px solid #000; padding: 10px;">\\(J_6\\)</td>
    <td style="border: 1px solid #000; padding: 10px;">\\(J_7\\)</td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 10px;">Deadline</td>
    <td style="border: 1px solid #000; padding: 10px;">5</td>
    <td style="border: 1px solid #000; padding: 10px;">4</td>
    <td style="border: 1px solid #000; padding: 10px;">3</td>
    <td style="border: 1px solid #000; padding: 10px;">2</td>
    <td style="border: 1px solid #000; padding: 10px;">1</td>
    <td style="border: 1px solid #000; padding: 10px;">2</td>
    <td style="border: 1px solid #000; padding: 10px;">4</td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 10px;">Profit</td>
    <td style="border: 1px solid #000; padding: 10px;">20</td>
    <td style="border: 1px solid #000; padding: 10px;">15</td>
    <td style="border: 1px solid #000; padding: 10px;">30</td>
    <td style="border: 1px solid #000; padding: 10px;">25</td>
    <td style="border: 1px solid #000; padding: 10px;">35</td>
    <td style="border: 1px solid #000; padding: 10px;">40</td>
    <td style="border: 1px solid #000; padding: 10px;">10</td>
  </tr>
</table>
</div>
<p>If the optimal technique is used to solve this problem, let the maximum profit be denoted by 'x' and the number of jobs included in the optimal solution be denoted by 'y'.</p>
<p>then the value of x+y is ______?</p>`,
      image: "",
      options: [],
      answer: "145",
      solution: `<img src="/images/quiz/pw-algo/q_img42.png" style="display: block; max-width: 450px; width: 100%; margin: 10px 0;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Consider is the weighted graph G given by</p>
<div style="margin: 20px 0;">
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#000" stroke-width="2">
    <!-- Rectangle BCDE -->
    <line x1="50" y1="100" x2="250" y2="100" /> <!-- B-E -->
    <line x1="250" y1="100" x2="250" y2="250" /> <!-- E-D -->
    <line x1="250" y1="250" x2="50" y2="250" /> <!-- D-C -->
    <line x1="50" y1="250" x2="50" y2="100" /> <!-- C-B -->
    
    <!-- Triangle ABE and edge AC, CE -->
    <line x1="150" y1="20" x2="50" y2="100" /> <!-- A-B -->
    <line x1="150" y1="20" x2="250" y2="100" /> <!-- A-E -->
    <line x1="150" y1="20" x2="50" y2="250" /> <!-- A-C -->
    <line x1="50" y1="250" x2="250" y2="100" /> <!-- C-E -->
  </g>
  <g font-size="20" fill="#000" font-family="serif" text-anchor="middle">
    <!-- Edge weights -->
    <text x="90" y="55">30</text> <!-- A-B -->
    <text x="210" y="55">40</text> <!-- A-E -->
    <text x="120" y="70">30</text> <!-- A-C -->
    
    <text x="150" y="90">30</text> <!-- B-E -->
    <text x="270" y="175">30</text> <!-- E-D -->
    <text x="150" y="275">40</text> <!-- C-D -->
    <text x="30" y="175">20</text> <!-- B-C -->
    
    <text x="160" y="190">30</text> <!-- C-E -->
  </g>
</svg>
</div>
<p>If the total number of distinct MCSTs for the above given Graph are 'x' and the cost of the MCST is 'y' then the value of y - x is?</p>`,
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
      text: `<p>Assume that there are \\(10n^2\\) sorted lists each of size n/5.</p>
<p>If all of these lists are to be merged into a single sorted list by merging 2 lists at a time, then what is the time complexity of merging them into single sorted list by using the most optimal merging technique?</p>`,
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
      text: `<p>Consider the following undirected graph with edge weights as shown below:</p>
<div style="margin: 20px 0;">
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#000" stroke-width="2">
    <!-- Horizontal -->
    <line x1="50" y1="50" x2="150" y2="50" />
    <line x1="150" y1="50" x2="250" y2="50" />
    <line x1="50" y1="150" x2="150" y2="150" />
    <line x1="150" y1="150" x2="250" y2="150" />
    <line x1="50" y1="250" x2="150" y2="250" />
    <line x1="150" y1="250" x2="250" y2="250" />
    <!-- Vertical -->
    <line x1="50" y1="50" x2="50" y2="150" />
    <line x1="50" y1="150" x2="50" y2="250" />
    <line x1="150" y1="50" x2="150" y2="150" />
    <line x1="150" y1="150" x2="150" y2="250" />
    <line x1="250" y1="50" x2="250" y2="150" />
    <line x1="250" y1="150" x2="250" y2="250" />
  </g>
  <g fill="#000">
    <circle cx="50" cy="50" r="8" />
    <circle cx="150" cy="50" r="8" />
    <circle cx="250" cy="50" r="8" />
    <circle cx="50" cy="150" r="8" />
    <circle cx="150" cy="150" r="8" />
    <circle cx="250" cy="150" r="8" />
    <circle cx="50" cy="250" r="8" />
    <circle cx="150" cy="250" r="8" />
    <circle cx="250" cy="250" r="8" />
  </g>
  <g font-size="20" fill="#000" font-family="serif" text-anchor="middle">
    <!-- Horiz labels -->
    <text x="100" y="75">1</text>
    <text x="200" y="75">1</text>
    <text x="100" y="175">1</text>
    <text x="200" y="175">9</text>
    <text x="100" y="275">9</text>
    <text x="200" y="275">1</text>
    <!-- Vert labels -->
    <text x="35" y="105">9</text>
    <text x="35" y="205">1</text>
    <text x="135" y="105">9</text>
    <text x="135" y="205">1</text>
    <text x="235" y="105">9</text>
    <text x="235" y="205">1</text>
  </g>
</svg>
</div>
<p>The difference between the maximum possible cost and the minimum possible cost for a spanning tree for the above graph is______?</p>`,
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
      text: ` <p data-start="4708" data-end="4851">A <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>3</mn> </math>2-bit system uses <math xmlns="http://www.w3.org/1998/Math/MathML"> <mrow data-mjx-texclass="ORD"> <mn mathvariant="bold">4</mn> </mrow> </math><strong data-start="4729" data-end="4743">&nbsp;KB pages</strong> and a two-level page table with a <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math>-bit Level-<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math> index, <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>10</mn> </math>-bit Level-<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math> index, and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>12</mn> </math>-bit page offset. </p> <p data-start="4853" data-end="4920">The current Level-<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math> page table begins at physical address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x2000</mtext> </math>. </p> <p data-start="4922" data-end="4943">Relevant entries are:</p> <p><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;">
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="bold">Page-table location </mtext></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="bold">Entry</mtext></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>L1[0]</mtext></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="monospace">0x1007</mtext></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>L1[3]</mtext></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="monospace">0x3007</mtext></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>table at&nbsp;</mtext> <mtext mathvariant="monospace">0x1000</mtext> <mo>,</mo> <mtext>&nbsp;</mtext> <mtext>entry&nbsp;</mtext> <mn>0</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="monospace">0x7007</mtext></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>table at&nbsp;</mtext> <mtext mathvariant="monospace">0x1000</mtext> <mo>,</mo> <mtext>&nbsp;</mtext> <mtext>entry&nbsp;</mtext> <mn>1</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="monospace">0x8007</mtext></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>table at&nbsp;</mtext> <mtext mathvariant="monospace">0x3000</mtext> <mo>,</mo> <mtext>&nbsp;</mtext> <mtext>entry&nbsp;</mtext> <mn>128</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext mathvariant="monospace">0xA007</mtext></math></td>
  </tr>
</table> </p> <p data-start="5159" data-end="5296">All unspecified entries are zero and therefore not present. The low permission bits are removed when obtaining the physical page address.</p> <p data-start="5298" data-end="5329">Which translations are correct?</p> `,
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
      text: ` <p data-start="6572" data-end="6586">A system uses:</p> <ul data-start="6588" data-end="6652"> <li data-start="6588" data-end="6600" data-section-id="ba4al1"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math> KB pages</li> <li data-start="6601" data-end="6634" data-section-id="1e243y7">A <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math>-entry fully associative TLB</li> <li data-start="6635" data-end="6652" data-section-id="mkkkf1">LRU replacement</li> </ul> <p data-start="6654" data-end="6666"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"> <mtext mathvariant="bold">Initial TLB:</mtext> </math><table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;">
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Valid</mtext></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>VPN</mtext></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Physical Page</mtext></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>LRU</mtext></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>11</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>12</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>7</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>4</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>3</mn></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>3</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>6</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>4</mn></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>4</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>9</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td>
  </tr>
</table> </p> <p data-start="6654" data-end="6666"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"> <mtext mathvariant="bold">Relevant initial page-table entries:</mtext> </math> <table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;">
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>VPN</mtext></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Valid</mtext></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Location</mtext></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Physical page&nbsp;</mtext> <mn>5</mn></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Disk</mtext></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Disk</mtext></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>3</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Physical page&nbsp;</mtext> <mn>6</mn></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>7</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Physical page&nbsp;</mtext> <mn>4</mn></math></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>11</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></td>
    <td style="border: 1px solid #ced4da; padding: 8px;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>Physical page&nbsp;</mtext> <mn>12</mn></math></td>
  </tr>
</table> </p> <p data-start="7034" data-end="7125">When a page fault occurs, new physical pages are allocated beginning with physical page <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>13</mn> </math>. </p> <p data-start="7127" data-end="7181">The following virtual addresses are accessed in order:</p> <p data-start="7183" data-end="7257"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x0FFF</mtext> </math><br data-start="7191" data-end="7194"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x7A28</mtext> </math><br data-start="7202" data-end="7205"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x3DAD</mtext> </math><br data-start="7213" data-end="7216"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x3A98</mtext> </math><br data-start="7224" data-end="7227"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1C19</mtext> </math><br data-start="7235" data-end="7238"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x1000</mtext> </math><br data-start="7246" data-end="7249"><math xmlns="http://www.w3.org/1998/Math/MathML"> <mtext mathvariant="monospace">0x22D0</mtext> </math> </p> <p data-start="7259" data-end="7288">Which statements are correct?</p> `,
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
      marks: 1.0,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">
<p data-end="4651" data-start="4590">A demand-paging system has <math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>4</mn>
</math>
                        physical frames <math xmlns="http://www.w3.org/1998/Math/MathML">
<mi>P</mi>
<mn>1</mn>
<mo>,</mo>
<mi>P</mi>
<mn>2</mn>
<mo>,</mo>
<mi>P</mi>
<mn>3</mn>
<mo>,</mo>
<mi>P</mi>
<mn>4</mn>
</math>.
                    </p>
<p data-end="4684" data-start="4653">The page-reference sequence is:</p>
<p data-end="4725" data-start="4686"><math xmlns="http://www.w3.org/1998/Math/MathML">
<mi>A</mi>
<mo>,</mo>
<mtext> </mtext>
<mi>B</mi>
<mo>,</mo>
<mtext> </mtext>
<mi>C</mi>
<mo>,</mo>
<mtext> </mtext>
<mi>D</mi>
<mo>,</mo>
<mtext> </mtext>
<mi>E</mi>
<mo>,</mo>
<mtext> </mtext>
<mi>B</mi>
<mo>,</mo>
<mtext> </mtext>
<mi>A</mi>
<mo>,</mo>
<mtext> </mtext>
<mi>D</mi>
<mo>,</mo>
<mtext> </mtext>
<mi>B</mi>
<mo>,</mo>
<mtext> </mtext>
<mi>C</mi>
</math>
</p>
<p data-end="4759" data-start="4727">Initially, all frames are empty.</p>
<p data-end="4801" data-start="4761">Two replacement policies are considered:</p>
<ol data-end="4818" data-start="4803">
<li data-end="4809" data-section-id="1qxtfrl" data-start="4803">LRU<br/> </li>
<li data-end="4818" data-section-id="ghxwup" data-start="4810">Clock</li>
</ol>
<p data-end="4948" data-start="4820">For Clock, on a page fault, <strong data-end="4909" data-start="4848">advance the clock hand first and then inspect the use bit.</strong></p>
<p data-end="5022" data-start="4950">Which option correctly gives the final contents of frames
                        <math xmlns="http://www.w3.org/1998/Math/MathML">
<mi>P</mi>
<mn>1</mn>
<mo>,</mo>
<mi>P</mi>
<mn>2</mn>
<mo>,</mo>
<mi>P</mi>
<mn>3</mn>
<mo>,</mo>
<mi>P</mi>
<mn>4</mn>
</math>?
                    </p>

</span>`,
      image: "",
      options: [
        `LRU: <math xmlns="http://www.w3.org/1998/Math/MathML">
<mo stretchy="false">(</mo>
<mi>C</mi>
<mo>,</mo>
<mi>B</mi>
<mo>,</mo>
<mi>A</mi>
<mo>,</mo>
<mi>D</mi>
<mo stretchy="false">)</mo>
</math><br/>Clock:
                            <math xmlns="http://www.w3.org/1998/Math/MathML">
<mo stretchy="false">(</mo>
<mi>E</mi>
<mo>,</mo>
<mi>B</mi>
<mo>,</mo>
<mi>A</mi>
<mo>,</mo>
<mi>C</mi>
<mo stretchy="false">)</mo>
</math><br/>`,
        `LRU: <math xmlns="http://www.w3.org/1998/Math/MathML">
<mo stretchy="false">(</mo>
<mi>E</mi>
<mo>,</mo>
<mi>B</mi>
<mo>,</mo>
<mi>C</mi>
<mo>,</mo>
<mi>D</mi>
<mo stretchy="false">)</mo>
</math><br/>Clock:
                            <math xmlns="http://www.w3.org/1998/Math/MathML">
<mo stretchy="false">(</mo>
<mi>C</mi>
<mo>,</mo>
<mi>B</mi>
<mo>,</mo>
<mi>A</mi>
<mo>,</mo>
<mi>D</mi>
<mo stretchy="false">)</mo>
</math><br/>`,
        `LRU: <math xmlns="http://www.w3.org/1998/Math/MathML">
<mo stretchy="false">(</mo>
<mi>C</mi>
<mo>,</mo>
<mi>A</mi>
<mo>,</mo>
<mi>B</mi>
<mo>,</mo>
<mi>D</mi>
<mo stretchy="false">)</mo>
</math><br/>Clock:
                            <math xmlns="http://www.w3.org/1998/Math/MathML">
<mo stretchy="false">(</mo>
<mi>E</mi>
<mo>,</mo>
<mi>C</mi>
<mo>,</mo>
<mi>A</mi>
<mo>,</mo>
<mi>B</mi>
<mo stretchy="false">)</mo>
</math><br/>`,
        `LRU: <math xmlns="http://www.w3.org/1998/Math/MathML">
<mo stretchy="false">(</mo>
<mi>E</mi>
<mo>,</mo>
<mi>B</mi>
<mo>,</mo>
<mi>A</mi>
<mo>,</mo>
<mi>C</mi>
<mo stretchy="false">)</mo>
</math><br/>Clock:
                            <math xmlns="http://www.w3.org/1998/Math/MathML">
<mo stretchy="false">(</mo>
<mi>C</mi>
<mo>,</mo>
<mi>B</mi>
<mo>,</mo>
<mi>A</mi>
<mo>,</mo>
<mi>D</mi>
<mo stretchy="false">)</mo>
</math>`,
      ],
      answer: "A",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 6 Explanation:</strong><br>  <a href="https://gateoverflow.in/543900" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1.0,
      neg: 0,
      type: "NAT",
      text: `<span style="display: inline;">
<p data-end="8701" data-start="8633">A paged virtual-memory system has the following measured
                        parameters:</p>
<p>\[<br/>\begin{array}{|l|l|}<br/>\hline<br/>\textbf{Measurement} &amp; \textbf{Value}
                        <span>\</span><br/>\hline<br/>P_t = \text{probability of a TLB miss} <br/>&amp; 0.1
                        <span>\</span><br/>\hline
                    </p>
<p>P_p = \text{probability of a page fault when a TLB miss occurs} <br/>&amp; 0.0002
                        <span>\</span><br/>\hline
                    </p>
<p>T_t = \text{time to access TLB} <br/>&amp; 0 <span>\</span><br/>\hline</p>
<p>T_m = \text{time to access memory} <br/>&amp; 1\ \text{microsecond} <span>\</span><br/>\hline
                    </p>
<p>T_d = \text{time to transfer a page to/from disk} <br/>&amp; <math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
<mtable columnalign="left" columnspacing="1em" rowspacing="4pt">
<mtr>
<mtd>
<mn>10</mn>
<mtext> </mtext>
<mtext>milliseconds</mtext>
<mo>=</mo>
</mtd>
</mtr>
<mtr>
<mtd>
<mn>10000</mn>
<mtext> </mtext>
<mtext>microseconds</mtext>
</mtd>
</mtr>
</mtable>
</math>
<span>\</span><br/>\hline
                    </p>
<p>P_d = \text{probability page is dirty when replaced} <br/>&amp; 0.5
                        <span>\</span><br/>\hline<br/>\end{array}<br/>\]
                    </p>
<p data-end="8701" data-start="8633">Additional assumptions:</p>
<ul data-end="9513" data-start="9172">
<li data-end="9220" data-section-id="11ya5mu" data-start="9172">The TLB is refilled
                            automatically by hardware.<br/> </li>
<li data-end="9297" data-section-id="7iz1r6" data-start="9221">On a TLB miss, one memory access
                            is required to read the page-table entry.<br/> </li>
<li data-end="9365" data-section-id="1yae5t8" data-start="9298">If a page fault occurs, the
                            required page must be read from disk.<br/> </li>
<li data-end="9433" data-section-id="eo6pxo" data-start="9366">If the selected victim is dirty,
                            it must also be written to disk.<br/> </li>
<li data-end="9513" data-section-id="hhwht2" data-start="9434">Other page-replacement and
                            page-table-update overheads are included in <math xmlns="http://www.w3.org/1998/Math/MathML">
<msub>
<mi>T</mi>
<mi>d</mi>
</msub>
</math>.<br/> 
                        </li>
</ul>
<p data-end="9575" data-start="9515">What is the <strong data-end="9557" data-start="9527">average
                            memory access time</strong>, in microseconds?</p>
</span>`,
      image: "",
      options: [],
      answer: "1.4",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 7 Explanation:</strong><br>  <a href="https://gateoverflow.in/543902" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1.0,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">
<p data-end="1215" data-start="1108">Suppose a <math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>32</mn>
<mi>K</mi>
<mo>×</mo>
<mn>8</mn>
<mi>K</mi>
</math>
                        matrix <math xmlns="http://www.w3.org/1998/Math/MathML">
<mi>A</mi>
</math>
                        with <math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>1</mn>
</math>-byte
                        elements is stored in row-major order in virtual memory.</p>
<p data-end="1224" data-start="1217">Assume:</p>
<ul data-end="1379" data-start="1226">
<li data-end="1271" data-section-id="l8ds9t" data-start="1226">Only this program occupies
                            physical memory.<br/> </li>
<li data-end="1319" data-section-id="4vl7ht" data-start="1272">The matrix begins exactly at a
                            page boundary.<br/> </li>
<li data-end="1354" data-section-id="ihajdt" data-start="1320">The matrix is initially on
                            disk.<br/> </li>
<li data-end="1379" data-section-id="xl9fyi" data-start="1355">Demand paging is used.<br/> 
                        </li>
</ul>
<p data-end="1412" data-start="1381">The following code is executed:</p>
<pre class="prettyprint linenums lang-c_cpp" data-end="1521" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" data-rawcode="for (i = 0; i &lt; 32768; i++)     for (j = 0; j &lt; 8192; j++)          A[i][j] = A[i][j] * A[i][j];" data-start="1414">for (i = 0; i &lt; 32768; i++)
    for (j = 0; j &lt; 8192; j++)
         A[i][j] = A[i][j] * A[i][j];</pre>
<p data-end="1606" data-start="1523">If execution of this code produces exactly <math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>8</mn>
<mi>K</mi>
</math>
                        page faults, what is the page size?</p>

</span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>4</mn>
</math>
                            KB<br/>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>8</mn>
</math>
                            KB<br/>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>16</mn>
</math>
                            KB<br/>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>32</mn>
</math>
                            KB`,
      ],
      answer: "D",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 8 Explanation:</strong><br>  <a href="https://gateoverflow.in/543897" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1.0,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">
<p data-end="2714" data-start="2646">A virtual-memory system uses the <strong data-end="2686" data-start="2679">LRU</strong> page-replacement algorithm.</p>
<p data-end="2777" data-start="2716">There are four physical page frames at hexadecimal addresses:
                    </p>
<p data-end="2806" data-start="2779"><math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>4000</mn>
<mo>,</mo>
<mtext> </mtext>
<mn>5000</mn>
<mo>,</mo>
<mtext> </mtext>
<mn>6000</mn>
<mo>,</mo>
<mtext> </mtext>
<mn>7000</mn>
</math>
</p>
<p data-end="2839" data-start="2808">The page-reference sequence is:</p>
<p data-end="2984" data-start="2841"><math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>1</mn>
<mo stretchy="false">→</mo>
<mn>2</mn>
<mo stretchy="false">→</mo>
<mn>3</mn>
<mo stretchy="false">→</mo>
<mn>4</mn>
<mo stretchy="false">→</mo>
<mn>2</mn>
<mo stretchy="false">→</mo>
<mn>5</mn>
<mo stretchy="false">→</mo>
<mn>3</mn>
<mo stretchy="false">→</mo>
<mn>1</mn>
<mo stretchy="false">→</mo>
<mn>6</mn>
<mo stretchy="false">→</mo>
<mn>5</mn>
<mo stretchy="false">→</mo>
<mn>4</mn>
</math>
</p>
<p data-end="3056" data-start="2986">For the initial references <math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>1</mn>
<mo>,</mo>
<mn>2</mn>
<mo>,</mo>
<mn>3</mn>
<mo>,</mo>
<mn>4</mn>
</math>,
                        the pages are loaded as follows:</p>
<p data-end="3056" data-start="2986"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
<mtable columnalign="center center" columnlines="solid" columnspacing="1em" frame="solid" rowlines="solid none none none" rowspacing="4pt">
<mtr>
<mtd>
<mtext>Page</mtext>
</mtd>
<mtd>
<mtext>Frame Address</mtext>
</mtd>
</mtr>
<mtr>
<mtd>
<mn>1</mn>
</mtd>
<mtd>
<mn>4000</mn>
</mtd>
</mtr>
<mtr>
<mtd>
<mn>2</mn>
</mtd>
<mtd>
<mn>5000</mn>
</mtd>
</mtr>
<mtr>
<mtd>
<mn>3</mn>
</mtd>
<mtd>
<mn>6000</mn>
</mtd>
</mtr>
<mtr>
<mtd>
<mn>4</mn>
</mtd>
<mtd>
<mn>7000</mn>
</mtd>
</mtr>
</mtable>
</math>
</p>
<p data-end="3244" data-start="3164">At which address is page <math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>4</mn>
</math>
                        loaded when it is referenced for the <strong data-end="3243" data-start="3230">last
                            time</strong>?</p>

</span>`,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>4000</mn>
</math><br/>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>5000</mn>
</math><br/>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>6000</mn>
</math><br/>`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML">
<mn>7000</mn>
</math>`,
      ],
      answer: "C",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 9 Explanation:</strong><br>  <a href="https://gateoverflow.in/543899" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
    {
      marks: 1.0,
      neg: 0.33,
      type: "MCQ",
      text: `<span style="display: inline;">
<p data-end="897" data-start="819">Which of the following statements about page-replacement policies
                        are correct?</p>

</span>`,
      image: "",
      options: [
        `LRU always produces fewer page faults than FIFO.<br/>`,
        `OPT always performs at least as well as LRU.<br/>`,
        `For any replacement policy, increasing the number of
                            available frames can never decrease the hit percentage.<br/>`,
        `With LRU, increasing the number of available frames cannot
                            decrease the hit percentage.<br/>`,
        `Random replacement is always worse than LRU.`,
      ],
      answer: "B",
      solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Question 10 Explanation:</strong><br>  <a href="https://gateoverflow.in/543884" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
    },
  ]
});
