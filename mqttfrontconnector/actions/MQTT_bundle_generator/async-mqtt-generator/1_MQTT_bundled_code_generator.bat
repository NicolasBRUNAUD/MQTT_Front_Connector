

@echo off

REM =========== PARAMS ===========
set dev_dir=%~dp0..\..
set webpack_config=%~dp0.\Webpack_MQTT_bundling.conf
set lib_dir=%dev_dir%\node_modules\async-mqtt
set lib_file=index.js


REM =========== START ===========

echo.
echo =========== Install library =========== 
cd /D "%dev_dir%"
call npm i async-mqtt

echo.
echo  =========== Install library all dependencies =========== 
cd /D "%lib_dir%"
call npm install .

echo.
echo  =========== Use webpack to bundle it =========== 
call webpack  ./%lib_file% -c "%webpack_config%" 

echo.
echo  =========== move bundle file result and open it in notepad =========== 
copy /Y "%lib_dir%\dist\main.js" "%~dp0.\main.js"
start "bundled script" notepad "%~dp0.\main.js"

echo.
echo  =========== Delete install folder =========== 
cd /d %~dp0
rd /S /Q "%dev_dir%\node_modules" 


pause