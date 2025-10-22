import { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface DateTimePickerProps {
  onDateTimeChange: (date: Date) => void;
}

export function DateTimePicker({ onDateTimeChange }: DateTimePickerProps) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seconds, setSeconds] = useState('00');

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
    updateDateTime(newDate, time, seconds);
  };

  const handleTimeChange = (newTime: string) => {
    setTime(newTime);
    updateDateTime(date, newTime, seconds);
  };

  const handleSecondsChange = (newSeconds: string) => {
    setSeconds(newSeconds);
    updateDateTime(date, time, newSeconds);
  };

  const updateDateTime = (d: string, t: string, s: string) => {
    if (d && t) {
      const dateTime = new Date(`${d}T${t}:${s}`);
      onDateTimeChange(dateTime);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-amber-600" />
        选择宝宝出生时间
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            出生日期
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => handleDateChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              时:分
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => handleTimeChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              秒
            </label>
            <select
              value={seconds}
              onChange={(e) => handleSecondsChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            >
              {Array.from({ length: 60 }, (_, i) => {
                const val = i.toString().padStart(2, '0');
                return (
                  <option key={val} value={val}>
                    {val} 秒
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {date && time && (
          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800">
              <span className="font-medium">选定时间：</span>
              {new Date(`${date}T${time}:${seconds}`).toLocaleString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
