import RestApis from './RestApiUrls'

const habitantService = {
  create: RestApis.habitantService + '/habitant/create',
  update: RestApis.habitantService + '/habitant/update',
  findallbyiscitizen: RestApis.habitantService + '/habitant/findallbyiscitizen/',
  findallbyname: RestApis.habitantService + '/habitant/findallbyname/',
  findallbyhasdrivinglicense: RestApis.habitantService + '/habitant/findallbyhasdrivinglicense/',
  findallnumberbychildren: RestApis.habitantService + '/habitant/findallnumberbychildren/',
  findbyid: RestApis.habitantService + '/habitant/findbyid/',
  findall: RestApis.habitantService + '/habitant/findall',
  findchildrenbyid: RestApis.habitantService + '/habitant/findchildrenbyid/',
  updatebyid: RestApis.habitantService + '/habitant/updatebyid',

}

export default habitantService
