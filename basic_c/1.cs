// using System;
// public delegate void delegate1();
// class SomeClass{
    
//     public static void method1(){
//         Console.WriteLine("hello");
//     }
//     public static void method1(){
//         Console.WriteLine("Welcome");
//     }
// }

// class NewClass{
//         public static void main(){
//         SomeClass.delegate1 d1=new SomeClass.method1();
//         delegate d1=method1;
//         d1();
//         d1=SomeClass.method2;
//         d1();
//     }
// }


using System;

public delegate int Calculator(int x,int y);
class tsk
{
    public int add(int x,int y)
    {
        return x+y;
    }
    public int sub(int x,int y)
    {
        return x-y;
    }
    public int mul(int x,int y)
    {
        return x*y;
    }
    public int div(int x,int y)
    {
        return x/y;
    }

}
class TestCalculator
{
    tsk obj=new tsk();
    Calculator calculator;
}