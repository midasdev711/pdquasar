export default function () {
  return {
    //
    initialized: false,
    isLoadingAssetData: false,
    assetsData: [{
      'id': 1,
      'viewId': 'MPL000111',
      'eqpType': 'Measuring Instruments',
      'manufacturer': 'Temp. Sensors1',
      'brand': 'Neptronic',
      'model': 'TCB50',
      'description': 'Temp. Sensor - 52'
    },
    {
      'id': 2,
      'viewId': 'MPL000112',
      'eqpType': 'Measuring Instruments',
      'manufacturer': 'Temp. Sensors3',
      'brand': 'Neptronic',
      'model': 'TCB50',
      'description': 'Temp. Sensor - 52'
    },
    {
      'id': 3,
      'viewId': 'MPL000113',
      'eqpType': 'Measuring Instruments',
      'manufacturer': 'Temp. Sensors2',
      'brand': 'Neptronic',
      'model': 'TCB50',
      'description': 'Temp. Sensor - 52'
    },
    {
      'id': 4,
      'viewId': 'MPL000114',
      'eqpType': 'Measuring Instruments',
      'manufacturer': 'Temp. Sensors1',
      'brand': 'Neptronic',
      'model': 'TCB50',
      'description': 'Temp. Sensor - 52'
    },
    ],
    assetsColumnInfo: [
      {
        name: 'id',
        required: true,
        label: 'Id',
        align: 'left',
        field: row => row.id,
        format: val => `${val}`,
        sortable: true
      },
      { name: 'viewId', align: 'center', label: 'Record ID', field: 'viewId', sortable: true },
      { name: 'eqpType', label: 'Equipment Type', field: 'eqpType', sortable: true },
      { name: 'manufacturer', label: 'Manufacturer', field: 'manufacturer' },
      { name: 'brand', label: 'Brand', field: 'brand' },
      { name: 'model', label: 'Model', field: 'model' },
      { name: 'description', label: 'Description', field: 'description', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    ],
    refData: {
      docTypes: [
        { type: 'Measuring Instruments', subType: 'Temp. Sensors1', manufacturer: 'Neptronics', model: 'TCB50' },
        { type: 'Measuring Instruments', subType: 'Temp. Sensors1', manufacturer: 'Neptronics', model: 'TCB50' },
        { type: 'Measuring Instruments', subType: 'Temp. Sensors1', manufacturer: 'Neptronics', model: 'TCB50' },
        { type: 'Testing Instruments', subType: 'Test. Sensors1', manufacturer: 'Neptronics', model: 'RCB50' },
        { type: 'Testing Instruments', subType: 'Test. Sensors2', manufacturer: 'Subtornics', model: 'TCB20' },
        { type: 'Testing Instruments', subType: 'Test. Sensors3', manufacturer: 'Neptronics', model: 'TCB320' },
        { type: 'Facility Instruments', subType: 'Pressure. Sensors1', manufacturer: 'Neptronics', model: 'ICB50' },
        { type: 'Facility Instruments', subType: 'Facility. Sensors1', manufacturer: 'Vuetronics', model: 'TCB40' },
        { type: 'Facility Instruments', subType: 'Weight. Sensors1', manufacturer: 'Neptronics', model: 'TCB32' },
      ],
      siteInfo: [
        { siteName: 'Qlc Bio', siteAddress: 'Forensic 1001', cityZipCode: 'San Deigo, CA - 08551', depMgr: ['John Smith', 'Jane Doe', 'Kelly Smith'] },
        { siteName: 'Qlc Bio2', siteAddress: 'Forensic 1021', cityZipCode: 'San Deigo, CA - 08551', depMgr: ['John Smith', 'Jane Doe', 'Kelly Smith'] },
        { siteName: 'Qlc Bio3', siteAddress: 'Forensic 1031', cityZipCode: 'San Jose - 08551', depMgr: ['John Doe', 'Jane Kumar', 'Kelly Unknown'] },
        { siteName: 'Qlc Site2', siteAddress: 'Forensic 1041', cityZipCode: 'Las Angelos, CA - 08551', depMgr: ['John Smith', 'Jane Doe', 'Priscilla Smith'] },
        { siteName: 'Qlc Facility', siteAddress: 'Forensic 1301', cityZipCode: 'Las Vegas, NV - 08551', depMgr: ['John Smith', 'Jane Doe', 'Huan Smith'] },
        { siteName: 'Qlc Tech', siteAddress: 'Forensic 1201', cityZipCode: 'San Deigo, CA - 08551', depMgr: ['John Smith', 'Kumar Doe', 'Kelly Smith'] },
      ]
    }
  }
}
