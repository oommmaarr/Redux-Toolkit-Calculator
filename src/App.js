import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, add, Subtract, multiplication, division } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const result = useSelector((state) => state.counter.result);
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-pulse">
            Redux Counter
          </h1>
          <p className="text-xl text-purple-200"
          dir='rtl'>
            تطبيق عداد متقدم باستخدام Redux
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Counter Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              🔢 العداد
            </h2>
            
            {/* Counter Display */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-pink-500 to-violet-500 rounded-full p-1">
                <div className="bg-gray-900 rounded-full px-8 py-4">
                  <span className="text-6xl font-bold text-white animate-bounce">
                    {count}
                  </span>
                </div>
              </div>
            </div>

            {/* Counter Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => dispatch(decrement())}
                className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-2xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                ➖ تقليل
              </button>
              
              <button
                onClick={() => dispatch(increment())}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-2xl transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                ➕ زيادة
              </button>
            </div>

            <button
              onClick={() => dispatch(incrementByAmount(4))}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-6 rounded-2xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              🚀 زيادة بمقدار 4
            </button>
          </div>

          {/* Calculator Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              🧮 الآلة الحاسبة
            </h2>

            <div className="space-y-6">
              {/* First Number Input */}
              <div>
                <label className="block text-white text-lg font-semibold mb-3">
                  الرقم الأول
                </label>
                <input
                  type="number"
                  value={firstNum}
                  onChange={(e) => setFirstNum(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                  placeholder="أدخل الرقم الأول"
                />
              </div>

              {/* Second Number Input */}
              <div>
                <label className="block text-white text-lg font-semibold mb-3">
                  الرقم الثاني
                </label>
                <input
                  type="number"
                  value={secondNum}
                  onChange={(e) => setSecondNum(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                  placeholder="أدخل الرقم الثاني"
                />
              </div>

              {/* Operation Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => dispatch(add({
                    firstNum: firstNum,
                    SecondNum: secondNum
                  }))}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  ➕ جمع
                </button>
                
                <button
                  onClick={() => dispatch(Subtract({
                    firstNum,
                    SecondNum: secondNum
                  }))}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  ➖ طرح
                </button>

                <button
                  onClick={() => dispatch(multiplication({
                    firstNum,
                    SecondNum: secondNum
                  }))}
                  className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-bold py-4 px-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  ✖️ ضرب
                </button>

                <button
                  onClick={() => dispatch(division({
                    firstNum,
                    SecondNum: secondNum
                  }))}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  ➗ قسمة
                </button>
              </div>

              {/* Result Display */}
              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-6">
                  <p className="text-gray-900 text-lg font-semibold mb-2">النتيجة</p>
                  <p className="text-4xl font-bold text-gray-900 animate-pulse">
                    {result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-purple-200 text-lg"
          dir='rtl'>
           آلة حاسبة شاملة مع Redux - ✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;