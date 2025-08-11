import React from 'react';

export const AnnonymizationResults = () => {
  return (
    <div className="p-8">
      <h2 className="text-lg font-semibold pb-2 mb-4">
        Anonymization Results - <span className="text-[#3742fa]">patient_records_2024</span>
      </h2>

      <div className="mb-6">
        <h3 className="flex items-center gap-2 font-semibold">
          ✅ <span>Anonymization Complete</span>
        </h3>
        <p className="mt-2 text-sm text-[#2f3542] bg-white rounded-2xl shadow-lg p-4">
          Processing Time: <span className="text-black">2m 34s</span> | Records Processed: <span className="text-black">12,543</span>
        </p>
      </div>

      {/* Privacy Metrics */}
      <div className="mb-6 rounded-md">
        <h3 className="text-base font-semibold mb-2">Privacy Metrics:</h3>
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <h4 className="font-semibold mb-2 text-black">Privacy Assessment</h4>
          <ul className="text-sm text-[#2f3542] space-y-1">
            <li>
              K-Anonymity Level: ✅ <span className="text-black">5</span> (Target: 5)
            </li>
            <li>
              Information Loss: 📊 <span className="text-black">14.2%</span> (Acceptable: &lt;20%)
            </li>
            <li>
              Data Utility Score: 📈 <span className="text-black">85.8%</span> (Good: &gt;80%)
            </li>
            <li>
              Equivalence Classes: <span className="text-black">2,509 groups</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quality Validation */}
      <div className="mb-6 rounded-md">
        <h3 className="text-base font-semibold mb-2">Quality Validation:</h3>
        <div className='bg-white rounded-2xl shadow-lg p-4'>
        <ul className="text-sm text-[#2f3542] space-y-1">
          <li>✅ No identifiable individuals found</li>
          <li>✅ All quasi-identifier groups meet k=5 requirement</li>
          <li>✅ Data integrity maintained</li>
          <li>⚠️ 3 records suppressed due to outlier values</li>
        </ul>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-6 text-sm">
        <button className="bg-[#3742fa] hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium">
          📥 Download Anonymized Data
        </button>
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-medium">
          📄 Generate Report
        </button>
        <button className="bg-[#3742fa] hover:bg-blue-900 px-4 py-2 rounded-lg text-white font-medium">
          🔄 Retry
        </button>
      </div>
    </div>
  );
};

