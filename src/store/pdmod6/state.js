export default function () {
  return {
    //
    initialized: false,
    isLoadingAssetData: false,
    assetsData: [],
    assetTypes: [],
    calibrationsData: [],
    assetsColumnInfo: [
      { name: 'masterViewId', label: 'Master View Id', field: 'masterViewId', sortable: true },
      { name: 'owner', align: 'center', label: 'Owner', field: 'owner', sortable: true },
      { name: 'model', label: 'Model', field: 'model' },
      { name: 'recordType', label: 'Record Type', field: 'recordType' },
      { name: 'siteLocation', label: 'Site Location', field: 'siteLocation' },
      { name: 'description', label: 'Description', field: 'description', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    ],
    calibrationsColumnInfo: [
      { name: 'masterViewId', label: 'Master View Id', field: 'masterViewId', sortable: true },
      { name: 'assignedTo', align: 'center', label: 'Assigned To', field: 'assignedTo', sortable: true },
      { name: 'autoScheduleViewId', label: 'Auto Schedule ViewId', field: 'autoScheduleViewId' },
      { name: 'recordType', label: 'Record Type', field: 'recordType' },
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
